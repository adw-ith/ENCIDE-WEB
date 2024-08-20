import link from "../../assets/link.png";
import { datas } from "../../data";

const Card = () => {
  return (
    <div className="mt-8 grid place-content-center sm:place-content-between gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {datas.map((data, index) => (
        <div
          key={index}
          className="flex flex-col bg-cardbg rounded-2xl w-80 p-8 justify-center items-center shadow-cardshadow duration-300"
        >
          <div className="mb-2">
            <img src={data.logo} alt="hackerrank" className="w-16" />
          </div>
          <h3 className="text-white text-2xl font-semibold">{data.name}</h3>
          <a
            href={data.link}
            className="mt-2 flex items-center gap-x-2 text-white text-lg bg-[#9A00B3] hover:bg-[#bc47ce] duration-300 px-2 py-0.5 rounded"
          >
            visit site
            <img src={link} alt="link" className="w-4" />
          </a>
        </div>
      ))}
    </div>
  );
};
export default Card;
