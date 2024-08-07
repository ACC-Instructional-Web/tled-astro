import { parse } from 'node-html-parser';
import { siteUrl } from '../config';

const cleanHTML = (html) => {
  const root = parse(html);
  // Anchors tags
  const anchors = root.getElementsByTagName('a');
  const regex = /(\.+.*)$/; // regex matching anything that ends with a file extension
  anchors
    .filter((anchor) => !anchor.getAttribute('href').match(regex)) // filter out non-pdf links
    .forEach((anchor) => {
      const currentAnchor = anchor.getAttribute('href');
      const newAnchor = `${currentAnchor.replace(siteUrl, '')}`;
      anchor.setAttribute('href', newAnchor);
    });

  const emptyElementRegex = /^\s*$/;

  function removeEmptyElements(elements) {
    elements.forEach((element) => {
      if (element.innerHTML.match(emptyElementRegex)) {
        element.remove();
      }
    });
  }
  // Empty paragraphs
  const paragraphs = root.getElementsByTagName('p');
  removeEmptyElements(paragraphs);

  // paragraphs.forEach((paragraph) => {
  //   if (paragraph.innerHTML.match(emptyElementRegex)) {
  //     paragraph.remove();
  //   }});

  // Empty h1
  const h1 = root.getElementsByTagName('h1');
  removeEmptyElements(h1);

  // Empty h2
  const h2 = root.getElementsByTagName('h2');
  removeEmptyElements(h2);

  // Empty h3
  const h3 = root.getElementsByTagName('h3');
  removeEmptyElements(h3);

  // Empty h4
  const h4 = root.getElementsByTagName('h4');
  removeEmptyElements(h4);

  // Empty h5
  const h5 = root.getElementsByTagName('h5');
  removeEmptyElements(h5);

  // Empty h6
  const h6 = root.getElementsByTagName('h6');
  removeEmptyElements(h6);

  return root.toString();
};

export default cleanHTML;
