import { useState, useEffect } from "react";

const images = [
  "/image.png",
  "/image2.webp",
  "/image3.webp",
  "/image4.webp",
  "/image5.webp",
];

function EventComponent() {
  const [tab, setTab] = useState(0);
  const [transition, setTransition] = useState("");

  const handleNext = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setTab((tab + 1) % images.length);
      setTransition("fade-in");
    }, 300);
  };

  const handlePrev = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setTab((tab - 1 + images.length) % images.length);
      setTransition("fade-in");
    }, 300);
  };

  return (
    <section id="events" className="px-4 py-8 md:px-24 flex flex-col">
      <div className="grid grid-cols-2 pb-8">
        <div className="flex flex-col col-span-1">
          <div className="text-5xl font-semibold text-white">EVENTS</div>
          <div className="text-2xl text-[#DB9EE5] font-semibold">
            Our Current and Upcoming Events
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center justify-end 
        "
        >
          <button
            onClick={handlePrev}
            className="flex items-center text-slate-300 pb-1 px-4 rounded border-2 border-slate-300 text-xl font-semibold justify-center bg-[#9A00B3] hover:bg-transparent hover:border-[#9A00B3] hover:text-[#9A00B3] duration-300"
          >
            Previous Events
          </button>
        </div>
      </div>
      <div className="event-carousel flex  relative overflow-hidden h-[60vh]">
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="w-full absolute left-[25%] flex">
            <img
              className={`three absolute -left-60 scale-[0.85] h-full -z-10 blur-md aspect-square w-[360px] ${transition}`}
              src={images[(tab + 2) % images.length]}
              alt="Event"
            />
            <img
              className={`two absolute -left-32 scale-[0.925] h-full -z-10 blur-sm aspect-square w-[360px] ${transition}`}
              src={images[(tab + 1) % images.length]}
              alt="Event"
            />
            <img
              className={`one aspect-square w-[360px] ${transition}`}
              src={images[tab]}
              alt="Event"
            />
            <div className="bg-[#7b2e87] w-[35%] p-4 scale-y-[0.85]">
              <div className="pl-4 pb-2 text-2xl scale-y-[1.2] font-bold text-white">
                Event Name
              </div>
              <div className="pl-4 pb-4">
                <div className="text-xl scale-y-[1.2] font-semibold text-slate-200">
                  Date :{" "}
                </div>
                <div className="text-xl scale-y-[1.2] font-semibold text-slate-200">
                  Time :{" "}
                </div>
                <div className="text-xl scale-y-[1.2] font-semibold text-slate-200">
                  Venue :{" "}
                </div>
              </div>
              <div className="pl-4 pb-4 text-xl scale-y-[1.2] font-semibold text-slate-200">
                Register Here :{" "}
              </div>
              <div className="pl-4 pb-4 flex scale-y-[1.2] font-normal text-slate-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                recusandae rem rerum molestias magnam minus facere nesciunt eius
                nisi deserunt! Molestiae fuga quisquam rem iste aliquam
                provident ad vel cupiditate!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 mx-2 min-w-[120px] rounded border-2 text-xl font-semibold bg-transparent border-[#9A00B3] text-[#9A00B3] duration-300 hover:bg-[#9A00B3] hover:text-[#111010] outline outline-transparent hover:outline-black -outline-offset-4"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className=" px-4 py-2 mx-2 min-w-[120px] rounded border-2 text-xl font-semibold bg-transparent border-[#9A00B3] text-[#9A00B3] duration-300 hover:bg-[#9A00B3] hover:text-[#111010] outline outline-transparent hover:outline-black -outline-offset-4"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default EventComponent;
