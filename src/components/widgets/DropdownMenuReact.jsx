import React from 'react';
import Dropdown from 'iw-react-dropdown';
import styled from 'styled-components';
import Link from 'next/link';
const siteUrl = 'https://instruction.austincc.edu/tled';

const getPath = (url, siteUrl) => {
  // Get url without the Wordpress url and remove leading and trailing slashes
  const cleanUrl = url.replace(siteUrl, '').replace(/^\/|\/$/g, '');
  // if (!cleanUrl) return ['home'];
  // const pathArray = cleanUrl.split('/');
  return cleanUrl;
};

const DropdownMenu = (props) => (
  <StyledDropdown
    data={props.data}
    renderLink={(data) => {
      const path = getPath(data.url, siteUrl);
      // const slug = path[path.length - 1];
      // const fullPath = getFullPath(path);

      return (
        <div>
          <a href={`${path}`}>{data.title}</a>
        </div>
      );
    }}
    renderChildren={(children) =>
      children.map((child) => {
        // TODO: Refactor this into a function that returns and object with slug and fullPath
        const path = getPath(child.url, siteUrl);
        const slug = path[path.length - 1];
        // const fullPath = getFullPath(path);
        return (
          <li key={child.id}>
            <Link href={`/wp-page?slug=${slug}`} as={`${stage}/${path}`}>
              <a className="iw-dropdown__subLink">{child.title}</a>
            </Link>
          </li>
        );
      })
    }
  />
);

export default DropdownMenu;

const StyledDropdown = styled(Dropdown)`
  margin: 0 -0.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    padding: 0;
    justify-content: center;
  }

  .iw-dropdown__menu {
    z-index: 9999;
  }

  .iw-dropdown__menuItem {
    margin: 0 0.5rem;
    position: relative;
  }

  .iw-dropdown__menuLink,
  .iw-dropdown__menuToggle {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    display: block;
    color: #f1ebab;
    text-decoration: none;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    box-sizing: border-box;
    height: 100%;
    line-height: 1em;
    text-align: center;
    @media (min-width: 800px) {
      padding: 1rem;
    }
  }

  .iw-dropdown__menuLink:hover,
  .iw-dropdown__menuLink:focus,
  .iw-dropdown__menuLink:active,
  .iw-dropdown__menuToggle:hover,
  .iw-dropdown__menuToggle:focus,
  .iw-dropdown__menuToggle:active,
  .iw-dropdown__menuToggle.active {
    color: white;
    background: #698da4;
  }

  .iw-dropdown__menuToggle {
  }
  .iw-dropdown__submenuWrapper {
    padding: 2rem;

    &[aria-expanded='true'] {
      left: 0;
    }
  }
  .iw-dropdown__submenu {
    margin: 0 auto;
    min-width: 100%;
    max-width: 75em;
    padding: 0;
    list-style: none;
    font-size: 1.4rem;
    white-space: nowrap;

    li {
      padding-bottom: 0.6rem;
    }

    & ul:not(:last-child) {
      margin-right: 2rem !important;
    }
  }
  .iw-dropdown__subItem {
    margin-bottom: 1rem;
    position: relative;
    line-height: 1.3rem;

    &:before {
      content: '•';
      display: block;
      position: absolute;
      left: -0.75rem;
      top: -1px;
      color: #153b53;
    }
  }
  .iw-dropdown__subLink {
    color: #4c4d4f;
    &:hover {
      /* color: #103147; */
      text-decoration: underline;
    }
  }
`;
