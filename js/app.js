var app = angular.module('portfolioApp', ['pascalprecht.translate', 'tmh.dynamicLocale']);

app.config(['$translateProvider', '$translatePartialLoaderProvider', 'tmhDynamicLocaleProvider', function ($translateProvider, $translatePartialLoaderProvider, tmhDynamicLocaleProvider) {
    // Konfiguracja Angular Translate
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/translations/{lang}/{part}.json'
    });
    $translateProvider.preferredLanguage('en'); // Język domyślny

    // Konfiguracja Dynamic Locale
    tmhDynamicLocaleProvider.localeLocationPattern('/locales/angular-locale_{{locale}}.js');
}]);

// Kontroler dla strony
app.controller('MainController', ['$scope', '$translate', function ($scope, $translate) {
    // Dane projektów
    $scope.projects = [
        { title: 'Project 1', description: 'Description of Project 1', image: 'img/project1.jpg' },
        { title: 'Project 2', description: 'Description of Project 2', image: 'img/project2.jpg' }
    ];

    // Funkcja obsługi wysyłania wiadomości
    $scope.sendMessage = function () {
        // Logika wysyłania wiadomości
        console.log('Wiadomość wysłana: ', $scope.contactName, $scope.contactEmail, $scope.contactMessage);
        // Tutaj można dodać logikę wysyłania wiadomości przez API lub inne metody
        // Resetowanie formularza
        $scope.contactName = '';
        $scope.contactEmail = '';
        $scope.contactMessage = '';
    };

    // Funkcja zmiany języka
    $scope.changeLanguage = function (key) {
        $translate.use(key); // Ustawienie nowego języka
    };
}]);

