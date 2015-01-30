<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/app.js"></script>
<script src="js/select2.js"></script>
<script src="/js/select-menus.js"></script>
<script type='text/javascript'>
$(function() {
	$('#search-select').select2({
		placeholder: "Select Equiptment", 
		data: [{ id: 0, text: 'RTU-88' }, { id: 1, text: 'RTU-120' }, { id: 2, text: 'RTU-122' }, { id: 3, text: 'RTU-123' }, { id: 4, text: 'RTU-124' }],
	});
	$('#multi-tags').select2({
		multiple: "true",
		data: [{ id: 0, text: 'RTU-88' }, { id: 1, text: 'RTU-120' }, { id: 2, text: 'RTU-122' }, { id: 3, text: 'RTU-123' }, { id: 4, text: 'RTU-124' }],
	});
});
</script>