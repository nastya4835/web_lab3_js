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
});
 
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