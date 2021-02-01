import { route } from './core/router';
import './styles/app.css';
import home from './templates/home';
import pageNotFound from './templates/pageNotFound';

home();
pageNotFound();

route('/', 'home', function() {
  this.where = 'here';
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
