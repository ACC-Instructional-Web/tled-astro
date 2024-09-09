export const siteUrl = 'https://instruction.austincc.edu/tled';

export const endpoint = `${siteUrl}/wp-json/`;

export const breadcrumbUrl = `${endpoint}bcn/v1/post/`;

export const dropdownData = `${endpoint}wp-api-menus/v2/menus/4`;

export const homeData = `${endpoint}wp/v2/pages?slug=new-home`;

export const topnavData = `${endpoint}wp-api-menus/v2/menus/3`;

export const footerData = `${endpoint}wp-api-menus/v2/menus/5`;

export const pageData = `${endpoint}wp/v2/pages?slug=`;

export const carouselData = `${endpoint}wp/v2/pages?slug=home`;

export const calendarEventsData = `https://sheets.googleapis.com/v4/spreadsheets/1feRPiGXCX19MZofZ2LgLgYbvxpGJYFByhJ6ZAlOkWiM/values/CurrentEvents?key=${import.meta.env.GOOGLE_API_KEY}`;

// https://instruction.austincc.edu/tled/wp-json/customroutes/allpagesmenu
export const sitemapData = `${endpoint}customroutes/allpagesmenu`;

// ### REPORTS ###
export const reportsID = '1VD4KvNmgoBBoVo2ukDLtD_CNFiYnrWcw2CPRIb2Ba3M';
export const apiKey = `${import.meta.env.GOOGLE_API_KEY}`;
export const reportsArchiveData = `https://sheets.googleapis.com/v4/spreadsheets/${reportsID}?key=${import.meta.env.GOOGLE_API_KEY}`;
