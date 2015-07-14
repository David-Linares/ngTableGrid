ngTableGrid.directive('ngTableGrid', function(){

	return{
		restrict: 'A',
		templateUrl: 'templates/grid.html',
		scope:{
          	datatablegrid: "="
        },
        controller: function($scope){
        	
			$scope.listSelected = $scope.datatablegrid.data.filter(function(ele){
				return ele.marked === true;
			});

			$scope.msj = "hola";

			$scope.$watch('datatablegrid', function (newVal, oldvalue) {
				$scope.listSelected = $scope.datatablegrid.data.filter(function(ele){
					return ele.marked === true;
				});
			}, true);

			$scope.checkAll = function () {
		        if ($scope.selectedAll) {
		            $scope.selectedAll = true;
		        } else {
		            $scope.selectedAll = false;
		        }
		        angular.forEach($scope.datatablegrid.data, function (country) {
		            country.marked = $scope.selectedAll;
		        });
		    };

			$scope.orderBy = function(order){
				$scope.reverse = ($scope.elementOrder === order) ? !$scope.reverse : false;
				$scope.elementOrder = order;
			};

			$scope.selectionRow = function(val){
				val.marked = !val.marked;
			};

			$scope.saverow = function(){

				console.log($scope.newrow);
				$scope.datatablegrid.data.push($scope.newrow);
				$scope.newrow = {};
				$scope.showadd = false;

			};

			$scope.deleteData = function(){


				angular.forEach($scope.listSelected, function(selected){

					var index = $scope.datatablegrid.data.indexOf(selected);

					$scope.datatablegrid.data[index] = null;

					for (var i = index; i < $scope.datatablegrid.data.length - 1; i++) {
						$scope.datatablegrid.data[i] = $scope.datatablegrid.data[i + 1];
					}

					$scope.datatablegrid.data.pop();

				});

			};

			$scope.deleteRow = function(row){

				var index = $scope.datatablegrid.data.indexOf(row);
				console.log(index);

				$scope.datatablegrid.data[index] = null;

				for (var i = index; i <= $scope.datatablegrid.data.length - 1; i++) {
					console.log(i);
					$scope.datatablegrid.data[i] = $scope.datatablegrid.data[i + 1];
				}

				$scope.datatablegrid.data.pop();

			};

        }
	};

});