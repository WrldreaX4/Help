import React from "react";
import dog from "../assets/adoptdog.png"; // Importing the image asset
import { FiSettings } from "react-icons/fi";

const MissingPage = () => {
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
{/* Missing Pets Section */}
<section className="py-10 px-10">
        <a href="/lostPage" className="fixed top-30 left-60 flex items-center bg-white text-green-700 px-4 py-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <FiSettings className="text-2xl mr-2" />
          <span className="font-bold text-md">MAKE A REPORT</span>
        </a>
</section>

<h2 className="text-4xl font-bold text-gray-900 text-center flex-1">MISSING PETS</h2>

      {/* Pet List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-20 pb-20">

        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <img
            src={dog}
            alt="Background"
            className="w-full h-96 object-cover"
            />
            <h3 className="font-bold mt-4 text-2xl text-gray-900">Browny</h3>
            <p className="text-gray-700 text-lg">Gender: Male</p>
            <p className="text-gray-700 text-lg">Age: 3yrs old</p>
            <p className="text-gray-700 text-lg">Breed: Golden Retriever</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Last seen near downtown park. Please contact if found.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissingPage;
