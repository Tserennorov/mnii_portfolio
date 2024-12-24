import React from "react";
const icon = [
  { name: "/appss/image.png", icon: "Javascript" },
  { name: "/appss/image copy.png", icon: "Typescript" },
  { name: "/appss/image copy 2.png", icon: "React" },
  { name: "/appss/image copy 3.png", icon: "Next.js" },
  { name: "/appss/image copy 4.png", icon: "Node.js" },
  { name: "/appss/image copy 5.png", icon: "Express.js" },
  { name: "/appss/image copy 6.png", icon: "Nest.js" },
  { name: "/appss/image copy 7.png", icon: "Socket.io" },
  { name: "/appss/image copy 8.png", icon: "PostgreSQL" },
  { name: "/appss/image copy 9.png", icon: "MongoDB" },
  { name: "/appss/image copy 10.png", icon: "Sass/Scss" },
  { name: "/appss/image copy 11.png", icon: "Tailwindcss" },
  { name: "/appss/image copy 12.png", icon: "Figma" },
  { name: "/appss/image copy 13.png", icon: "Cypress" },
  { name: "/appss/image copy 14.png", icon: "Storybook" },
  { name: "/appss/image copy 15.png", icon: "Git" },
];
export const Skills = () => {
  return (
    <skills className="flex flex-col items-center justify-center py-10 px-8 gap-6 bg-white dark:bg-black dark:text-white object-cover">
      <h2 className="flex rounded-full font-medium text-xs dark:bg-slate-800  dark:text-white bg-[#E5E7EB] text-[#4B5563] px-3 py-2">
        Skills
      </h2>
      <p>The skills, tools and technologies I am really good at:</p>

      <div className="flex gap-10   justify-center items-center flex-row py-4 px-8 flex-wrap md:gap-16 object-cover">
        {icon.map((el, index) => {
          return (
            <div>
              <img src={el.name} key={index} alt="a" />
              <p key={index}>{el.icon}</p>
            </div>
          );
        })}
      </div>
    </skills>
  );
};
