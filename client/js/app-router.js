'use strict';

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', 
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');

    $stateProvider

      /*
       * Application
       */
      .state('app', {
        url: '/',
        templateUrl: 'partials/app/app.html'
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
      .state('app.auth', {
        url: '/auth',
        templateUrl: 'partials/auth/auth.html'
      })

      /*
       * Login
       */
      .state('app.auth.login', {
        url: '/login',
        templateUrl: 'partials/auth/login.html',
        controller: 'AuthController'
      });

  }])