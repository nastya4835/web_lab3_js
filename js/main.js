var inputGoodColor = "#476AE8";
var inputBadColor = "#E8444C";
var inputDefaultColor = "#aaa";
var inputRegExp = /\W/;
	
var $password;
var $userName;
var $button;
var $isBackgroundBlue = false;
	
$(function(){
	$button = $("#image123");
	$button.click(function() {  
		if ($isBackgroundBlue) {
			$button.css({
				background: "#FFF",
				width: "900px"
			});
		} else {
			$button.css({
				background: inputGoodColor,
				width: "820px"
			});
		}

		$isBackgroundBlue = !$isBackgroundBlue;
	});
});

$(document).ready(function() {
	$('#email').blur(function() {
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


function CountLogin(item) {
// определяем переменную для слоя показа кол-ва введенных символов
var item_view = 'login_view';
// определяем переменную для показа сообщения об ошибке
var item_correct = 'login_correct';
// узнаем кол-во введенных в поле символов и записываем значение в слой показа
document.getElementById(item_view).innerHTML = document.getElementById(item).value.length++; 
	// проверяем данные
// если введено  больше 5 символов
	if (document.getElementById(item).value.length >= 5) {
		// записываем в слой сообщений, что все верно
		document.getElementById(item_correct).innerHTML = 'верно';
		// и меняем класс слоя 
		document.getElementById(item_correct).className = 'correct';
		//document.getElementById('check_login').value = 1;
	} else {
		// если введено меньше 5 символов, то так и записываем
		document.getElementById(item_correct).innerHTML = 'не менее 5 символов';
		// если введено меньше 5 символов, то так и записываем
		document.getElementById(item_correct).className = '';
		//document.getElementById('check_login').value = 0;
		}
	//checkAll(); 
}

function CountPass(item) {
// определяем переменную для слоя показа кол-ва введенных символов
var item_view = 'pass_view';
// определяем переменную для показа сообщения об ошибке
var item_correct = 'pass_correct';
// записываем значение поля логина
var item_login_value = document.getElementById('login_id').value;
// записываем кол-во символов в поле логина
var item_login_length = document.getElementById('login_id').value.length;
// узнаем кол-во введенных в поле символов и записываем значение в слой показа
document.getElementById(item_view).innerHTML = document.getElementById(item).value.length++; 
// проверяем данные
// если пароль совпадает с логином и логин больше 5 символов 
	if (document.getElementById(item).value == item_login_value && item_login_length >= 5) {
		// записываем сообщение об ошибке
		document.getElementById(item_correct).innerHTML = 'пароль совпадает с логином';
		// и меняем класс слоя для показа ошибки
		document.getElementById(item_correct).className = 'acorrect';
		//document.getElementById('check_pass').value = 0;
	} else {
				// если пароль не совпадает с логином 
				// если пароль больше 4 символов
		if (document.getElementById(item).value.length >= 4) {
				// то все верно, сообщаем об этом 
			document.getElementById(item_correct).innerHTML = 'верно';
			document.getElementById(item_correct).className = 'correct';
			//document.getElementById('check_pass').value = 1;
		} else if (document.getElementById(item).value.length < 4) {
			// если пароль меньше 4 символов
			document.getElementById(item_correct).innerHTML = 'пароль должен содержать от 4 до 20 символов';
			document.getElementById(item_correct).className = '';
			//document.getElementById('check_pass').value = 0;
		}
	}
	//checkAll();
}



function CorrectPass(item) {
// записываем в переменную значение введенного пароля
var item_pass_value = document.getElementById('pass_id').value;
// записываем в переменную кол-во символов введенного пароля
var item_pass_length = document.getElementById('pass_id').value.length
// определяем переменную для показа сообщения об ошибке
var item_correct = 'repass_correct';
// проверяем правильно ли введен парол
	if (item_pass_length >= 4) {
		// проверяем совпадают ли значения введеных паролей
		if (document.getElementById(item).value == item_pass_value) {
				// если совпадают, сообщаем об этом
				document.getElementById(item_correct).innerHTML = 'совпадают';
				document.getElementById(item_correct).className = 'correct';
				//document.getElementById('check_repass').value = 1;		
		} 
		// если введенный пароль меньше 4 символов и не совпадает 
		else if (document.getElementById(item).value.length >= 4) {
				document.getElementById(item_correct).innerHTML = 'пароли не совпадают';
				document.getElementById(item_correct).className = 'acorrect';
				//document.getElementById('check_repass').value = 0;
		}
	}
	//checkAll();
}


/*function isEmail(item) {
var at="@"
var dot="."
var lat=item.indexOf(at)
var litem=item.length
var ldot=item.indexOf(dot)
if (item.indexOf(at)==-1) return false; 
if (item.indexOf(at)==-1 || item.indexOf(at)==0 || item.indexOf(at)==litem) return false;
if (item.indexOf(dot)==-1 || item.indexOf(dot)==0 || item.indexOf(dot) >= litem - 2) return false;
if (item.indexOf(at,(lat+1))!=-1) return false;
if (item.substring(lat-1,lat)==dot || item.substring(lat+1,lat+2)==dot) return false;
if (item.indexOf(dot,(lat+2))==-1) return false;
if (item.indexOf(" ")!=-1) return false;
return true 
}

function CorrectEmail(item) {
	if(isEmail(item.value) == true) {
		document.getElementById('email_correct').innerHTML = 'правильно';
		document.getElementById('email_correct').className = 'correct';
		document.getElementById('check_email').value = 1;
	} else {
			document.getElementById('email_correct').innerHTML = '';
			document.getElementById('check_email').value = 0;
	}
	checkAll();
}*/


/*function checkAll() {
var x;
var check_login = document.getElementById('check_login').value;
var check_pass = document.getElementById('check_pass').value;
var check_repass = document.getElementById('check_repass').value;
var check_email = document.getElementById('check_email').value;
		x = check_login + check_pass + check_repass + check_email;
		document.getElementById('check_all').value = x;
	if (document.getElementById('check_all').value == 1111) {
		document.getElementById('submit_id').disabled = false;
	} else {
		document.getElementById('submit_id').disabled = true;
	}
}*/





								// $button.click(function() {
	
								//     if($userName.val().length < 7) {
								//         alert("Логин должен быть длинее 6 символов");
								//         return false;
								//     }
								//     var hasBadSymbols = inputRegExp.test($userName.val());
								//     if(hasBadSymbols) {
								//         alert("Имя пользователя может модержать только цифры и буквы латинского алфавита");
								//         return false;
								//     }
	
								//     if($password.val().length < 4) {
								//         alert("Пароль должен быть минимум из 4 символов");
								//         return false;
								//     }
	
								//     hasBadSymbols = inputRegExp.test($password.val());
								//     if(hasBadSymbols) {
								//         alert("Пароль может содержать только цифры и буквы латинского алфавита");
								//         return false;
								//     }
	
								//     var login = CryptoJS.MD5('fsdfsdf');
								//     var password = CryptoJS.MD5('sdfsdf');  
								//     alert("Зарегистрировались\nLogin: " + login + "\nPassword: " + password);
								// });
	
// userName
// $(function(){
//         $userName = $("#login_name");
	
//         $userName.focusin(function() {
//             $userName.css({
//                     borderColor: inputGoodColor
//             });
//         });
	
//         $userName.focusout(function() {
//             $userName.css({
//                     borderColor: inputDefaultColor
//             });
//         });
	
//         $userName.keyup(function() {
//             var color = inputGoodColor;
//             if (inputRegExp.test($userName.val())) {
//                 color = inputBadColor;
//             } 
	
//             $userName.css({
//                 borderColor: color
//             });
//         });
// });
	
// // password
// $(function(){
//         $password = $("#login_password");
	
//         $password.focusin(function() {
//             $password.css({
//                     borderColor: inputGoodColor
//             });
//         });
	
//         $password.focusout(function() {
//             $password.css({
//                     borderColor: inputDefaultColor
//             });
//         });
	
//         $password.keyup(function() {
//             $password.css({
	
//             });
//         });
// });