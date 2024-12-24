import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export const Dropdown = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-8 md:py-16 bg-white dark:bg-black dark:text-white gap-8 md:gap-12">
      {/* Text and Info Section */}
      <div className="flex flex-col gap-8 md:w-[768px] px-4">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
            Сайн байна уу.Миний нэр Цэрэнноров. 👋{" "}
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Би Pinecone Academy-д Software engineer чиглэлээр зургаан сарын турш
            суралцаж хоёр сар дадлагажиж энэ мэргэжлийг эзэмшсэн. Энэ хугацаанд
            Javascript, Typescript , React, Next.js, Node.js, Express.js,
            PosgreSQL,MongoDB, Tailwindcss, Figma зэрэг технологуудыг ашиглаж
            суралцсан.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start  gap-2">
            <div className="flex items-center md gap-2">
              <IoLocationOutline />
              <a className="font-bold" href="#">
                Улаанбаатар , Монгол
              </a>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <p className="font-semibold">Шинэ Төслүүд хийхэд бэлэн.</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-2xl">
            <LuGithub />
            <FiTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-64 h-64 md:w-72 md:h-80 flex justify-center items-center">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="/miniizurag.jpg"
          alt="Profile"
        />
      </div>
    </div>
  );
};
