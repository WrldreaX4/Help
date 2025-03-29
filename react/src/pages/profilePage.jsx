import React from "react";

const ProfilePage = () => {
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

       </div>
  );
};

export default ProfilePage;
