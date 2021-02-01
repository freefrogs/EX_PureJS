import createTemplate from './createTemplate';

const pageNotFound = () => {
  const id = '404';
  const innerHtml = '<h1>404 Not found</h1>'
  createTemplate(id, innerHtml);
}

export default pageNotFound;