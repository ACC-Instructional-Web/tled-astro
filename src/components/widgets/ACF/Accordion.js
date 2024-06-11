import React, { Component } from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Import arrow
import { ReactComponent as DownArrowIcon } from '../../images/arrowDown.svg';

import { Container, Row, Column as Col } from '../Grid/Grid';
import { Section, Heading } from '../Elements/Elements';
import Parser from '../Parser/Parser';

export default class AccordionComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      id: null,
    };
  }

  componentWillMount() {
    this.setState({ id: uuidv1() });
  }

  componentDidMount() {
    // const $dropdown = new Accordion('.accordion');
    // $(this.myRef.current).foundation();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Section>
        <Container>
          <Row>
            {this.props.layout.heading && (
              <Col width={1}>
                <Heading
                  as="h2"
                  caps={false}
                  underline={false}
                  color={this.props.layout.text_mode}
                >
                  <Parser>{this.props.layout.heading}</Parser>
                </Heading>
              </Col>
            )}

            <Col width={1}>
              <Accordion accordion={false}>
                {this.props.layout.accordion.map((item, index) => (
                  <AccordionItem key={index}>
                    <StyledAccordionItemHeading>
                      <AccordionItemButton>
                        <Parser>{item.title}</Parser>
                        <ArrowIcon role="presentation">
                          <Parser>{require('../../images/arrowDown.svg?include')}</Parser>
                        </ArrowIcon>
                      </AccordionItemButton>
                    </StyledAccordionItemHeading>
                    <StyledAccordionItemPanel>
                      <div key={index}>
                        <Parser>{item.description}</Parser>
                      </div>
                    </StyledAccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  color: ${props => props.theme.colors.blue};
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  padding: 1.25rem 1rem;
  position: relative;

  &:hover {
    background-color: #e6e6e6;
  }

  &:focus {
    outline: none;
    background-color: #e6e6e6;
  }

  &:before {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: -0.55rem;
  }

  &[aria-expanded='true'] > svg {
    transform: scaleY(-1);
  }
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 1rem;

  &.accordion__body {
    padding: 20px;
    display: block;
    animation: fadein 0.35s ease-in;
  }

  &.accordion__body--hidden {
    display: none;
    opacity: 0;
    animation: fadein 0.35s ease-in;
  }
`;

// const ArrowIcon = styled(DownArrowIcon)`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   width: 2rem;
//   transition: transform 0.3s ease-out;

//   path:first-child {
//     fill: ${props => props.theme.colors.blue};
//   }
// `;

const ArrowIcon = styled.span`
  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    transition: transform 0.3s ease-out;

    path:first-child {
      fill: ${props => props.theme.colors.rbPurple};
    }
  }
`;
