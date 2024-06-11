import React from 'react';
import { Section, Heading } from 'iw-react-elements';
import { Container, Row, Column as Col } from '../Grid/Grid';
// import styled, { css } from 'styled-components';
// import { Heading } from '../Elements/Elements';
import Parser from '../Parser/Parser';

export default props => (
    <Section layout={props.layout}>
      <Container>
        <Row>
          {props.layout.heading && (
            <Col width={1}>
              <Heading
                as="h2"
                caps={false}
                underline={false}
                color={props.layout.text_mode}
              >
                <Parser>{props.layout.heading}</Parser>
              </Heading>
            </Col>
          )}
          <Col
            width={1}
            sm={12}
            style={{
              paddingTop:
                props.layout.background === 'Color' && !props.layout.heading
                  ? '1rem'
                  : '0rem'
            }}
          >
            <Parser>{props.layout.column_1}</Parser>
          </Col>
        </Row>
      </Container>
    </Section>
  );

// const Section = styled.section`
//   ${props => props.layout.text_mode === 'light' && css`
//     color: white;

//     a {
//       color: white;
//       text-decoration: underline;
//     }
//   `}

//   ${props => props.layout.background === 'Color' && css`
//     background-color: ${props.layout.background_color};
//   `}

//   ${props => props.layout.background === 'Image' && css`
//     background-image: url(${props.layout.background_image.url});
//     background-repeat: repeat;
//     background-position: center center;
//   `}

//   padding: 2rem 0;
// `;
