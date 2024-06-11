const endpoint = 'https://instruction.austincc.edu/tled/wp-json/';

export const dropdownData = `${endpoint}wp-api-menus/v2/menus/4`;

export const homeData = `${endpoint}wp/v2/pages?slug=new-home`;

export const topnavData = `${endpoint}wp-api-menus/v2/menus/3`;

export const footerData = `${endpoint}wp-api-menus/v2/menus/5`;

export const pageData = `${endpoint}wp/v2/pages?slug=`;

export const carouselData = `${endpoint}wp/v2/pages?slug=home`;

export const eventsSheet = `https://sheets.googleapis.com/v4/spreadsheets/1feRPiGXCX19MZofZ2LgLgYbvxpGJYFByhJ6ZAlOkWiM/values/CurrentEvents?key=${import.meta.env.GOOGLE_API_KEY}`;
