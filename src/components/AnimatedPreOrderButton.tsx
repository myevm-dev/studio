import React from "react";
import { Link } from "react-router-dom";

interface AnimatedPreOrderButtonProps {
  smallText?: boolean; // Prop to control size
}

const AnimatedPreOrderButton: React.FC<AnimatedPreOrderButtonProps> = ({ smallText }) => {
  return (
    <>
      <style>
        {`
          .animated-button-container {
            display: grid;
            place-items: center;
          }
          .animated-link {
            position: relative;
            padding: 30px 60px;
            font-size: 30px;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
            color: #999;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 4px;
            font: 700 consolas;
            overflow: hidden;
          }
          .animated-link.small-text {
            padding: 15px 20px; /* Smaller padding */
            font-size: 16px; /* Smaller font size */
          }
          .animated-link span:nth-child(1) {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right, #171618, #01fcfc);
            animation: animate1 2s linear infinite;
          }
          @keyframes animate1 {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animated-link span:nth-child(2) {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 3px;
            background: linear-gradient(to bottom, #171618, #01fcfc);
            animation: animate2 2s linear infinite;
            animation-delay: 1s;
          }
          @keyframes animate2 {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
          .animated-link span:nth-child(3) {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to left, #171618, #01fcfc);
            animation: animate3 2s linear infinite;
          }
          @keyframes animate3 {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animated-link span:nth-child(4) {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 3px;
            background: linear-gradient(to top, #171618, #01fcfc);
            animation: animate4 2s linear infinite;
            animation-delay: 1s;
          }
          @keyframes animate4 {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(-100%);
            }
          }
        `}
      </style>

      <div className="animated-button-container">
        <Link to="/pre-order" className={`animated-link ${smallText ? "small-text" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Pre-Order an Agent
        </Link>
      </div>
    </>
  );
};

export default AnimatedPreOrderButton;
