/* eslint-disable @next/next/no-img-element */
import React from "react";
import Skills from "./Skills";

const Card = () => {
  return (
    <div className=" border-black border-4 w-[100%] max-w-[700px]">
      <div className="">
        <img src="/1.png" alt="asd" className="w-[100%]" />
      </div>
      <div className="w-[100%]  p-8 border-t-4 border-black">
        <b>
          <h1 className="text-4xl text-bold pb-4">CLEMENTIME</h1>
        </b>
        <p className="font-serif">
          Clementine is a fictional character in The Walking Dead episodic
          adventure video game series, a spin-off of the Robert Kirkman comic of
          the same name and developed by Telltale Games. An original character
          developed by Telltale for the video game series, she is the main
          protagonist and one of the playable characters. She is voiced by
          Melissa Hutchison and was written by several people, including Gary
          Whitta.
        </p>
        <br />
        <div className="flex gap-2 flex-wrap">
          <Skills skillname=" HTML + CSS" bgColor={`bg-red-500`} />
          <Skills skillname=" JAVASCRIPT" bgColor={`bg-yellow-500`} />
          <Skills skillname="SEO" bgColor={`bg-black`} />
          <Skills skillname="WORDPRESS" bgColor={`bg-blue-500`} />
          <Skills skillname="ELEMENTOR" bgColor={`bg-pink-500`} />
        </div>
      </div>
    </div>
    
  );
};

export default Card;
