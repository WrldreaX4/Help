import React from "react";

const ServicesPage = () => {
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

      {/* Services Section */}
      <section className="text-center py-20 px-10 rounded-xl mx-16">
        <h2 className="text-4xl font-bold text-gray-700">Our Services</h2>
        <p className="text-gray-600 text-xl mt-3 mb-16">
          We offer a range of services to support animal welfare.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {['Animal Rescue', 'Adoption Services', 'Veterinary Support'].map((service, index) => (
            <div key={index} className="bg-green-100 p-6 rounded-2xl shadow-xl w-full h-72 mx-auto">
              <h3 className="font-bold text-2xl text-gray-800">{service}</h3>
              <p className="text-gray-700 text-lg mt-2">
                Ensuring care and support for animals in need.
              </p>
            </div>
          ))}
        </div>
      </section>
      <hr className=" border-gray-900 mx-64" />

      {/* Contact Form */}
      <section className="py-20 px-10 text-center rounded-xl mx-16">
        <h2 className="text-4xl font-bold text-gray-700">Contact Us</h2>
        <p className="text-gray-600 text-xl mt-3 mb-6">
          Have questions? Reach out to us!
        </p>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg mb-4 border" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg mb-4 border" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg mb-4 border h-32"></textarea>
          <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ServicesPage;
