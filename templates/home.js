import createTemplate from './createTemplate';

const home = () => {
  const id = 'home';
  const innerHtml = `
    <h1>Start <%= where %>!</h1>
  `;

  createTemplate(id, innerHtml);
}

export default home;