// app.js

angular.module('portfolioApp', ['pascalprecht.translate'])

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'HOME_TITLE': 'Home',
        'HOME_DESC': 'Welcome to my portfolio',
        'ABOUT_TITLE': 'About',
        'ABOUT_DESC': 'I am a passionate web developer.',
        'PROJECTS_TITLE': 'Projects',
        'SKILLS_TITLE': 'Skills',
        'CONTACT_TITLE': 'Contact',
        'CONTACT_NAME': 'Name',
        'CONTACT_EMAIL': 'Email',
        'CONTACT_MESSAGE': 'Message',
        'SEND_MESSAGE': 'Send Message'
    });

    $translateProvider.translations('pl', {
        'HOME_TITLE': 'Strona główna',
        'HOME_DESC': 'Witaj na moim portfolio',
        'ABOUT_TITLE': 'O mnie',
        'ABOUT_DESC': 'Jestem pasjonatem tworzenia stron internetowych.',
        'PROJECTS_TITLE': 'Projekty',
        'SKILLS_TITLE': 'Umiejętności',
        'CONTACT_TITLE': 'Kontakt',
        'CONTACT_NAME': 'Imię',
        'CONTACT_EMAIL': 'Email',
        'CONTACT_MESSAGE': 'Wiadomość',
        'SEND_MESSAGE': 'Wyślij wiadomość'
    });

    $translateProvider.preferredLanguage('en');
})

.controller('MainController', function ($scope) {
    $scope.projects = [
        { title: 'Project 1', description: 'Description of Project 1' },
        { title: 'Project 2', description: 'Description of Project 2' },
        { title: 'Project 3', description: 'Description of Project 3' }
        // Dodaj więcej projektów według potrzeb
    ];

    $scope.skills = 'HTML, CSS, JavaScript, AngularJS';
});
