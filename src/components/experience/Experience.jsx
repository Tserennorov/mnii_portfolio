import { FaUpwork } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";

export const Experience = () => {
  const arr1 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut pretium arcu et massa semper, id fringilla leo semper.",
    "Sed quis justo ac magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  const arr2 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut pretium arcu et massa semper, id fringilla leo semper.",
    "Sed quis justo ac magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  const arr3 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut pretium arcu et massa semper, id fringilla leo semper.",
    "Sed quis justo ac magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  return (
    <experience className="flex flex-col  items-center py-4 px-8 gap-6  bg-[#F9FAFB] dark:bg-[#111827] dark:text-white ">
      <h2 className="flex rounded-full font-medium text-xs dark:bg-slate-800  dark:text-white bg-[#E5E7EB] text-[#4B5563] px-3 py-2">
        Experience
      </h2>
      <p className="py-2 px-6 gap-6">
        Here is a quick summary of my most recent experiences:
      </p>

      <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-8 w-80 h-96 md:w-[896px] md:h-[288px]  rounded-xl bg-gradient-to-r gap-2 px-4 border-solid border-1 drop-shadow-xl bg-[#FFFFFF]  dark:bg-[#1F2937] ">
        <img className="w-[102px] h-7" src="/appwork/image.png" alt="" />
        <div className="md:flex md:flex-row-reverse gap-12">
          <p className=" font-normal text-slate-400 w-36 h-6">
            Nov 2021 - Present
          </p>
          <div className="md:flex md:flex-col">
            <p className=" font-bold w-[279px] h-7">Sr. Frontend Developer</p>
            <div>
              {arr1.map((el, index) => {
                return (
                  <li className=" font-normal text-slate-400 md:px-2">{el}</li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-8 w-80 h-96 md:w-[896px] md:h-[288px] drop-shadow-xl rounded-xl bg-gradient-to-r gap-2 px-4 border-solid border-1 bg-[#FFFFFF]  dark:bg-[#1F2937] ">
        <img className="w-[102px] h-7" src="/appwork/image.png" alt="" />
        <div className="md:flex md:flex-row-reverse gap-12">
          <p className=" font-normal text-slate-400 w-36 h-6">
            Nov 2021 - Present
          </p>
          <div className="md:flex md:flex-col">
            <p className=" font-bold w-[279px] h-7">Sr. Frontend Developer</p>
            <div>
              {arr2.map((el, index) => {
                return (
                  <li className=" font-normal text-slate-400 md:px-2">{el}</li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:pt-8 w-80 h-96 md:w-[896px] md:h-[288px] drop-shadow-xl rounded-xl bg-gradient-to-r gap-2 px-4 border-solid border-1 bg-[#FFFFFF]  dark:bg-[#1F2937] ">
        <img className="w-[102px] h-7" src="/appwork/image.png" alt="" />
        <div className="md:flex md:flex-row-reverse gap-12">
          <p className=" font-normal text-slate-400 w-36 h-6">
            Nov 2021 - Present
          </p>
          <div className="md:flex md:flex-col">
            <p className=" font-bold w-[279px] h-7">Sr. Frontend Developer</p>
            <div>
              {arr3.map((el, index) => {
                return (
                  <li className=" font-normal text-slate-400 md:px-2">{el}</li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </experience>
  );
};
