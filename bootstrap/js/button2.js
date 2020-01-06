let nightMode2 = document.querySelector('.night-mode2');
let mode2 = true;

nightMode2.addEventListener('click', function(){
	if (mode2 == true){
		mode2 = false;

		document.querySelector('body').style.background = '#ffffff';
		document.querySelector('body').style.color = '#000000';
	}
	else {
		mode2 = true;
		document.querySelector('body').style.background = '#000000';
		document.querySelector('body').style.color = '#ffffff';

	}
});