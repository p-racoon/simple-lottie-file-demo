import React from "react";

import { useEffect, useRef } from "react";
// import lottie from "lottie-web";
import Lottie from "react-lottie";


const LottieEmoji = ({ emotion }) => {
  const lottieEmojiContainer = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../assets/lottiefiles/${emotion}.json`),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="lottie-emoji">
      <span>{emotion}</span>
      
      {/* Credits: https://www.youtube.com/watch?v=LIoRZZ_va_o */}
      {/* https://lottiefiles.com/blog/working-with-lottie/how-to-use-lottie-in-react-app */}
      <Lottie 
	    options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  );
};

export default LottieEmoji;
