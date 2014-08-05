angular.module('ngPartial', [])
    .directive('ngPartial', function($templateCache) {
        $templateCache.put('ngPartial-blank', '<div></div>');
        return {
            templateUrl: function(elem, attrs) {
                var templateUrl = "ngPartial-blank";
                if (typeof attrs.ngPartial === "string" && attrs.ngPartial.length) {
                    templateUrl = attrs.ngPartial;
                }
                return templateUrl;
            },
            replace: true,
            transclude: false
        };
    });
