let nightMode = document.querySelector('#night-mode');
let mode = true;

nightMode.addEventListener('click', function(){
	if (mode == true){
		mode = false;

		document.querySelector('body').style.background = '#ffffff';
		document.querySelector('body').style.color = '#000000';
	}
	else {
		mode = true;
		document.querySelector('body').style.background = '#000000';
		document.querySelector('body').style.color = '#ffffff';

	}
});