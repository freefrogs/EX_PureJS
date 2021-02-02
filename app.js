import { route } from './core/router';
import './styles/app.css';
import home from './templates/home';
import pageNotFound from './templates/pageNotFound';
import success from './templates/success';

home();
pageNotFound();
success();

const fetchData = async (url, username, password) => {
  try {    
    let data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    return data;
  } catch (error) {
    return { error };
  }
};

route('/', 'home', function() {
  this.$on('.form_input-submit', 'click', (e) => {
    e.preventDefault();
    const username = document.querySelector('.input_username');
    const password = document.querySelector('.input_password');
    const error = document.querySelector('.data_error');
    
    if (!username.value) {
      error.innerHTML = 'Please enter Username';
      return
    } else if (!password.value) {
      error.innerHTML = 'Please enter password';
      return
    }
    
    const url = 'https://zwzt-zadanie.netlify.app/api/login';
    const username_val = username.value;
    const password_val = password.value;

    fetchData(url, username_val, password_val)
      .then(data => {
        if (!data.error) {
          if (data.status === 200) {
            window.location.href='#/welcome';
          } else if (data.status === 401) {
            error.innerHTML = 'Wrong password';
          }         
        } else {
          error.innerHTML = data.error;
        }
      })
      .catch(err => console.log(err));
  })
});

route('/welcome', 'success', function() {
});

route('*', '404', function () {});
