import React from 'react';

export default function Carousel({ carouselData }) {
  const slideData = [];
  //   const [currentSlide, setCurrentSlide] = React.useState(0);
  console.log('carouselData :>> ', carouselData);
  const slideShowItems = carouselData[0].acf.hero_content[0].carousel_content;
  console.log('SLIDESHOWITEMS: ', slideShowItems);
  slideShowItems.forEach(function (slide) {
    const info = {};
    const instructionRegex = /\/tled\/(.*?)"/;
    const tledRegex = /tled\.austincc\.edu\/(.*?)"/;
    info.alt = slide.image_content.alt;
    info.title = slide.image_content.title;
    info.url = slide.image_content.url;
    info.sizes = slide.image_content.sizes;
    info.description = slide.image_description;
    info.page_url = tledRegex.test(slide.image_description)
      ? slide.image_description.match(tledRegex)[1]
      : slide.image_description.match(instructionRegex)[1];
    console.log('PAGE_URL: ', info.page_url);
    slideData.push(info);
  });

  return <div>Carousel</div>;
}
