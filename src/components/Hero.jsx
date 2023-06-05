
import heroImage from '../../public/mainimg.png'
const Hero = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Hello i'm <span className="flex flex-col">Albert.</span>
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          Frontend Developer.
          I love to work on web application using technologies like
          React, Tailwind, Next JS.
        </p>

        <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 cursor-pointer">
            <a href="https://drive.google.com/file/d/1Oboqi_B38xndFzKYli0-TollBPWZAN7-/view?usp=sharing">RESUME PDF</a>
        </div>
      </div>

      <div className="rounded-full w-80 h-80 px-4 mt-20 md:h-96 md:w-96">
        <img
          src={heroImage}
          />
      </div>
    </div>
  </div>
  )
}

export default Hero;