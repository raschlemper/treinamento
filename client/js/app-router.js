'use strict';

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', 
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider

      /*
       * Application
       */
      .state('app', {
        url: '',
        templateUrl: 'partials/app/app.html'
      })

      /*
       * Main
       */      
      .state('app.main', {
        url: '/',
        template: '<div ui-view></div>',
        controller: 'AppController'
      })

      /**
       * Java
       */
      .state('app.java', {
        url: '/java',
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
        abstract: true,
        url: '/auth',
        template: '<div ui-view></div>'
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