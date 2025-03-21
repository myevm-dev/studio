import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./SwiperStyles.css"; 
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";

const agents = [
  { name: "Agent1", description: ".", location: "BaseChain", img: "/agents/1.png" },
  { name: "Agent2", description: ".", location: "Abstract", img: "/agents/2.png" },
  { name: "Agent3", description: ".", location: "ApeChain", img: "/agents/3.png" },
  { name: "Agent4", description: ".", location: "Optimism", img: "/agents/4.png" },
  { name: "Agent5", description: ".", location: "Arbitrum", img: "/agents/5.png" },
  { name: "Agent6", description: ".", location: "Polygon", img: "/agents/6.png" },
  { name: "Agent7", description: ".", location: "UniChain", img: "/agents/5.png" },
  { name: "Agent8", description: ".", location: "BeraChain", img: "/agents/6.png" },
];

const SwiperComponent: React.FC = () => {
  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Keyboard, Pagination]} // Removed Mousewheel module
        effect="coverflow"
        grabCursor
        centeredSlides={true} // Ensures the current slide is always centered
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 15, // Slight rotation for a 3D effect
          stretch: 0, // Keep slides in their original size (no stretching)
          depth: 200, // Adjusted depth to give the middle slide prominence
          modifier: 1.5, // Strength of the 3D effect
          slideShadows: true, // Optional, enables shadows
        }}
        keyboard={{ enabled: true }}
        spaceBetween={60}
        loop
        pagination={{ clickable: true }}
        className="swiper"
      >
        {agents.map((agent, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="text-center">
              <img
                src={agent.img}
                alt={`${agent.name} profile`}
                className="w-full h-auto rounded-md"
              />
              <span className="agent-name">{agent.name}</span>
              <h2 className="text-accent1 mt-2">{agent.description}</h2>
              <p className="text-accent2 mt-2">{agent.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
