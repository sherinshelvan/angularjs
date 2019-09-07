var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "pages/home.html",
  		controller : "homeCtrl",
  		activetab: 'home'		
    })
    .when("/home", {
      templateUrl : "pages/home.html",
      controller : "homeCtrl",
      activetab: 'home'   
    })
    .when("/about", {
      templateUrl : "pages/about.html",
  		controller : "AboutCtrl",
  		activetab: 'about'
		
    })	
    .when("/contact", {
      templateUrl: "pages/contact.html",
      controller : "ContactCtrl",
      activetab: 'contact'
    }) 
    .otherwise({ redirectTo: '/404' });	
		$locationProvider.html5Mode(true);
});
