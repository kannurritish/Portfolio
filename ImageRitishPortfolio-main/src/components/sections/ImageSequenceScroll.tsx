'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ImageSequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Pattern based on the public/Images directory
  const frameCount = 300;
  
  // Use Refs for mutable state that doesn't need to trigger re-renders
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Generate array dynamically based on the folder contents and filename pattern
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = imagesRef.current[index];
    if (!image) return;

    // Use requestAnimationFrame for smooth rendering and to prevent flickering
    requestAnimationFrame(() => {
      const { width, height } = canvas;
      
      // Preserve original aspect ratio without stretching
      const hRatio = width / image.width;
      const vRatio = height / image.height;
      const ratio = Math.min(hRatio, vRatio); // Use Math.min to fit within canvas, Math.max to cover
      
      const centerShift_x = (width - image.width * ratio) / 2;
      const centerShift_y = (height - image.height * ratio) / 2;
      
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

  // Handle Resize and initial draw
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      if (isLoaded) {
        drawFrame(Math.round(frameIndex.get()));
      }
    };

    handleResize(); // Initial resize
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="w-full relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
            Loading Experience...
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
        />
      </div>
    </div>
  );
}
