var app = angular.module('portfolioApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'HOME_TITLE': 'Home',
        'ABOUT_TITLE': 'About Me',
        'PROJECTS_TITLE': 'My Projects',
        'SKILLS_TITLE': 'Skills & Expertise',
        'CONTACT_TITLE': 'Contact Me',
        'HOME_DESC': 'Welcome to my portfolio! Here you can learn more about me, explore my projects, and get in touch.',
        'ABOUT_ME_TITLE': 'About Me',
        'ABOUT_ME_DESC': 'I am passionate about web development and enjoy creating responsive, user-friendly web applications.',
        'PROJECTS_TITLE': 'My Projects',
        'PROJECT1_TITLE': 'Project 1',
        'PROJECT1_DESC': 'Description of Project 1',
        'PROJECT2_TITLE': 'Project 2',
        'PROJECT2_DESC': 'Description of Project 2',
        'SKILLS_TITLE': 'Skills & Expertise',
        'SKILLS_DESC': 'I have experience with HTML, CSS, JavaScript, AngularJS, Bootstrap, and more. Always eager to learn new technologies!',
        'CONTACT_TITLE': 'Contact Me',
        'CONTACT_NAME': 'Name',
        'CONTACT_EMAIL': 'Email',
        'CONTACT_MESSAGE': 'Message',
        'SEND_MESSAGE': 'Send Message',
        'FOOTER_TEXT': '&copy; 2024 My Portfolio. All rights reserved.'
    });

    $translateProvider.translations('pl', {
        'HOME_TITLE': 'Strona główna',
        'ABOUT_TITLE': 'O mnie',
        'PROJECTS_TITLE': 'Moje projekty',
        'SKILLS_TITLE': 'Umiejętności i doświadczenie',
        'CONTACT_TITLE': 'Kontakt',
        'HOME_DESC': 'Witaj na moim portfolio! Tutaj możesz dowiedzieć się więcej o mnie, zobaczyć moje projekty i skontaktować się ze mną.',
        'ABOUT_ME_TITLE': 'O mnie',
        'ABOUT_ME_DESC': 'Jestem pasjonatem tworzenia responsywnych aplikacji internetowych, które są łatwe w obsłudze.',
        'PROJECTS_TITLE': 'Moje projekty',
        'PROJECT1_TITLE': 'Projekt 1',
        'PROJECT1_DESC': 'Opis projektu 1',
        'PROJECT2_TITLE': 'Projekt 2',
        'PROJECT2_DESC': 'Opis projektu 2',
        'SKILLS_TITLE': 'Umiejętności i doświadczenie',
        'SKILLS_DESC': 'Posiadam doświadczenie w HTML, CSS, JavaScript, AngularJS, Bootstrap i więcej. Zawsze chętnie uczę się nowych technologii!',
        'CONTACT_TITLE': 'Kontakt',
        'CONTACT_NAME': 'Imię',
        'CONTACT_EMAIL': 'Email',
        'CONTACT_MESSAGE': 'Wiadomość',
        'SEND_MESSAGE': 'Wyślij wiadomość',
        'FOOTER_TEXT': '&copy; 2024 Moje Portfolio. Wszelkie prawa zastrzeżone.'
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
