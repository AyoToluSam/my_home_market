import Link from "next/link";
import React from "react";
import { BannerWrapper } from "./BannerStyles";

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="sales">
        <h3>
          Get 10% discount if you buy <br /> on MHM today
        </h3>
        <p>
          We have the best deals on all kinds of home appliances, <br /> new and
          neatly used.
        </p>
        <Link href={"/market"}>
          <button>Buy</button>
        </Link>
      </div>
      <img src="/banner3.webp" alt="Banner" />
    </BannerWrapper>
  );
};

export default Banner;
