var app = angular.module('portfolioApp', ['ngRoute', 'pascalprecht.translate']);

// Konfiguracja tłumaczeń
app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME_TITLE': 'Home',
    'ABOUT_TITLE': 'About',
    'PROJECTS_TITLE': 'Projects',
    'SKILLS_TITLE': 'Skills',
    'CONTACT_TITLE': 'Contact',
    'HOME_DESC': 'Welcome to my portfolio website!',
    'PROJECTS_DESC': 'Here are some of my projects:',
    'CONTACT_NAME': 'Name',
    'CONTACT_EMAIL': 'Email',
    'CONTACT_MESSAGE': 'Message',
    'SEND_MESSAGE': 'Send Message'
  });

  $translateProvider.translations('pl', {
    'HOME_TITLE': 'Strona główna',
    'ABOUT_TITLE': 'O nas',
    'PROJECTS_TITLE': 'Projekty',
    'SKILLS_TITLE': 'Umiejętności',
    'CONTACT_TITLE': 'Kontakt',
    'HOME_DESC': 'Witaj na mojej stronie portfolio!',
    'PROJECTS_DESC': 'Oto kilka moich projektów:',
    'CONTACT_NAME': 'Imię',
    'CONTACT_EMAIL': 'Email',
    'CONTACT_MESSAGE': 'Wiadomość',
    'SEND_MESSAGE': 'Wyślij wiadomość'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitize');
});

// Konfiguracja routingu
app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'ProjectsController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })
    .otherwise({ redirectTo: '/home' });
});

// Kontrolery
app.controller('HomeController', function ($scope, $translate) {
  $scope.title = $translate.instant('HOME_TITLE');
  $scope.description = $translate.instant('HOME_DESC');
});

app.controller('AboutController', function ($scope, $translate) {
  $scope.title = $translate.instant('ABOUT_TITLE');
  $scope.description = $translate.instant('ABOUT_DESC');
});

app.controller('ProjectsController', function ($scope, $translate) {
  $scope.title = $translate.instant('PROJECTS_TITLE');
  $scope.projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' }
    // Dodaj więcej projektów według potrzeb
  ];
});

app.controller('ContactController', function ($scope, $translate) {
  $scope.title = $translate.instant('CONTACT_TITLE');
  $scope.contact = {
    name: '',
    email: '',
    message: ''
  };

  $scope.sendMessage = function () {
    // Logika do wysyłania wiadomości
  };
});
