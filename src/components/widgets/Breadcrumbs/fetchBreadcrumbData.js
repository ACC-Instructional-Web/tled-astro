import Axios from 'axios';
import decode from 'unescape';
import { replaceUrl } from '../../helpers';

const fetchBreadcrumbs = (endpoint, id) =>
  new Promise((resolve, reject) => {
    Axios.get(`${endpoint}bcn/v1/post/${id}`)
      .catch(function(error) {
        console.error('breadcrumb error', error);
        reject();
      })
      .then(response => {
        console.log('breadcrumb data', response.data.itemListElement);
        // console.log('breadcrumb data', response.data.itemListElement.slice(1));
        let breadcrumbData;

        breadcrumbData = response.data.itemListElement.slice(1);
        breadcrumbData[0].item.name = 'Home';
        breadcrumbData[0].item['@id'] = '/';

        const cleanedCrumbUrls = breadcrumbData.map(crumb => {
          crumb.item['@id'] = replaceUrl(crumb.item['@id']);
          crumb.item.name = decode(crumb.item.name);
          return crumb;
        });

        resolve(cleanedCrumbUrls);
      });
  });

export { fetchBreadcrumbs };
