function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value.toUpperCase();
  // let len = name.length;
  //  if(len < 14){
  //   name= name + new Array(len/2 + 1).join(' ')


  //  }

    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }