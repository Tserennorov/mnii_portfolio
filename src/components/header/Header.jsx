import { Navigation } from "./Navigation";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const Header = ({ setOpen, open }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return (
    <div className=" flex justify-between items-center py-4 px-8 bg-white dark:bg-black dark:text-white h-16">
      <span className="whitespace-nowrap font-bold text-2xl">{"<SS/>"}</span>
      <div>
        <div className="hidden md:flex gap-6">
          <a
            href=""
            className="flex font-medium text-xs content-center items-center"
          >
            About
          </a>
          <a
            href=""
            className="flex font-medium text-xs content-center items-center"
          >
            Work
          </a>
          <a
            href=""
            className="flex font-medium text-xs content-center items-center"
          >
            Testimonias
          </a>
          <a
            href=""
            className="flex font-medium text-xs content-center items-center"
          >
            Contact
          </a>
          <a
            href=""
            className="flex font-medium text-xs content-center items-center"
          >
            Line
          </a>
          <div className="items-center gap-4 flex">
            <button className="w-9 h-9" onClick={handleTheme}>
              <CgDarkMode />
            </button>

            <button
              className="font-medium rounded-full text-xs
           bg-gray-200 text-black px-2
           py-1"
            >
              Download CV
            </button>
          </div>
        </div>
        <div>
          <Navigation />
        </div>

        {open === false ? (
          <IoMdMenu
            className="block md:hidden "
            onClick={() => setOpen(true)}
          />
        ) : (
          <IoMdArrowRoundBack onClick={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
};
