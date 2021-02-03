const createTemplate = (id, innerHtml) => {
  const head = document.querySelector('head');
  const template = document.createElement('script');
  template.setAttribute('type', 'text/html');
  template.setAttribute('id', id);
  template.innerHTML = innerHtml;

  head.appendChild(template);
}

export default createTemplate;
