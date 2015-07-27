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

It's necesary a basic object as follow:

```sh
	
	$scope.datatablegrid = {
		titlecols: [
			{
				id: "firstcol",
				name: 'First Column',
			},
			{
				id: "secondcol",
				name: 'Second Column',
			},
		],
		data: 'Your Array Data'
	};

```

And send it in the directive like this:

```sh

	<ng-table-grid data="datatablegrid"></ng-table-grid>

```


