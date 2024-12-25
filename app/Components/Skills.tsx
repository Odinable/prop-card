import React from "react";

export interface Props {
  skillname: string;
  bgColor: string;
}

const Skills = ({ skillname, bgColor }: Props) => {
  return (
    <button
      className={`${bgColor} text-white font-bold py-2 px-4 rounded cursor-pointer `}
    >
      {skillname}
    </button>
  );
};

export default Skills;
