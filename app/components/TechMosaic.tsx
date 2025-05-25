"use client";

import { useEffect, useState } from "react";

interface TechMosaicProps {
  techSkills: string[];
}

export default function TechMosaic({ techSkills }: TechMosaicProps) {
  const [leftColumn, setLeftColumn] = useState<string[]>([]);
  const [rightColumn, setRightColumn] = useState<string[]>([]);
  // Create random seeds for consistent size rendering
  const [randomSeeds, setRandomSeeds] = useState<number[]>([]);

  useEffect(() => {
    // Split skills into two columns
    const left: string[] = [];
    const right: string[] = [];

    techSkills.forEach((skill, index) => {
      if (index % 2 === 0) {
        left.push(skill);
      } else {
        right.push(skill);
      }
    });

    setLeftColumn(left);
    setRightColumn(right);

    // Create random seeds for each skill for consistent rendering
    setRandomSeeds(
      Array.from({ length: techSkills.length }, () => Math.random())
    );
  }, [techSkills]);

  // Get size class based on a seed value
  const getSizeClass = (seed: number) => {
    if (seed < 0.7) return "h-36"; // 70% normal
    if (seed < 0.9) return "h-48"; // 20% medium
    return "h-72"; // 10% large
  };

  return (
    <div className="flex w-full max-h-screen overflow-y-auto no-scrollbar p-4 space-x-2">
      {/* Left column - starts higher */}
      <div className="w-1/2 space-y-2">
        {leftColumn.map((skill, index) => {
          const seedIndex = index * 2; // Even indices
          const heightClass = randomSeeds[seedIndex]
            ? getSizeClass(randomSeeds[seedIndex])
            : "h-24";

          return (
            <div
              key={`left-${index}`}
              className="transform-gpu overflow-visible">
              <div
                className={`${heightClass} bg-primary shadow-md p-4 hover:bg-primary/80 hover:scale-110 transition-all duration-300 cursor-pointer hover:z-20 relative hover:shadow-xl`}>
                <p className="">{skill}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right column - starts lower with top padding */}
      <div className="w-1/2 pt-20 space-y-2">
        {rightColumn.map((skill, index) => {
          const seedIndex = index * 2 + 1; // Odd indices
          const heightClass = randomSeeds[seedIndex]
            ? getSizeClass(randomSeeds[seedIndex])
            : "h-36";

          return (
            <div
              key={`right-${index}`}
              className="transform-gpu overflow-visible">
              <div
                className={`${heightClass} bg-primary shadow-md p-4 rounded-md hover:bg-primary/80 hover:scale-110 transition-all duration-300 cursor-pointer hover:z-20 relative hover:shadow-xl`}>
                <p className="">{skill}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
