import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamProps {
  name: string;
  img: string;
  position: string;
  linkedin: string;
  github: string;
}

export default function Team({
  name,
  img,
  position,
  linkedin,
  github,
}: TeamProps) {
  return (
    <div className="relative flex flex-col rounded-xl rounded-tl-none ">
      <div className="w-full bg-slate-200 flex rounded-xl rounded-tl-none items-center justify-center overflow-hidden">
        <img className="max-h-[300px] pt-4" src={img} alt={`${name}'s photo`} />
      </div>
      <div className="p-4 pb-0">
        <h3 className="text-slate-100 text-lg border-2 w-fit rounded-s-full rounded-e-full px-4">
          {name}
        </h3>
        <p className="text-[#DB9EE5] p-2 ">{position}</p>
      </div>

      {/* Overlay div */}
      <div className="absolute inset-0 bg-[#DB9EE5] flex items-center justify-center rounded-xl rounded-tl-none opacity-0 transition-opacity duration-1000 hover:opacity-100">
        <div className="text-white text-center p-4">
          <div>
            <h3 className="text-slate-100 text-lg font-semibold border-4 w-fit rounded-s-full rounded-e-full px-4">
              {name}
            </h3>
            <p className="text-[#9a00b3] p-2 ">{position}</p>
          </div>
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-gray-500 transform hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
