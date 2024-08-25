import React from "react";
import Team from "./team";
import { teams } from "./teaminfo";

export default function Teams() {
  return (
    <div className=" bg-[#121212] py-10 px-20">
      <div className="heading pb-8">
        <div className="text-5xl font-semibold text-slate-200">Teams</div>
        <div className="text-lg text-[#DB9EE5] font-semibold">
          Meet our current execom
        </div>
      </div>
      <div className="md:grid grid-cols-4 gap-4">
        {teams.map((team) => (
          <Team
            key={team.name}
            name={team.name}
            className="col-span-1"
            img={team.img}
            position={team.position}
            linkedin={team.linkedin}
            github={team.github}
          />
        ))}
      </div>
    </div>
  );
}
