angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  console.log(window.location.search);
  $locationProvider.matrixParamMode(window.location.search === '?matrix');
  $routeProvider
    .when('/', {
      template: `
      <a href="/catdog;foo=bar%3Dbaz">bad</a>
      <br>
      <a href="/catdog;foo=bar=baz">good</a>

      <p>
        AngularJS rewrites the "bad" URL from
        <code>/catdog;foo=bar%3Dbaz</code> to
        <code>/catdog;foo=bar=baz</code>.
      </p>
      `,
    })
    .when('/:path*', {
      template: `
      <p>The catch-all page. <a href="/">Go home</a>.</p>
      <p><b>Url:</b> <code>{{ location.absUrl() }}</code></p>
      <p><b>Path:</b> <code>{{ location.path() }}</code></p>
      <p><b>Matrix Params:</b> <code>{{ location.matrixParams && location.matrixParams() }}</code></p>
      `,
      controller: function($scope, $location) { $scope.location = $location; }
    })
    .otherwise('/');
});
