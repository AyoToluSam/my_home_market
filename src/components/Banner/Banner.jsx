import React from "react";
import { BannerWrapper } from "./BannerStyles";

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="sales">
        <h3>
          Get 10% discount by selling on <br /> MHM
        </h3>
        <p>
          We have a smooth and user friendly operating standard, <br />{" "}
          enumerated in steps below.
        </p>
        <button>Apply</button>
      </div>
      <img src="/banner3.webp" alt="Banner" />
    </BannerWrapper>
  );
};

export default Banner;
