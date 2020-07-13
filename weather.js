var button = document.querySelector('.button')
var latitude = document.querySelector('.lat')
var longitude = document.querySelector('.lon')
var desc0 = document.querySelector('.desc0');
var temp0H = document.querySelector('.temp0H');
var temp0L = document.querySelector('.temp0L');
var desc1 = document.querySelector('.desc1');
var temp1H = document.querySelector('.temp1H');
var temp1L = document.querySelector('.temp1L');
var desc2 = document.querySelector('.desc2');
var temp2H = document.querySelector('.temp2H');
var temp2L = document.querySelector('.temp2L');
var desc3 = document.querySelector('.desc3');
var temp3H = document.querySelector('.temp3H');
var temp3L = document.querySelector('.temp3L');
var desc4 = document.querySelector('.desc4');
var temp4H = document.querySelector('.temp4H');
var temp4L = document.querySelector('.temp4L');
var desc5 = document.querySelector('.desc5');
var temp5H = document.querySelector('.temp5H');
var temp5L = document.querySelector('.temp5L');
var desc6 = document.querySelector('.desc6');
var temp6H = document.querySelector('.temp6H');
var temp6L = document.querySelector('.temp6L');
var local = document.querySelector('.local');
var day_return0 = document.querySelector('.day_return0');
var day_return1 = document.querySelector('.day_return1');
var day_return2 = document.querySelector('.day_return2');
var day_return3 = document.querySelector('.day_return3');
var day_return4 = document.querySelector('.day_return4');
var day_return5 = document.querySelector('.day_return5');
var day_return6 = document.querySelector('.day_return6');
var lat_return = document.querySelector('.lat_return');
var lon_return = document.querySelector('.lon_return');

var d = new Date();
var date = d.getDate();
var day_num = d.getDay();
var day_str0 = "Default";
var day_str1 = "Default";
var day_str2 = "Default";
var day_str3 = "Default";
var day_str4 = "Default";
var day_str5 = "Default";
var day_str6 = "Default";

if (day_num == 1) {
    day_str0 = "Monday";
    day_str1 = "Tuesday";
    day_str2 = "Wednesday";
    day_str3 = "Thursday";
    day_str4 = "Friday";
    day_str5 = "Saturday";
    day_str6 = "Sunday";
}
else if (day_num == 2) {
    day_str0 = "Tuesday";
    day_str1 = "Wednesday";
    day_str2 = "Thursday";
    day_str3 = "Friday";
    day_str4 = "Saturday";
    day_str5 = "Sunday";
    day_str6 = "Monday";
}
else if (day_num == 3) {
    day_str0 = "Wednesday";
    day_str1 = "Thursday";
    day_str2 = "Friday";
    day_str3 = "Saturday";
    day_str4 = "Sunday";
    day_str5 = "Monday";
    day_str6 = "Tuesday";
}
else if (day_num == 4) {
    day_str0 = "Thursday";
    day_str1 = "Friday";
    day_str2 = "Saturday";
    day_str3 = "Sunday";
    day_str4 = "Monday";
    day_str5 = "Tuesday";
    day_str6 = "Wednesday";
}
else if (day_num == 5) {
    day_str0 = "Friday";
    day_str1 = "Saturday";
    day_str2 = "Sunday";
    day_str3 = "Monday";
    day_str4 = "Tuesday";
    day_str5 = "Wednesday";
    day_str6 = "Thursday";
}
else if (day_num == 6) {
    day_str0 = "Saturday";
    day_str1 = "Sunday";
    day_str2 = "Monday";
    day_str3 = "Tuesday";
    day_str4 = "Wednesday";
    day_str5 = "Thursday";
    day_str6 = "Friday";
}
else if (day_num == 0) {
    day_str0 = "Sunday";
    day_str1 = "Monday";
    day_str2 = "Tuesday";
    day_str3 = "Wednesday";
    day_str4 = "Thursday";
    day_str5 = "Friday";
    day_str6 = "Saturday";
}
else {
    day_str0 = "Error";
    day_str1 = "Error";
    day_str2 = "Error";
    day_str3 = "Error";
    day_str4 = "Error";
    day_str5 = "Error";
    day_str6 = "Error";
}

var API_KEY = '347ede38675be21165a79d4337e50e0b';


button.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + local.value + '&appid=' + API_KEY)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var a = data['coord']['lat'];
            var b = data['coord']['lon'];
            console.log(a);
            console.log(b);
            lat_return.innerHTML = a;
            lon_return.innerHTML = b;
        })
    
    .catch(err => alert("As of right now, the latitude and longitude lookup only works for one word queries."))
    })


button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude.value + '&lon=' + longitude.value + '&appid=' + API_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var desc0Value = data['daily'][0]['weather'][0]['description'];
        var temp0HValue = data['daily'][0]['temp']['max'];
        var temp0LValue = data['daily'][0]['temp']['min'];
        var desc1Value = data['daily'][1]['weather'][0]['description'];
        var temp1HValue = data['daily'][1]['temp']['max'];
        var temp1LValue = data['daily'][1]['temp']['min'];
        var desc2Value = data['daily'][2]['weather'][0]['description'];
        var temp2HValue = data['daily'][2]['temp']['max'];
        var temp2LValue = data['daily'][2]['temp']['min'];
        var desc3Value = data['daily'][3]['weather'][0]['description'];
        var temp3HValue = data['daily'][3]['temp']['max'];
        var temp3LValue = data['daily'][3]['temp']['min'];
        var desc4Value = data['daily'][4]['weather'][0]['description'];
        var temp4HValue = data['daily'][4]['temp']['max'];
        var temp4LValue = data['daily'][4]['temp']['min'];
        var desc5Value = data['daily'][5]['weather'][0]['description'];
        var temp5HValue = data['daily'][5]['temp']['max'];
        var temp5LValue = data['daily'][5]['temp']['min'];
        var desc6Value = data['daily'][6]['weather'][0]['description'];
        var temp6HValue = data['daily'][6]['temp']['max'];
        var temp6LValue = data['daily'][6]['temp']['min'];
        temp0HValue = (temp0HValue - 273.15) * (9/5) + 32;
		temp0HValue = temp0HValue.toFixed(2);
		temp0LValue = (temp0LValue - 273.15) * (9/5) + 32;
		temp0LValue = temp0LValue.toFixed(2);
		temp1HValue = (temp1HValue - 273.15) * (9/5) + 32;
		temp1HValue = temp1HValue.toFixed(2);
		temp1LValue = (temp1LValue - 273.15) * (9/5) + 32;
		temp1LValue = temp1LValue.toFixed(2);
		temp2HValue = (temp2HValue - 273.15) * (9/5) + 32;
		temp2HValue = temp2HValue.toFixed(2);
		temp2LValue = (temp2LValue - 273.15) * (9/5) + 32;
		temp2LValue = temp2LValue.toFixed(2);
		temp3HValue = (temp3HValue - 273.15) * (9/5) + 32;
		temp3HValue = temp3HValue.toFixed(2);
		temp3LValue = (temp3LValue - 273.15) * (9/5) + 32;
		temp3LValue = temp3LValue.toFixed(2);
		temp4HValue = (temp4HValue - 273.15) * (9/5) + 32;
		temp4HValue = temp4HValue.toFixed(2);
		temp4LValue = (temp4LValue - 273.15) * (9/5) + 32;
		temp4LValue = temp4LValue.toFixed(2);
		temp5HValue = (temp5HValue - 273.15) * (9/5) + 32;
		temp5HValue = temp5HValue.toFixed(2);
		temp5LValue = (temp5LValue - 273.15) * (9/5) + 32;
		temp5LValue = temp5LValue.toFixed(2);
		temp6HValue = (temp6HValue - 273.15) * (9/5) + 32;
		temp6HValue = temp6HValue.toFixed(2);
		temp6LValue = (temp6LValue - 273.15) * (9/5) + 32;
		temp6LValue = temp6LValue.toFixed(2);
        desc0.innerHTML = desc0Value;
        temp0H.innerHTML = temp0HValue;
        temp0L.innerHTML = temp0LValue;
        desc1.innerHTML = desc1Value;
        temp1H.innerHTML = temp1HValue;
        temp1L.innerHTML = temp1LValue;
        desc2.innerHTML = desc2Value;
        temp2H.innerHTML = temp2HValue;
        temp2L.innerHTML = temp2LValue;
        desc3.innerHTML = desc3Value;
        temp3H.innerHTML = temp3HValue;
        temp3L.innerHTML = temp3LValue;
        desc4.innerHTML = desc4Value;
        temp4H.innerHTML = temp4HValue;
        temp4L.innerHTML = temp4LValue;
        desc5.innerHTML = desc5Value;
        temp5H.innerHTML = temp5HValue;
        temp5L.innerHTML = temp5LValue;
        desc6.innerHTML = desc6Value;
        temp6H.innerHTML = temp6HValue;
        temp6L.innerHTML = temp6LValue;
        day_return0.innerHTML = day_str0;
        day_return1.innerHTML = day_str1;
        day_return2.innerHTML = day_str2;
        day_return3.innerHTML = day_str3;
        day_return4.innerHTML = day_str4;
        day_return5.innerHTML = day_str5;
        day_return6.innerHTML = day_str6;
    })

.catch(err => alert("Coordinates didn't return data"))
}) 
