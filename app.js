import { route } from './core/router';
import './styles/app.css';
import home from './templates/home';
import pageNotFound from './templates/pageNotFound';
import success from './templates/success';

home();
pageNotFound();
success();

route('/', 'home', function() {
  
});

route('/welcome', 'success', function() {
  
});

route('/ex1', 'example1', function() {
  this.title = 'Example 1';
});

route('/ex2', 'example2', function() {
  this.title = 'Example 2';
  this.counter = 0;
  this.$on('.my-button', 'click', () => {
    this.counter += 1;
    this.$refresh();
  });
});

route('*', '404', function () {});
