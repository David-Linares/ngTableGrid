ngTableGrid.controller('tablecontroller', ["$scope", function($scope){

	$scope.numeros = [
		{
			"numero": "1",
			"imei": "100000000000001"
		},
		{
			"numero": "2",
			"imei": "200000000000002"
		},
		{
			"numero": "3",
			"imei": "300000000000003"
		},
		{
			"numero": "4",
			"imei": "400000000000004"
		},
		{
			"numero": "5",
			"imei": "500000000000005"
		}];
	
	$scope.datatablegrid = {

		titleformadd: "Agregar Registro",
		titleformedit: "Modificar Registro",
		titlecols: [
			{
				id: "numero",
				name: 'Número de Celular',
				pattern: /^[{0-9}]*$/,
          		required: true,
          		minlength: '13',
          		disabled: false,
          		maxlength: '13',
          		title:"Por favor Cumplir con los parámetros",
          		type: "text"
			},
			{
				id: "imei",
				name: 'Imei',
				pattern: /^[{0-9}]*$/,
          		required: true,
          		minlength: '15',
          		disabled: false,
          		maxlength: '15',
          		title:"Por favor Cumplir con los parámetros",
          		type: "text"
			}
		],
		data: $scope.numeros
	};
}]);