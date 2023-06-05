import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  border-gray-500">
            About Me:
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a software developer based in Italy with a passion for web development.
         I love solving complex problems and turning them into efficient, high-speed, and reliable applications.
        </p>

        <br />

        <p className="text-xl">
        In my previous roles, I have demonstrated my ability to rapidly develop and design web applications and websites that meet the specific needs of businesses.
         I believe that user-friendly and visually appealing designs are essential for a smooth and seamless user experience. 
         I have had the privilege of working with some of the most reputable brands in the industry,
         and I have continued to develop my skills in effectively communicating their messages and identities through exceptional web applications.
        I am always looking for new challenges and opportunities to learn and grow. 
        If you are looking for a software developer who is passionate about their work and committed to excellence,
         I would be honored to discuss how I can help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default About;
