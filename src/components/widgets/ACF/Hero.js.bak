import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import MediaContainer from '../MediaContainer/MediaContainer';
import { Img } from '../Elements/Elements';
import PageSlider from '../PageSlider/PageSlider';

export default function Hero(props) {
  const layout = props.data.acf_fc_layout;
  const carouselContent = props.data.carousel_content;

  if (layout === 'html') {
    return (
      <div
        className="container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <HTMLContentBox>
          {Parser(props.data.html_content, {
            replace(data) {
              console.log('element', data.attribs);
              if (data.attribs) {
                delete data.attribs.style;
              }

              return data.name === 'iframe' ? (
                <MediaContainer ratio="30%">
                  {mediaLoaded => (
                    <iframe
                      title="iframe content"
                      onLoad={mediaLoaded}
                      style={{ border: 'none' }}
                      {...data.attribs}
                    />
                  )}
                </MediaContainer>
              ) : null;
            },
          })}
        </HTMLContentBox>
        {props.data.background_image && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MediaContainer ratio="100%">
              {mediaLoaded => (
                <Img
                  src={props.data.background_image.url}
                  sizes={props.data.background_image.sizes}
                  alt={props.data.background_image.alt}
                  onLoad={mediaLoaded}
                />
              )}
            </MediaContainer>
          </div>
        )}
      </div>
    );
  }

  if (layout === 'image') {
    if (props.data.image_description) {
      return (
        <div className="container">
          <figure className="hero-content" style={{ margin: 0 }}>
            <MediaContainer>
              {mediaLoaded => (
                <Img
                  src={props.data.image_content.url}
                  sizes={props.data.image_content.sizes}
                  alt={props.data.image_content.alt}
                  onLoad={mediaLoaded}
                />
              )}
            </MediaContainer>
            <Caption>{props.data.image_description}</Caption>
          </figure>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="hero-content">
          <MediaContainer>
            {mediaLoaded => (
              <Img
                src={props.data.image_content.url}
                sizes={props.data.image_content.sizes}
                alt={props.data.image_content.alt}
                onLoad={mediaLoaded}
              />
            )}
          </MediaContainer>
        </div>
      </div>
    );
  }

  if (layout === 'carousel') {
    return <PageSlider carouselContent={carouselContent} />;
  }

  return null;
}

const HTMLContentBox = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  background: transparent;
`;

const Caption = styled.figcaption`
  text-align: center;
`;
