import React, {useState, useEffect, useRef} from 'react'
import { Container, Hero, HomeBody, SalesBanner, CarouselImage, 
CarouselButtons, CarouselButton, CarouselButtonDot, Operation,
MarketGallery, FAQ } from './HomePageStyles'
import {BiSearch} from 'react-icons/bi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const HomePage = () => {

  const slideItems = ["/banner.webp", "/banner1.webp", "/banner2.webp"];

  const [activeItem, setActiveItem] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef(null);


  const carousel = () => {
    if (activeItem < slideItems.length - 1) {
      setActiveItem(activeItem + 1);
    }
    else {
      setActiveItem(0);
    }
  }

  const handleClick = (e, index) => {
    e.preventDefault();

    setActiveItem(index);
  }

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(carousel, 3000);
    }

    return () => clearInterval(timeoutRef.current);
  }, [isPaused, activeItem]);

  const handleMouseEnter = () => {
    clearInterval(timeoutRef.current);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Container>
      <Hero>
        <LazyLoadImage effect='blur' src="/hero.webp" alt="" />
        <div className='heroMsg'>
          <div className='heroPrompt'>
            <h5>Welcome to</h5>
            <h2>My Home Market</h2>
            <p>Your buying and selling stop for home equipment and appliances.</p>
          </div>
          <div className='searchGrp'>
            <BiSearch className='search' />
            <input type="text" placeholder='What are you looking for?' />
          </div>
        </div>
      </Hero>
      <HomeBody>
        <SalesBanner>
          {
            slideItems.map((item, index) => {
              return (
                <CarouselImage 
                key={index} 
                index={index} 
                active={activeItem} 
                src={item} 
                alt={item} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                />
              )
            })
          }
          <div className='sales'>
            <h3>Luxury Two-toned Sofa</h3>
            <p>Buy any of these items at 50% discount. Offer valid for only 24 hours.</p>
            <button>Shop Now</button>
          </div>
        </SalesBanner>
        <CarouselButtons>
        {slideItems.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <Operation>
        <h3>How we operate</h3>
        <p>We have a smooth and user friendly operating standard, enumerated in steps below:</p>
        <ul>
          <li>
            <img src="/Group.png" alt="Seller" />
            <span>Seller</span>
            <p>We have a smooth and user friendly operating standard, enumerated in steps below.</p>
          </li>
          <li>
            <img src="/Group2.png" alt="Buyer" />
            <span>Buyer</span>
            <p>We have a smooth and user friendly operating standard, enumerated in steps below.</p>
          </li>
          <li>
            <img src="/Group3.png" alt="Order processing" />
            <span>Order processing</span>
            <p>We have a smooth and user friendly operating standard, enumerated in steps below.</p>
          </li>
          <li>
            <img src="/Group4.png" alt="Pickup or Delivery" />
            <span>Pickup or Delivery</span>
            <p>We have a smooth and user friendly operating standard, enumerated in steps below.</p>
          </li>
        </ul>
      </Operation>
      <MarketGallery>
        <div><img src="/Market1.webp" alt="Market gallery" /></div>
        <div><img src="/Market2.webp" alt="Market gallery" /></div>
        <div><img src="/Market4.webp" alt="Market gallery" /></div>
        <div>
          <Link href="/Market" ><button>Go to Market</button></Link> 
          <img src="/Market3.webp" alt="Market gallery" />
        </div>
        <div><img src="/Market5.webp" alt="Market gallery" /></div>
      </MarketGallery>
      <FAQ>
        <h3>Frequently asked questions</h3>
        <p>Below are some of the questions we most often get asked:</p>
        <ul>
          <li><p>How do I become a seller?</p><RiArrowDropDownLine/></li>
          <li><p>How will the product be delivered when I buy?</p><RiArrowDropDownLine/></li>
          <li><p>Can I inspect the product before payment?</p><RiArrowDropDownLine/></li>
          <li><p>How do you make your own profit?</p><RiArrowDropDownLine/></li>
        </ul>
      </FAQ>
      </HomeBody>
    </Container>
  )
}

export default HomePage