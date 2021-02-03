import createTemplate from './createTemplate';
import '../styles/success.css';

const success = () => {
  let options = '';

  for (let n = 1; n < 7; n++) {
    const box = `
      <div class="option">
        <h3 class="option_title">Option ${n}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat.</p>
      </div>
    `;
    options += box;
  }

  const id = 'success';
  const innerHtml = `
    <div class="welcome">
      <h2 class="welcome_title">Hello! You are logged in</h2>
      <h4 class="welcome_question">What would you like to do?</h4>
      <div class="options_box">
        ${options}
      </div>
    </div>
  `;
  createTemplate(id, innerHtml);
}

export default success;
