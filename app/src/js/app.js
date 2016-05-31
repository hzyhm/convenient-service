var app = angular.module("ConvenientService", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "tpls/userLogin.html",
      title: "aaaa"
    });
}]);