ngTableGrid.controller('tablecontroller', function($scope){

	$scope.numeros = [
		{
			"numero": 1,
			"imei": 100000000000001
		},
		{
			"numero": 2,
			"imei": 200000000000002
		},
		{
			"numero": 3,
			"imei": 300000000000003
		},
		{
			"numero": 4,
			"imei": 400000000000004
		},
		{
			"numero": 5,
			"imei": 500000000000005
		},
	];
	
	$scope.datatablegrid = {

		titlecols: [
			{
				id: "numero",
				name: 'Número Celular'
			},
			{
				id: "imei",
				name: 'Imei'
			}
		],
		data: $scope.numeros

	};
});