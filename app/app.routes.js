BucketApp.config(function($routeProvider) {
 	$routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/templates/home.html',
            controller  : 'HomeController'
        })
});
