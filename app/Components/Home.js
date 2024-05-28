// import React from "react";

// const Home = () => {
//   const animations = ['move1', 'move2', 'move3'];

//   const getRandomAnimation = () => {
//     return animations[Math.floor(Math.random() * animations.length)];
//   };

//   const cvUrl = 'images/cv.pdf'; // Replace with the actual URL of your CV

//   return (
//     <div className="p-11">
//       <div className="flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 text-black mb-8 md:mb-0 md:pr-8">
//           <h1 className={`text-6xl mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500 ${getRandomAnimation()}`}>
//             Hello!!!
//           </h1>
//           <h1 className={`text-5xl mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500 ${getRandomAnimation()}`}>
//             I am Muhammad Fahad.
//           </h1>
//           <h1 className={`text-4xl mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500 ${getRandomAnimation()}`}>
//             I am a full stack web developer. Working as a solo freelancer.
//           </h1>
//           <div className="flex justify-center">
//             <a
//               href={cvUrl}
//               download
//               className="border-2 border-sky-500 hover:border-black font-bold rounded-md h-10 w-40 hover:bg-blue-300 transition-colors duration-300 flex items-center justify-center"
//             >
//               Download CV
//             </a>
//           </div>
//         </div>

//         <div className="md:w-1/2 flex justify-center items-center">
//           <img
//             src="/images/profile-pic2.png"
//             alt="Profile Picture"
//             className="w-full md:w-3/4 lg:w-2/3 rounded-lg border-4 border-white shadow-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:rotate-2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";

const Home = () => {
  const animations = ['move1', 'move2', 'move3'];

  const getRandomAnimation = () => {
    return animations[Math.floor(Math.random() * animations.length)];
  };

  const cvUrl = 'images/cv.pdf'; // Replace with the actual URL of your CV

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
          <div className="flex justify-center">
            <a
              href={cvUrl}
              download
              className="border-2 border-sky-500 hover:border-black font-bold rounded-md h-10 w-40 hover:bg-blue-300 transition-colors duration-300 flex items-center justify-center"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/images/profile-pic2.png"
            alt="Profile Picture"
            className="w-full md:w-3/4 lg:w-2/3 rounded-lg border-4 border-white shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:rotate-2 hover:shadow-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
