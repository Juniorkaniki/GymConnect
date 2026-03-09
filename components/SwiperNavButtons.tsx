"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  return <div className={`${containerStyles}`}>
    <button className={`${btnStyles}`} onClick={() => useSwiper().slidePrev()}>
      <PiCaretLeftBold className={`${iconStyles}`} />
    </button>
    <button className={`${btnStyles}`} onClick={() => useSwiper().slideNext()}>
      <PiCaretRightBold className={`${iconStyles}`} />
    </button>
  </div>;
};

export default SwiperNavButtons;
