import createTemplate from './createTemplate';
import '../styles/home.css';

const home = () => {
  const id = 'home';
  const innerHtml = `
    <div class="form_box">
      <svg class="icon_person" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path class="icon_person-path" d="M12,12 C14.21,12 16,10.21 16,8 C16,5.79 14.21,4 12,4 C9.79,4 8,5.79 8,8 C8,10.21 9.79,12 12,12 Z M12,14 C9.33,14 4,15.34 4,18 L4,19 C4,19.55 4.45,20 5,20 L19,20 C19.55,20 20,19.55 20,19 L20,18 C20,15.34 14.67,14 12,14 Z" fill="#1D1D1D"></path>
      </svg>
      <form class="form">
        <h2 class="form_name">login</h2>
        <label class="form_label">Username</label>
        <input type="text" class="form_input form_input-text">
        <label class="form_label">Password</label>
        <input type="password" class="form_input form_input-text">
        <input type="submit" value="login" class="form_input form_input-submit">
      </form>
    </div>
  `;

  createTemplate(id, innerHtml);
}

export default home;