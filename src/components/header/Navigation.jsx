import { motion } from "framer-motion";
import { useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

export const Navigation = ({ open }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const { theme, setTheme, systemTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <motion.div
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={variants}
          style={{
            position: "fixed",
            top: "36px",
            right: 0,
            bottom: 0,
            width: "80%",
            background: "#fff",
            zIndex: 1,
            backgroundColor: "black",
          }}
        >
          <div className="flex  flex-col gap-6 bg-white dark:bg-black  dark:text-white">
            <div className="flex flex-col gap-4">
              <a href="">About</a>
              <a href="">Work</a>
              <a href="">Testimonias</a>
              <a href="">Contact</a>
            </div>

            <div className="flex items-center justify-between">
              <p>Switch Theme</p>
              <button className="w-9 h-9" onClick={handleTheme}>
                <CgDarkMode />
              </button>
            </div>

            <div className="flex items-center gap-4 rounded-full font-medium text-xs bg-black text-white  dark:bg-white dark:text-black px-2 py-2 md:hidden">
              <button>Download CV</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
