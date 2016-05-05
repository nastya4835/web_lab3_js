$(document).ready(function() {
	$('#email_id').blur(function() {
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($(this).val())){
				$(this).css({'border' : '1px solid #569b44'});
				$('#valid').text('Верно');
			} else {
				$(this).css({'border' : '1px solid #ff0000'});
				$('#valid').text('Не верно');
			}
		} else {
			$(this).css({'border' : '1px solid #ff0000'});
			$('#valid').text('Поле email не должно быть пустым');
		}
	});
});


function CountLogin(login_id, count_view, correct_view_login, pass_id, correct_view_pass) {
	// pass_id Поле ввода пароля
	// count_view Поле вывода количества символов в пароле
	// correct_view_pass Сообщение для пароля
	// login_id Поле ввода логина
	// correct_view_login Сообщение для логина

	// Обновляем количество введенных символов
	document.getElementById(count_view).innerHTML = document.getElementById(login_id).value.length; 
	// Проверяем данные
	checkPassAndLogin(login_id, pass_id, correct_view_login, correct_view_pass);
}

function CountPass(pass_id, count_view, correct_view_pass, login_id, correct_view_login, repass_id, correct_view_repass) {
	// pass_id Поле ввода пароля
	// count_view Поле вывода количества символов в пароле
	// correct_view_pass Сообщение для пароля
	// login_id Поле ввода логина
	// correct_view_login Сообщение для логина

	// Обновляем количество введенных символов
	document.getElementById(count_view).innerHTML = document.getElementById(pass_id).value.length; 
	// Проверяем данные
	checkPassAndLogin(login_id, pass_id, correct_view_login, correct_view_pass, repass_id, correct_view_repass);
}

function checkPassAndLogin(login_id, pass_id, correct_view_login, correct_view_pass, repass_id, correct_view_repass) {
	var login_value = document.getElementById(login_id).value;
	var pass_value = document.getElementById(pass_id).value;

	var correctViewLogin = document.getElementById(correct_view_login);
	var correctViewPass = document.getElementById(correct_view_pass);

	// Если пароль меньше 4 символов
	if (login_value.length < 5) {
		correctViewLogin.innerHTML = 'не менее 5 символов';
		// меняем класс слоя для показа ошибки
		correctViewLogin.className = 'info';
		return;
	}
	correctViewLogin.innerHTML = 'верно';
	correctViewLogin.className = 'correct';
	
	// если пароль меньше 4 символов
	if (pass_value.length < 4) {
		correctViewPass.innerHTML = 'пароль должен содержать от 4 до 20 символов';
		correctViewPass.className = 'info';
		return;
	}

	// Если логин и пароль совпадают
	if (login_value == pass_value) {
		correctViewPass.innerHTML = 'пароль совпадает с логином';
		correctViewPass.className = 'acorrect';
		return;
	}

	correctViewPass.innerHTML = 'верно';
	correctViewPass.className = 'correct';

	if (repass_id && correct_view_repass) {
		CorrectPass(repass_id, false, correct_view_repass, pass_id);
	}
}

function CorrectPass(repass_id, count_view, correct_view, pass_id) {
	var repass = document.getElementById(repass_id).value;
	var pass = document.getElementById(pass_id).value;

	if (count_view) {
		document.getElementById(count_view).innerHTML = repass.length;
	}

	var correctView = document.getElementById(correct_view);
	if (repass.length != pass.length && repass != pass) {
		correctView.innerHTML = 'пароли не совпадают';
		correctView.className = 'acorrect';
	} else {
		correctView.innerHTML = 'совпадают';
		correctView.className = 'correct';
	}
}