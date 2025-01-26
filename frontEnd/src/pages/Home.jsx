import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const images = [
  "https://images.pexels.com/photos/4609046/pexels-photo-4609046.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.unsplash.com/photo-1633655442168-c6ef0ed2f984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhaWxvcnxlbnwwfHwwfHx8MA%3D%3D",
];

const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:grid md:grid-cols-2">
        {/* Image Section */}
        <div className="h-64 md:h-auto">
          <img
            id="program-image"
            src={images[currentImageIndex]}
            alt="Qarze Hasana Program"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-green-600">
            Saylani Welfare Qarze Hasana Program
          </h1>
          <p className="mt-4 text-gray-700">
            Empowering communities with interest-free loans to support small
            businesses and improve livelihoods. Join us in making a difference.
          </p>
          <button
          onClick={()=> navigate('/category')}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition duration-300 self-start"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
