import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as THREE from 'three';

const Sunflower = () => {
  const [points, setPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef(null);

  // Function to animate the sunflower points
  const animateSunflower = useCallback(() => {
    // Apply a slight rotation for each frame
    const updatedPoints = points.map((point) => {
      const newPoint = point.clone();
      newPoint.rotateAround(new THREE.Vector2(0, 0), 0.01 * Math.random());
      return newPoint;
    });
    setPoints(updatedPoints); // Re-render with updated points
  }, [points]);

  // Initial generation of sunflower points
  useEffect(() => {
    const newPoints = [];
    for (let i = 0; i < 300; i++) {
      const angle = Math.PI * 2 * i / 300;
      const radius = Math.sin(i * 0.1) * 50 + 20;
      newPoints.push(new THREE.Vector2(radius * Math.cos(angle), radius * Math.sin(angle)));
    }
    setPoints(newPoints);
  }, []);

  // Simulate loading state
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  // Draw the sunflower on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas size explicitly
    canvas.width = 300;
    canvas.height = 300;

    const drawSunflower = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sunflower points
      context.fillStyle = '#ffe39e';
      points.forEach((point) => {
        const scale = 3;
        context.beginPath();
        context.arc(point.x * scale + canvas.width / 2, point.y * scale + canvas.height / 2, scale, 0, 2 * Math.PI);
        context.fill();
      });
    };

    const animation = setInterval(() => {
      animateSunflower();
      drawSunflower();
    }, 10);

    return () => clearInterval(animation);
  }, [animateSunflower, points]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 300, height: 300 }}
      onContextMenu={(e) => e.preventDefault()} // Disable right-click
    />
  );
};

export default Sunflower;
