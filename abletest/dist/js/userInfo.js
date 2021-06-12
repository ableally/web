let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
let user_vals = sessionStorage.getItem("vals");
document.querySelector("span.name").innerHTML = user_name;
document.getElementById("fname").setAttribute('value',user_name);
document.getElementById("fscore").setAttribute('value',user_points);
document.getElementById("fvals").setAttribute('value',user_vals);


document.querySelector("span.vals").innerHTML = user_vals;
