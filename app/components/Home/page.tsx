"use client";

import TechMosaic from "../TechMosaic";
import { aboutData } from "@/app/data/aboutData";

interface TechItem {
  stringValue: string;
}

export default function Home() {
  // Transform tech data
  const techSkills = aboutData.aboutTech.map(
    (tech: TechItem) => tech.stringValue
  );

  return (
    <div id="home" className="flex justify-between">
      <div className=" flex flex-col justify-center h-screen">
        <div className="space-y-4 w-full max-w-md">
          <h1 className="text-6xl font-bold">Jude Fabiano</h1>
          <h2 className="text-l font-bold">Software Engineer</h2>
          <p className="text-sm w-full max-w-md">
            Passionate software developer dedicated to crafting seamless user
            experiences and building scalable solutions.
          </p>
        </div>
        <div className="flex gap-4">
          <button>
            <p>Contact Me</p>
          </button>
          <button>
            <p>Download CV</p>
          </button>
          <button>
            <p>View Projects</p>
          </button>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <TechMosaic techSkills={techSkills} />
      </div>
    </div>
  );
}
