import React, { forwardRef, ComponentProps, SVGProps } from "react";

export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  pfp: string | React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  sharePrice: string | number;
  status: "online" | "offline"; // Ensures status is strictly "online" or "offline"
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, pfp, href, sharePrice, status, ...rest }, ref) => {
    const glowEffect =
      status === "online" ? "text-green-500 glow" : "text-red-500 glow"; // Glow effect based on status

    return (
      <div
        ref={ref}
        className="bg-white bg-opacity-5 rounded-md shadow p-4 flex items-center h-full border border-accent1" // Thinner border (border instead of border-2)
        {...rest}
      >
        {/* Left section: Profile Picture */}
        <div className="mr-4">
          {typeof pfp === "string" ? (
            <img
              src={pfp}
              alt={title}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            React.createElement(pfp, {
              className: "h-16 w-16 text-blue-500",
              "aria-hidden": true,
            })
          )}
        </div>

        {/* Middle section: Title and Status */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-accent1">{title}</h3>

          {/* Status indicator with glow effect */}
          <div className={`mt-2 ${glowEffect} text-lg`}>
            {status === "online" ? "Online" : "Offline"}
          </div>
        </div>

        {/* Right section: Share Price and Visit Button */}
        <div className="ml-4 flex-shrink-0 flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <div className="text-xl text-accent1 font-bold"> {/* "Share Price" in accent1 color */}
              Share Price:
            </div>
            <div className="text-2xl text-white font-bold"> {/* Price text size increased */}
              ${sharePrice}
            </div>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="block w-20 h-10 bg-accent2 hover:bg-accent2 text-black font-bold rounded-md flex items-center justify-center"
          >
            Visit
          </a>
        </div>
      </div>
    );
  }
);

export default Card;
