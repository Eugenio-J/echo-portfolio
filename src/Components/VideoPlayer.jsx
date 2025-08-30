import React, { useState, useRef } from 'react';
import { Play, X, Maximize2 } from 'lucide-react';
import {PROJECTS} from "../constants"

// Expandable Video Player Component
const VideoPlayer = ({ videoUrl, posterImage, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(async () => {
        if (videoRef.current) {
          try {
            await videoRef.current.play();
            setIsPlaying(true);
          } catch (error) {
            console.log('Autoplay was prevented:', error);
            setIsPlaying(false);
          }
        }
      }, 300);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsExpanded(false);
  };

  const handlePlayPause = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Play was prevented:', error);
        }
      }
    }
  };

  return (
    <>
      {/* Backdrop overlay when expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-40 transition-opacity duration-300"
          onClick={handleClose}
        />
      )}
      
      {/* Video container */}
      <div className={`
        relative transition-all duration-500 ease-out
        ${isExpanded 
          ? 'fixed inset-4 md:inset-8 lg:inset-16 z-50' 
          : `${className} hover:scale-105 cursor-pointer`
        }
      `}>
        {/* Video element */}
        <video
          ref={videoRef}
          className={`
            w-full h-full object-cover rounded shadow-lg
            ${!isExpanded ? 'cursor-pointer' : ''}
          `}
          onClick={handleVideoClick}
          poster={posterImage}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          playsInline
          muted={!isExpanded}
          preload="metadata"
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>

        {/* Play button overlay (when not expanded and not playing) */}
        {!isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded transition-opacity hover:bg-opacity-40">
            <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all hover:scale-110">
              <Play className="w-4 h-4 text-gray-800 ml-0.5" />
            </div>
          </div>
        )}

        {/* Controls when expanded */}
        {isExpanded && (
          <>
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center transition-all z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Play/Pause button overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayPause}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-all hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            )}
          </>
        )}

        {/* Expand hint (when not expanded) */}
        {!isExpanded && (
          <div className="absolute bottom-2 right-2 opacity-0 hover:opacity-100 transition-opacity">
            <div className="bg-black bg-opacity-50 rounded-full p-1">
              <Maximize2 className="w-3 h-3 text-white" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;