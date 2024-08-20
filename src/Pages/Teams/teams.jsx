import React from "react";
import Team from "./team";

export default function Teams() {
  return (
    <div className=" bg-[#121212] py-10 px-20">
      <div className="heading pb-8">
        <div className="text-5xl font-semibold text-slate-200">Teams</div>
        <div className="text-lg text-[#DB9EE5] font-semibold">
          Meet our current execom
        </div>
      </div>
      <div className="md:grid grid-cols-4">
        <Team
          name="Allen Binu"
          className="col-span-1"
          img="/prf.png"
          position="Director"
          linkedin="https://linkedin.com"
          github="https://github.com"
        />
      </div>
    </div>
  );
}
