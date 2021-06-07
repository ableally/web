let questions = [
  {
    id: 1,
    question: "	You love connecting with new people all the time? ",
    type : 1,
  },
  {
    id: 2,
    question: "	You are more of a player on the ground rather than a spectator? ",
    type :1,
  },
  {
    id: 3,
    question: "	You are a livewire who cannot sit idle doing nothing most of the time? ",
    type:3
  },
  {
    id: 4,
    question: "	You are always in search of new ideas and solutions to problems ",
    type:1
  },
  {
    id: 5,
    question: "	Theories, lectures and philosophical reflections can't hold your attention for long ",
    type:3
  },
  {
    id: 6,
    question: " You are a flexible and adaptable person ",
    type:2
  },
  {
    id: 7,
    question: " You have an excellent innate talent to persuade people",
    type:1

  },
  {
    id: 8,
    question: " You are largely a self-driven and self-motivated person who do not need anyone to oversee  you for any work/project you take up  ",
    type:1
  },
  {
    id: 9,
    question: "	You are a keen observer of people and sensitive to their body language and minute shifts in their behaviour ",
    type:3
  },
  {
    id: 10,
    question: "	You have an insatiable passion for the project you take up, no matter what, with exceptional tenacity and resilience to see it through ",
    type:2
  },
  {
    id: 11,
    question: "	You are always brimming with new ideas and thoughts  ",
    type:1
  },
  {
    id: 12,
    question: "You have a high sense of self-confidence and self-esteem  ",
    type:1

  },
  {
    id: 13,
    question: "You always feel that there is a way to do things better ",
    type:1

  },
  {
    id: 14,
    question: "	You can work alone or in a crowd or with a team if need be ",
    type:2

  },
  {
    id: 15,
    question: "	Risks and challenges excite you  ",
    type:1

  },
  {
    id: 16,
    question: " You love competition, run toward it and embrace it",
    type:1
  },
  {
    id: 17,
    question: " You feel secure as an ideator, activator and getting your team run with you",
    type:1

  },
  {
    id: 18,
    question: " You love most subjects and things under the Sun ",
    type:3

  },
  {
    id: 19,
    question: " You are inclined to change the status quo and ways of doing things ",
    type:1

  },
  {
    id: 20,
    question: "	You love innovating more than executing and managing organizational risks ",
    type:1

  }
];

let question_count = 0;
let points = 0;
let vals = 'Test';

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == "Most Likely"  && questions[question_count].type == 1 ) {
    points += 2;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Likely"  && questions[question_count].type == 1 ) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Not Likely"  && questions[question_count].type == 1 ) {
    points += -1;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Never"  && questions[question_count].type == 1 ) {
    points += -2;
    sessionStorage.setItem("points", points);
  }



  if (user_answer == "Most Likely"  && questions[question_count].type == 2 ) {
    points += -2;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Likely"  && questions[question_count].type == 2 ) {
    points += -1;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Not Likely"  && questions[question_count].type == 2 ) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Never"  && questions[question_count].type == 2 ) {
    points += 2;
    sessionStorage.setItem("points", points);
  }



  if (user_answer == "Most Likely"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Likely"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Not Likely"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Never"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }


  if(points > 10)
  {
  vals = "Entrepreneur";
  sessionStorage.setItem("vals", vals);
  }
  else
  {
    vals = "Intrapreneur";
    sessionStorage.setItem("vals", vals);
  }
  // if (user_answer == questions[question_count].answer) {
  //   points += 10;
  //   sessionStorage.setItem("points", points);
  // }
  console.log(points);
 console.log(vals)
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = [
    "Most Likely",
    "Likely",
    "Not Likely",
    "Never"
  ]

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
