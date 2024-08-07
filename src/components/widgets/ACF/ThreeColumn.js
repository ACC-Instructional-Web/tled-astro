import React from 'react';
import { Container, Row, Column as Col } from '../Grid/Grid';
import styled, { css } from 'styled-components';
import { Heading } from 'iw-react-elements';
import Parser from '../Parser/Parser';
import { Box } from '@rebass/grid';

export default (props) => {
  return (
    <Section layout={props.layout}>
      <Container>
        {props.layout.heading && (
          <Row>
            <Col width={1}>
              <Heading as="h2" caps={false} underline={false} color={props.layout.text_mode}>
                {props.layout.heading}
              </Heading>
            </Col>
          </Row>
        )}
        <Row mx={[0, '-1rem']}>
          <Col width={[1, 1 / 3]} px={[0, '1rem']}>
            {props.layout.background_a === 'Color' ? (
              <Box bg={props.layout.background_a === 'Color' ? props.layout.background_color_a : null} p="1rem">
                <Parser>{props.layout.column_1}</Parser>
              </Box>
            ) : (
              <Parser>{props.layout.column_1}</Parser>
            )}
          </Col>
          <Col width={[1, 1 / 3]} px={[0, '1rem']}>
            {props.layout.background_b === 'Color' ? (
              <Box bg={props.layout.background_b === 'Color' ? props.layout.background_color_b : null} p="1rem">
                <Parser>{props.layout.column_2}</Parser>
              </Box>
            ) : (
              <Parser>{props.layout.column_2}</Parser>
            )}
          </Col>
          <Col width={[1, 1 / 3]} px={[0, '1rem']}>
            {props.layout.background_c === 'Color' ? (
              <Box bg={props.layout.background_c === 'Color' ? props.layout.background_color_c : null} p="1rem">
                <Parser>{props.layout.column_3}</Parser>
              </Box>
            ) : (
              <Parser>{props.layout.column_3}</Parser>
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  ${(props) =>
    props.layout.background === 'Color' &&
    css`
      background-color: ${props.layout.background_color};
    `}

  ${(props) =>
    props.layout.background === 'Image' &&
    css`
      background-image: url(${props.layout.background_image.url});
      background-repeat: repeat;
      background-position: center center;
    `}

  padding: 2rem 0;

  // h2 {
  //   margin-bottom: 1.5rem;
  //   font-size: 1.75rem;
  // }
`;
