import React from 'react';

const Img = (props) => {
  const { src, alt, sizesProp } = props;
  // console.log('props :>> ', props);
  if (sizesProp) {
    const sizesAtribute = '100vw';
    return (
      <img
        srcSet={`${props.sizesProp?.medium} 480w, ${props.sizesProp?.medium_large} 800w, ${props.sizesProp?.large} 1024w, ${props.sizesProp?.x_large} 2000w`}
        sizes={sizesAtribute}
        src={props.sizesProp.large}
        alt={props.alt}
        // {...props}
      />
    );
  }

  return <img src={src} alt={alt} {...props} />;
};

export default Img;
