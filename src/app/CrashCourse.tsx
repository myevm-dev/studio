import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CrashCourse: React.FC = () => {
  const featureItems = [
    {
      title: "ISAI Studio",
      description: ".",
      icon: <img src="/studiologo.png" alt="ISAI Studio Logo" className="w-12 h-12 -mb-2 mx-auto" />, 
    },
    {
      title: "Wallet & Gas Quick Start",
      description: ".",
      icon: "⛽",
    },
    {
      title: "Pre-Order an Agent",
      description: ".",
      icon: "🤖",
    },
    {
      title: "Earn with No Code AI",
      description: ".",
      icon: "💡",
    },
    {
      title: "Level Up with Plugins",
      description: ".",
      icon: "🎮",
    },
    {
      title: "Manage your Agent NFT",
      description: ".",
      icon: "⚙️",
    },
    {
      title: "View Balances & Earnings",
      description: ".",
      icon: "💸",
    },
    {
      title: "Buy Advanced Agent Shares",
      description: ".",
      icon: "🌱",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable arrows by default
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          centerMode: true, // Center the slide on mobile
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-lg mx-auto py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-accent2 text-center mb-8">Crash Course</h1>

      <Slider {...settings}>
        {featureItems.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-accent1 text-center hover:bg-[#fd01f5] hover:text-black transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CrashCourse;
