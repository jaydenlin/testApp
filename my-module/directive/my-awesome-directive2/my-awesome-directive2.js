angular.module('myModule').directive('myAwesomeDirective2', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'my-module/directive/my-awesome-directive2/my-awesome-directive2.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
