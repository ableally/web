let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
let user_vals = sessionStorage.getItem("vals");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.vals").innerHTML = user_vals;
document.querySelector("span.points").innerHTML = user_points;
if (localStorage.getItem != user_points){
    localStorage.setItem("score", user_points);
}
// if (localStorage.getItem == user_points){
//     localStorage.setItem("score", 0);
// }
// localStorage.setItem("score", user_points);
document.getElementById("result").innerHTML = localStorage.getItem("score");
// document.querySelector("span.time_taken").innerHTML = user_time;

