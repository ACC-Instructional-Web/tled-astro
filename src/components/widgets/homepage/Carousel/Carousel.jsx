import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import rightArrow from './TLED-arrow-right.svg';
import leftArrow from './TLED-arrow-left.svg';
import './carousel.scss';

import Img from './Img';

const colors = ['#4d1979', '#a8262d', '#7e4a1f', '#00645f', '#002F6C'];

export default function RRCarousel({ carouselData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let [sliderLoaded, setSliderLoaded] = useState(false);
  const slideData = [];

  const slideShowItems = carouselData[0].acf.hero_content[0].carousel_content;
  // console.log('SLIDESHOWITEMS: ', slideShowItems);
  slideShowItems.forEach(function (slide) {
    const info = {};
    const instructionRegex = /\/tled\/(.*?)"/;
    const tledRegex = /tled\.austincc\.edu\/(.*?)"/;
    info.alt = slide.image_content.alt;
    info.title = slide.image_content.title;
    info.url = slide.image_content.url;
    info.sizes = slide.image_content.sizes;
    info.description = { __html: slide.image_description };
    // This is checks if it is Home (ID 226 or not)
    if(carouselData[0].slug === "home") {
    info.page_url = tledRegex.test(slide.image_description)
      ? slide.image_description.match(tledRegex)[1]
      : slide.image_description.match(instructionRegex)[1];
    }
    // console.log('PAGE_URL: ', info.page_url);
    slideData.push(info);
  });

  const toggleSliderLoaded = () => {
    setSliderLoaded((sliderLoaded = true));
    // console.log('CALLED', sliderLoaded);
  };
  const changeCarousel = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <div className={`${carouselData[0].slug != "home"  ? "wp-page-carousel flex flex-col relative" : "flex flex-col relative"}`}
>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={(slide) => {
          changeCarousel(slide);
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              className="carousel-ctrl-btn"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ left: 15 }}
            >
              <img src={leftArrow.src} alt="Previous Slide" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              className="carousel-ctrl-btn"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ right: 15 }}
            >
              <img src={rightArrow.src} alt="Next Slide" />
            </button>
          )
        }
      >
        {slideData.length &&
          slideData.map(({ title, url, sizes, alt, description }, index) => (
            <div key={index} className="slide" id={title} index={index}>
              {/* <Image
              src={url}
              class="slide__image w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
              widths={[400, 900]}
              width={400}
              sizes="(max-width: 900px) 400px, 900px"
              alt={alt}
              aspectRatio="16:9"
              layout="cover"
              loading="lazy"
              decoding="async"
            /> */}
              <Img src={url} sizesProp={sizes} alt={alt} onLoad={toggleSliderLoaded} className="slide__image" />
                {carouselData[0].slug === "home" && (
                  <div className="legend" dangerouslySetInnerHTML={description}></div>
                  )}
                  {carouselData[0].slug != "home" && (
                  <div className="carousel_stripe" dangerouslySetInnerHTML={description}></div>
                  )}

            </div>
          ))}
      </Carousel>
      {carouselData[0].slug === "home" && ( <ul id="carousel-controls">
        {slideData.map(({ url, page_url, title }, index) => (
          <li key={`thumbnail-${url}`}>
            <a
              href={page_url}
              index={index}
              className={`carousel-control ${currentSlide === index ? ' active' : 'inactive'}`}
              style={{ backgroundImage: `url('${url}')`, backgroundColor: colors[index] }}
              title={title}
            >
              <div>{title}</div>
            </a>
          </li>
        ))}
      </ul>)}

    </div>
  );
}
