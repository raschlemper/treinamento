'use strict';

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', 
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/main');

    $stateProvider

      /*
       * Application
       */
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'partials/app/app.html'
      })

      /*
       * Main
       */
      .state('app.main', {
        url: 'main',
        template: '<div ui-view></div>'
      })

      /**
       * Java
       */
      .state('app.java', {
        url: 'java',
        template: '<div ui-view></div>'
      })
      .state('app.java.start', {
        url: '/',
        templateUrl: 'partials/app/java/start.html',
        controller: 'JavaController'
      })
      .state('app.java.introduction', {
        url: '/introduction',
        templateUrl: 'partials/app/java/introduction.html',
        controller: 'JavaController'
      })      

      /*
       * Authentication
       */
      .state('auth', {
        url: 'auth',
        templateUrl: 'partials/auth/auth.html'
      })

      /*
       * Login
       */
      .state('auth.login', {
        url: '/login',
        templateUrl: 'partials/auth/login.html',
        controller: 'AuthController'
      });

  }])