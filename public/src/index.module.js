import angular from 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import categoriesComponent from './pages/categories/categories.page';
import {manageCategories} from './pages/manage-categories/manage-categories';
import {manageHabits} from './pages/manage-habits/manage-habits';
import {LoginPage} from './pages/login/login';

// Modules
import './components/components.module';

// Services
import './services/services';

angular.module('app', ['ui.router',
    'components',
    'services'])
    .component('categories', categoriesComponent)
    .component('manageCategories', manageCategories)
    .component('manageHabits', manageHabits)
    .component('loginPage', LoginPage)
    .config(routerConfig);


function routerConfig($stateProvider,
                      $urlRouterProvider) {
    $stateProvider
        .state('Categories', {
            url: '/categories',
            template: '<categories></categories>'
        })
        .state('ManageCategories', {
            url: '/manage-categories',
            template: '<manage-categories></manage-categories>'
        })
        .state('ManageHabits', {
            url: '/manage-habits',
            template: '<manage-habits></manage-habits>'
        })
        .state('Login', {
            url: '/login',
            template: '<login-page></login-page>'
        });

    $urlRouterProvider.otherwise('/categories');
}
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
