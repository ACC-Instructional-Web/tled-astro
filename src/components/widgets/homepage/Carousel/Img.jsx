import React from 'react';

const Img = (props) => {
  if (props.sizesProp) {
    console.log('sizes :>> ', props.sizesProp);
    const sizesAtribute = '100vw';
    // '((min-width: 50em) and (max-width: 60em)) 50em,((min-width: 30em) and (max-width: 50em)) 30em, (max-width: 30em) 20em';
    return (
      <img
        srcSet={`${props.sizesProp.medium} 480w, ${props.sizesProp.medium_large} 800w, ${props.sizesProp.large} 1024w, ${props.sizesProp.x_large} 2000w`}
        sizes={sizesAtribute}
        src={props.sizesProp.large}
        alt={props.alt}
        {...props}
      />
    );
  }

  return <img src={props.src} alt={props.alt} {...props} />;
};

export default Img;
