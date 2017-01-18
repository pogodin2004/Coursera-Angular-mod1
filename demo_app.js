(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {

      $scope.LunchChecker = function () {
        var lunchItems = 0;
        if (!$scope.items) {
  		      $scope.message ="Please enter data first";
  		      classColor("form-group message", "red");
  	    } else {
          $scope.message = "";
  	      var lunchInput = $scope.items.split(',');
          for(var index = 0; index < lunchInput.length; index++){
              if(lunchInput[index].trim().length > 0)
                lunchItems++;
  	      }
  		classColor("form-group message", "green");

  		if (lunchItems <= 3) $scope.message = "Enjoy!";
  		else if (lunchItems > 3) $scope.message = "Too much!";
  	}
  	$scope.lunchItems = lunchItems;
  	};
  }

  function classColor (class_name, color_name) {
  	var name = document.getElementsByClassName(class_name);
  	  for (var i = 0; i < name.length; i++) {
  		  name[i].style.color = color_name;
  	  }
  }

})();
