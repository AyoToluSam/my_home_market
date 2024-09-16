import {
  Container,
  Hero,
  HomeBody,
  SalesBanner,
  Operation,
  MarketGallery,
  FAQ,
} from "./HomePageStyles";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "../Carousel/Carousel";
import { faqs, marketGallery, operationSteps, slideItems } from "./data";

const HomePage = () => {
  return (
    <Container>
      <Hero>
        <LazyLoadImage effect="blur" src="/hero.webp" alt="" />
        <div className="heroMsg">
          <div className="heroPrompt">
            <h5>Welcome to</h5>
            <h2>My Home Market</h2>
            <p>
              Your buying and selling stop for home equipment and appliances.
            </p>
          </div>
          <div className="searchGrp">
            <BiSearch className="search" />
            <input type="text" placeholder="What are you looking for?" />
          </div>
        </div>
      </Hero>
      <HomeBody>
        <Carousel
          slides={slideItems.map((item, index) => (
            <SalesBanner>
              <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
              <div className="sales">
                <h3>{item.desc}</h3>
                <p>
                  Buy any of these items at 50% discount. <br /> Offer valid for
                  only 24 hours.
                </p>
                <Link href={"/market"}>
                  <button>Shop Now</button>
                </Link>
              </div>
            </SalesBanner>
          ))}
        />
        <Operation>
          <h3>How we operate</h3>
          <p>
            We have a smooth and user friendly operating standard, enumerated in
            steps below:
          </p>
          <ul>
            {operationSteps.map(({ imgSrc, title, desc }, index) => (
              <li key={index}>
                <img src={imgSrc} alt={title} />
                <span>{title}</span>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </Operation>
        <MarketGallery>
          {marketGallery.map(
            ({ imgSrc, hasOverlayButton, buttonLink, buttonText }, index) =>
              hasOverlayButton ? (
                <div key={imgSrc + index}>
                  <Link href={buttonLink}>
                    <button>{buttonText}</button>
                  </Link>
                  <img src={imgSrc} alt={`Market gallery ${index + 1}`} />
                </div>
              ) : (
                <div key={imgSrc + index}>
                  <img src={imgSrc} alt={`Market gallery ${index + 1}`} />
                </div>
              )
          )}
        </MarketGallery>
        <FAQ>
          <h3>Frequently asked questions</h3>
          <p>Below are some of the questions we most often get asked:</p>
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                <p>{faq}</p>
                <RiArrowDropDownLine />
              </li>
            ))}
          </ul>
        </FAQ>
      </HomeBody>
    </Container>
  );
};

export default HomePage;
