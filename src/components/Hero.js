import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-60 bg-center grid"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <h1 className="text-4xl font-bold tracking-wide	 text-[lavender]">
          MovieTime
        </h1>
      </div>
    </div>
  );
};

export default Hero;
