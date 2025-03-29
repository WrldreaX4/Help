import React from "react";
import dog from "../assets/adoptdog.jpg"; // Importing the image asset

const LostPage = () => {
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

      {/* Lost & Found Report Section */}
      <section className="max-w-3xl mx-auto py-10 px-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h2 className="text-4xl font-bold text-center text-gray-900">LOST & FOUND ANIMALS</h2>
        <form className="mt-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Last Name" className="border p-3 rounded-lg w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Phone Number" className="border p-3 rounded-lg w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Breed" className="border p-3 rounded-lg w-full" />
            <textarea placeholder="Pet Description" className="border p-3 rounded-lg w-full h-24"></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">What are you reporting?</label>
            <div className="flex gap-6">
              <label><input type="radio" name="reportType" className="mr-2" /> Lost Pets</label>
              <label><input type="radio" name="reportType" className="mr-2" /> Found Pets</label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Sex</label>
            <div className="flex gap-6">
              <label><input type="radio" name="sex" className="mr-2" /> Female</label>
              <label><input type="radio" name="sex" className="mr-2" /> Male</label>
            </div>
          </div>
          <div className="text-center">
            <label className="font-medium block mb-3">Upload a Photo</label>
            <div className="border-dashed border-2 border-gray-400 rounded-lg p-10 flex justify-center items-center">
              📤
            </div>
          </div>
          <div className="text-center">
            <label className="font-medium block mb-3">Show us Where</label>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex justify-center items-center">
              🗺️ Map Placeholder
            </div>
          </div>
          <button className="bg-green-800 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md w-full">SUBMIT</button>
        </form>
      </section>
    </div>
  );
};

export default LostPage;
