import React from "react";
import dog from "../assets/adoptdog.jpg"; // Importing the image asset
import { FiPhoneCall } from "react-icons/fi";



const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b px-16 bg-white text-green-800 mx-60 ">
      <a href="/home" className="text-4xl font-extrabold text-green-800 " style={{ fontFamily: 'Paytone One, sans-serif' }}>HELP</a>
        <nav className="flex gap-8 text-lg font-medium text-gray-900">
          <a href="/adopt" className="hover:underline">Adopt</a>
          <a href="/missing" className="hover:underline">Missing Pets</a>
          <a href="/services" className="hover:underline">Who We Are</a>
          <a href="/profile" className="hover:underline">My Profile</a>
        </nav>
        <button className="bg-green-800 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md">LOGIN</button>
      </header>

       {/* Hero Section */}
       <section className="text-center my-16 border-b-gray-200 mb-32 mt-32" style={{ fontFamily: 'Newsreader, sans-serif' }}>
        {/* Emergency Call Button */}
        <div className="fixed bottom-6 right-6 flex items-center bg-white text-green-700 px-4 py-2 rounded-full shadow-lg border border-gray-300 cursor-pointer hover:bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <FiPhoneCall className="text-2xl mr-2" />
          <span className="font-bold text-md">MAKE AN EMERGENCY CALL!</span>
        </div>
        <h2 className="text-6xl font-regular text-gray-700">Adopt an Animal</h2>
        <p className="italic text-gray-600 text-3xl mt-3 mb-6">
          "Compassion in Action: Protecting Lives, Giving Hope to Stray Animals"
        </p>
        <button className="bg-green-800 text-white px-8 py-3 mt-6 rounded-md text-md font-semibold shadow-lg hover:bg-green-600 mb-40" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Find a Pet!
        </button>
        <hr className=" border-gray-900 mx-64" />
      </section>

      {/* Pet Cards */}
      <div className="flex gap-6 px-10 py-5 mt-[-120px] mx-16 ">

        {[1, 2, 3].map((_, index) => (
          <div key={index} className=" p-4 rounded-2xl shadow-xl w-100 h-150 text-center">
          <img
            src={dog}
            alt="Background"
            className="w-full h-96 object-cover"
            />
            <h3 className="font-bold mt-4 text-2xl text-green-700">Browny</h3>
            <p className="text-gray-700 text-lg">Gender: Male</p>
            <p className="text-gray-700 text-lg">Age: 3yrs old</p>
            <p className="text-gray-700 text-lg">Breed: Golden Retriever</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Description: A loving and playful companion looking for a forever home.
            </p>
          </div>
        ))}
        
      </div>
      <hr className=" border-gray-900 mx-64 mt-16" />

      {/* Emergency Contacts */}
      <footer className="mt-8 p-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between border-b pb-6 mb-6">
            <div className="font-bold text-md text-gray-800">REPORT A STRAY ANIMAL!</div>
            <div className="text-left">
              <p className="text-lg">DIAL THIS NUMBER: 09238423345</p>
              <p className="text-lg">LAND LINE: 234-2323-234</p>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit......</p>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div className="font-bold text-md text-gray-800">REPORT A MISSING PET</div>
            <div className="text-left">
              <p className="text-lg">DIAL THIS NUMBER: 09238423345</p>
              <p className="text-lg">LAND LINE: 234-2323-234</p>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit......</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
