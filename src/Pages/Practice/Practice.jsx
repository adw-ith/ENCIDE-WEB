import Card from "./Card";

const Practice = () => {
  return (
    <div className=" bg-[#121212] py-10 px-20">
      <div>
        <h1 className="text-4xl text-center text-white md:text-5xl sm:text-left font-semibold mb-2">
          PRACTICE YOUR SKILLS
        </h1>
        <p className="text-[#9a00b3] text-center font-semibold text-lg sm:text-left md:text-xl">
          Improve your coding skills with the following websites
        </p>
        <Card />
      </div>
    </div>
  );
};
export default Practice;
