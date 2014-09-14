angular.module('myModule').directive('myAwesomeDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'my-module/directive/my-awesome-directive/my-awesome-directive.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
