"use client";

import { useEffect, useState } from "react";

interface SpotlightEffectProps {
  size?: number;
  color?: string;
  opacity?: number;
  fadeDistance?: number;
  fixed?: boolean;
}

export const SpotlightEffect = ({
  size = 600,
  color = "var(--spotlight)",
  opacity = 0.25,
  fadeDistance = 40,
  fixed = false,
}: SpotlightEffectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // If the color is a CSS variable, we use it directly; otherwise, we wrap it in rgba()
  const backgroundStyle = color.startsWith("var(")
    ? `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${color}, ${opacity}), transparent ${fadeDistance}%)`
    : `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${color}, ${opacity}), transparent ${fadeDistance}%)`;

  return (
    <div
      className={`pointer-events-none ${
        fixed ? "fixed" : "absolute"
      } inset-0 z-10`}
      style={{
        background: backgroundStyle,
      }}
    />
  );
};

export default SpotlightEffect;
