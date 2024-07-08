import React from 'react';
import styled from 'styled-components';

export default function Breadcrumbs(props) {
  // console.log('breadcrumbs', props.data);
  return (
    <Breadcrumb role="navigation" aria-label="Breadcrumb">
      <ul role="menu">
        {/* data from WordPress */}
        {props.data &&
          props.data[0].item &&
          props.data.map(({ item }, index, arr) => {
            // last item in list
            if (index + 1 === arr.length) {
              return (
                <li key={`breadcrumb-${index}`} role="menuitem" aria-current="page" className="current">
                  {item.name}
                </li>
              );
            }

            // anything else
            return (
              <li key={`breadcrumb-${index}`} role="menuitem">
                <a href={item['@id']}>{item.name}</a>
              </li>
            );
          })}

        {/* data from js object */}
        {props.data &&
          !props.data[0].item &&
          props.data.map((item, index, arr) => {
            // last item in list
            if (index + 1 === arr.length) {
              return (
                <li key={`breadcrumb-${index}`} role="menuitem" aria-current="page" className="current">
                  {item.title}
                </li>
              );
            }

            // anything else
            return (
              <li key={`breadcrumb-${index}`} role="menuitem">
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
      </ul>
    </Breadcrumb>
  );
}

const Breadcrumb = styled.nav`
  padding: 1rem 0 0;

  ul {
    margin: 0 0 1rem 0;
    list-style: none;
    display: flex;
  }
  li {
    font-size: 0.6875rem;
    color: #0a0a0a;
    cursor: default;
    text-transform: uppercase;
  }

  a {
    font-weight: 400;
  }

  a:after {
    position: relative;
    margin: 0 0.75rem;
    opacity: 1;
    content: '/';
    color: #cacaca;
  }

  .current {
    font-weight: 400;
  }
`;
