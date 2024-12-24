import { FaLocationDot } from "react-icons/fa6";
import { CgShapeCircle } from "react-icons/cg";

export const About = () => {
  return (
    <div
      className=" flex flex-col justify-center md:  
   md:flex-row  md:py-4 md:px-8 gap-12 w-60% h-60% bg-[#F9FAFB] dark:bg-[#111827] dark:text-white md:h-[992px]"
    >
      <div className="flex flex-col  items-center gap-4 flex-1">
        <h2 className=" rounded-full font-medium text-xs dark:bg-slate-800  dark:text-white bg-[#E5E7EB] text-[#4B5563] px-3 py-2 md:hidden">
          About me
        </h2>
        <div className="md:flex justify-center items-center py-4 px-8 flex-1 gap-5">
          <div>
            <div className="z-10 py-1 bg-white"></div>
            <img
              className="flex w-[400px] h-[480px] object-cover z-0"
              src="/miniizurag.jpg"
              alt="hack"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111827] dark:text-white flex-1">
        <h2 className="font-bold w{344px} h-16 flex py-4 px-8 ">
          Боловсролын зэрэг
        </h2>
        <div className="flex flex-col gap-y-3.5 py-4 px-8 ">
          <div className="flex font-bold content-center items-center gap-2">
            <div className="flex   h-2 w-2 bg-green-500 rounded-full "></div>
            <p className="flex font-normal text-slate-400">
              2008-2020 онд Нийслэлийн 40 дүгээр дунд сургуулийг төгсөж бүрэн
              дунд зэрэг авсан.
            </p>
          </div>
          <div className="flex font-bold content-center items-center gap-2 pl-1">
            <div className="flex h-2 w-2 bg-green-500 rounded-full "></div>
            <p className="flex font-normal text-slate-400">
              2021 оны намар цэргийн албанд татагдаж 1 жилийн хугацаатай
              хугацаат цэргийн албыг хааж гүйцэтгэсэн.
            </p>
          </div>

          <p className="flex font-normal text-slate-400">
            Finally, some quick bits about me.
          </p>
          <a href="" className="flex font-normal text-slate-400">
            B.E. in Computer Engineering
          </a>
          <a href="" className="flex font-normal text-slate-400">
            Full time freelancer
          </a>
          <a href="" className="flex font-normal text-slate-400">
            Avid learner
          </a>
          <a href="" className="flex font-normal text-slate-400">
            Aspiring indie hacker
          </a>
          <p className="flex font-normal text-slate-400">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
