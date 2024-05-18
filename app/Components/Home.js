// import React from "react";

// const Home = () => {
//   return (
//     <div className="m-11">
//       <div className=" flex ">
//         <div className="w-1/2 text-black w-1/2">
//           <h1 className="text-6xl">Hello!!!</h1>
//           <h1 className="text-5xl">I am Muhammad Fahad.</h1>
//           <h1 className="text-4xl">
//             I am a full stack web developer.Working as a solo freelancer
//           </h1>
//           <div className="">
//             {" "}
//             <button className="border-2 border-sky-500 hover:border-black font-bold rounded-md h-9 w-24 hover:bg-blue-300">
//               Sign up
//             </button>
//           </div>
//         </div>

//         <div className="bg-red-200 w-1/2 flex  justify-items-end">
//           <img
//             src="/images/profile-pic2.jpg"
//             alt="Description"
//             class="w-full  h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//           ></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;import React from "react";import React from "react";
import React from "react";

const Home = () => {
  const animations = ['move1', 'move2', 'move3'];

  const getRandomAnimation = () => {
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <div className="p-11">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-black mb-8 md:mb-0 md:pr-8">
          <h1 className={`text-6xl mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500 ${getRandomAnimation()}`}>
            Hello!!!
          </h1>
          <h1 className={`text-5xl mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500 ${getRandomAnimation()}`}>
            I am Muhammad Fahad.
          </h1>
          <h1 className={`text-4xl mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500 ${getRandomAnimation()}`}>
            I am a full stack web developer. Working as a solo freelancer.
          </h1>
          <button className="border-2 border-sky-500 hover:border-black font-bold rounded-md h-10 w-28 hover:bg-blue-300 transition-colors duration-300">
            Sign up
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/images/profile-pic2.png"
            alt="Profile Picture"
            className="w-full md:w-3/4 lg:w-2/3 rounded-lg border-4 border-white shadow-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:rotate-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
