'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function GlobalImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const frameCount = 300;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const imageUrls = Array.from({ length: frameCount }, (_, i) => 
      `/Images/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
    );

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        loadedImages[index] = img;
        if (loadedCount === frameCount) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };
    });
  }, []);

  // Track global window scroll
  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const image = imagesRef.current[index];
    if (!image) return;

    requestAnimationFrame(() => {
      // canvas.width and height are the high-res physical pixels
      const { width, height } = canvas;
      const hRatio = width / image.width;
      const vRatio = height / image.height;
      const ratio = Math.max(hRatio, vRatio); // Math.max to cover the area without stretching
      
      const centerShift_x = (width - image.width * ratio) / 2;
      const centerShift_y = (height - image.height * ratio) / 2;
      
      // Ensure crisp rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        image, 
        0, 0, image.width, image.height,
        centerShift_x, centerShift_y, image.width * ratio, image.height * ratio
      );
    });
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      drawFrame(Math.round(latest));
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      // Account for Retina/4K displays to prevent pixelation
      const dpr = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * dpr;
      canvasRef.current.height = window.innerHeight * dpr;
      
      if (isLoaded) {
        drawFrame(Math.round(frameIndex.get()));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, frameIndex]);

  // Avoid hydration mismatch by not rendering theme-specific classes until mounted
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[0] pointer-events-none opacity-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    );
  }

  const isLight = resolvedTheme === 'light';

  return (
    <>
      {/* Background layer (Optional base if needed, but body handles this) */}
      
      {/* Image Sequence Layer */}
      <div 
        className={`fixed inset-0 z-[0] pointer-events-none transition-opacity duration-300 ${
          isLight ? 'opacity-15' : 'opacity-50 mix-blend-screen'
        }`}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      
      {/* Theme Overlay Layer */}
      {isLight ? (
        <div 
          className="fixed inset-0 z-[0] pointer-events-none transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, rgba(254, 210, 79, 0.30), rgba(255, 244, 79, 0.25), rgba(183, 217, 87, 0.30))'
          }}
        />
      ) : (
        <div 
          className="fixed inset-0 z-[0] pointer-events-none transition-opacity duration-300 bg-black/10"
        />
      )}
    </>
  );
}
