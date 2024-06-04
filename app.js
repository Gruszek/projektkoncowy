var app = angular.module('portfolioApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME_TITLE': 'Home',
    'HOME_DESC': 'Welcome to our website!',
    'ABOUT_TITLE': 'About Us',
    'ABOUT_DESC': 'Learn more about our company.',
    'PROJECTS_TITLE': 'Projects',
    'SKILLS_TITLE': 'Skills',
    'CONTACT_TITLE': 'Contact Us',
    'CONTACT_NAME': 'Name',
    'CONTACT_EMAIL': 'Email',
    'CONTACT_MESSAGE': 'Message',
    'SEND_MESSAGE': 'Send Message'
  });

  $translateProvider.translations('pl', {
    'HOME_TITLE': 'Strona główna',
    'HOME_DESC': 'Witaj na naszej stronie!',
    'ABOUT_TITLE': 'O nas',
    'ABOUT_DESC': 'Dowiedz się więcej o naszej firmie.',
    'PROJECTS_TITLE': 'Projekty',
    'SKILLS_TITLE': 'Umiejętności',
    'CONTACT_TITLE': 'Kontakt',
    'CONTACT_NAME': 'Imię',
    'CONTACT_EMAIL': 'Email',
    'CONTACT_MESSAGE': 'Wiadomość',
    'SEND_MESSAGE': 'Wyślij wiadomość'
  });

  $translateProvider.preferredLanguage('en');
});

app.controller('MainController', function ($scope) {
   $scope.projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' }
  ];

  $scope.skills = ['HTML', 'CSS', 'JavaScript', 'AngularJS', 'Bootstrap'];
});

app.controller('ProjectsController', function ($scope) {
    $scope.projects = [
        { title: 'Project 1', description: 'Description of Project 1' },
        { title: 'Project 2', description: 'Description of Project 2' }
    ];
});
