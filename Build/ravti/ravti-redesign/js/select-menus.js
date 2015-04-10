$(document).ready(function() {
	$('#select2').select2({ 
			data: [{ id: 0, text: 'red' }, { id: 1, text: 'blue' }],
			dropdownCssClass: 'bigdrop'
		});
}