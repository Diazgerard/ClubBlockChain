"use client";;
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LinkPreview = ({
  children,
  url,
  imageSrc
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="relative inline-block">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        {children}
        
        <AnimatePresence>
          {showPreview && imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-2 z-50"
            >
              <div className="bg-gray-900 p-1 rounded-lg shadow-xl">
                <img 
                  src={imageSrc} 
                  alt="Social Media Preview"
                  className="w-64 h-auto rounded" // Changed from w-48 to w-64
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
};
