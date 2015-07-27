# ngTableGrid

Table grid in angularJs to show data dynamically.

### Pre-requisites

* AngularBootstrap.

### Instalation

Include the script in your project

```sh
	
	<script type="text/javascript" src="path/to/ngTableGrid.min.js"></script>

```

Inyect the module into your project after the angular bootstrap's module.

```sh

   angular.module('myapp', ['ui.bootstrap', 'ngTableGrid'])

```

Create the directive where you want to add the table.

```sh

	<ng-table-grid></ng-table-grid>

```

It's necesary an object as follow:

```sh
	
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
		data: 'Your Array Data'
	};

```

And send it in the directive like this:

```sh

	<ng-table-grid data="datatablegrid"></ng-table-grid>

```


