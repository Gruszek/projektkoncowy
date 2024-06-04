var app = angular.module('portfolioApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'HOME_TITLE': 'Home',
        'ABOUT_TITLE': 'About',
        'PROJECTS_TITLE': 'Projects',
        'SKILLS_TITLE': 'Skills',
        'CONTACT_TITLE': 'Contact',
        'HOME_DESC': 'Welcome to my portfolio!',
        'PROJECT1_TITLE': 'Project 1',
        'PROJECT1_DESC': 'Description of Project 1',
        'PROJECT2_TITLE': 'Project 2',
        'PROJECT2_DESC': 'Description of Project 2',
        'CONTACT_NAME': 'Name',
        'CONTACT_EMAIL': 'Email',
        'CONTACT_MESSAGE': 'Message',
        'SEND_MESSAGE': 'Send Message'
    });

    $translateProvider.translations('pl', {
        'HOME_TITLE': 'Strona główna',
        'ABOUT_TITLE': 'O mnie',
        'PROJECTS_TITLE': 'Projekty',
        'SKILLS_TITLE': 'Umiejętności',
        'CONTACT_TITLE': 'Kontakt',
        'HOME_DESC': 'Witaj na moim portfolio!',
        'PROJECT1_TITLE': 'Projekt 1',
        'PROJECT1_DESC': 'Opis projektu 1',
        'PROJECT2_TITLE': 'Projekt 2',
        'PROJECT2_DESC': 'Opis projektu 2',
        'CONTACT_NAME': 'Imię',
        'CONTACT_EMAIL': 'Email',
        'CONTACT_MESSAGE': 'Wiadomość',
        'SEND_MESSAGE': 'Wyślij wiadomość'
    });

    $translateProvider.preferredLanguage('en');
});

app.controller('MainController', function ($scope) {
    // Controller logic here
});

app.controller('ProjectsController', function ($scope) {
    $scope.projects = [
        { title: 'Project 1', description: 'Description of Project 1' },
        { title: 'Project 2', description: 'Description of Project 2' }
    ];
});
