import { LuMailOpen } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { PiFigmaLogoBold } from "react-icons/pi";

export const Contact = () => {
  const email = "User@gmail.com";
  const phoneNumber = "+976 99012059";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
  };

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <contact className="flex flex-col  items-center py-4 px-8 gap-6  bg-white dark:bg-black dark:text-white ">
      <h2 className="flex rounded-full font-medium text-xs dark:bg-slate-800  dark:text-white bg-[#E5E7EB] text-[#4B5563] px-3 py-2">
        Get in touch
      </h2>
      <p className="py-2 px-6 gap-6 text-slate-400 ">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>

      <button
        className="flex items-center gap-6 text-xl md:text-2xl"
        onClick={handleCopyEmail}
      >
        <div className="text-slate-400">
          <LuMailOpen />
        </div>

        <p>{email}</p>

        <div className="text-slate-400">
          <LuCopy />
        </div>
      </button>

      <button
        className="flex items-center gap-6 text-xl md:text-2xl "
        onClick={handleCopyPhone}
      >
        <div className="text-slate-400">
          <IoCallOutline />
        </div>

        <p>{phoneNumber}</p>
        <div className="text-slate-400">
          <LuCopy />
        </div>
      </button>

      <p className="text-slate-400">You may also find me on these platforms!</p>
      <div className="flex gap-4">
        <LuGithub />
        <FiTwitter />
        <PiFigmaLogoBold />
      </div>
    </contact>
  );
};
