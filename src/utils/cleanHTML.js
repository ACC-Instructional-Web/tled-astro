import { parse } from 'node-html-parser';
import { siteUrl } from '../config';

const cleanHTML = (html) => {
  const root = parse(html);
  const anchors = root.getElementsByTagName('a');
  const regex = /(\.+.*)$/; // regex matching anything that ends with a file extension
  anchors
    .filter((anchor) => !anchor.getAttribute('href').match(regex)) // filter out non-pdf links
    .forEach((anchor) => {
      const currentAnchor = anchor.getAttribute('href');
      const newAnchor = `${currentAnchor.replace(siteUrl, '')}`;
      anchor.setAttribute('href', newAnchor);
    });
  return root.toString();
  // setAttribute('href', `${siteUrl}${root.querySelector('a').getAttribute('href')}`);
};

export default cleanHTML;
