import decode from 'unescape';
import { replaceUrl } from '~/utils/replaceUrl';


export const fetchBreadcrumbs = (endpoint, id) => {
const response = await fetch(`${endpoint}bcn/v1/post/${id}`);
const data = await response.json();
console.log('breadcrumb data', data.itemListElement);
// console.log('breadcrumb data', data.itemListElement.slice(1));
let breadcrumbData;

breadcrumbData = data.itemListElement.slice(1);
breadcrumbData[0].item.name = 'Home';
breadcrumbData[0].item['@id'] = '/';

const cleanedCrumbUrls = breadcrumbData.map((crumb) => {
  crumb.item['@id'] = replaceUrl(crumb.item['@id']);
  crumb.item.name = decode(crumb.item.name);
  return crumb;
});

return cleanedCrumbUrls;
}
