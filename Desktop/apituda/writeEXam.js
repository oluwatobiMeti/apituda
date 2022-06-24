// const { Button } = require("bootstrap");

const question = [
  {
    questionId: 1,
    question:
      "What was the total value of Grade A and C Wireless Headphones produced in 2019?",
    img: `./images/download (1).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
    cont: `<button>Grade A</button> <button>$500 per 50</button> <button>Grade B	</button> <button>$300 per 50</button> <button>Grade C</button> <button>$150 per 50</button>`,
  },
  {
    questionId: 2,
    question:
      "If production of Grade B Wireless Headphones increased by 26% from 2022 to 2023, what would be the value of Grade B Wireless Headphones produced in 2023?",
    img: `./images/download (1).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
    cont: `<button>Grade A</button> <button>$500 per 50</button> <button>Grade B	</button> <button>$300 per 50</button> <button>Grade C</button> <button>$150 per 50</button>`,
  },
  {
    questionId: 3,
    question:
      "What was the proportionate value of grade A to C grade Wireless Headphones produced in 2018?",
    img: `./images/download (1).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
    cont: `<button>Grade A</button> <button>$500 per 50</button> <button>Grade B	</button> <button>$300 per 50</button> <button>Grade C</button> <button>$150 per 50</button>`,
  },
  {
    questionId: 4,
    question:
      "What was the value of Grade C Wireless Headphones produced in 2020 and Grade B Wireless Headphones produced in 2022?",
    img: `./images/download (1).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
    cont: `<button>Grade A</button> <button>$500 per 50</button> <button>Grade B	</button> <button>$300 per 50</button> <button>Grade C</button> <button>$150 per 50</button>`,
  },
  {
    questionId: 5,
    question:
      "What's the difference between the average precipitation in Tirana and Algiers?",
    img: `./images/download (5).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 6,
    question:
      "What was the percentage increase in precipitation in Tirana between April and May?",
    img: `./images/download (5).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 7,
    qustion:
      "There was an error in calculations of precipitation levels in Stockholm. The figure recorded in Feb is 15% higher than it should be. What's the new percentage change in precipitation from Feb to Mar in Stockholm?",
    img: `./images/download (5).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 8,
    qusetion:
      "What's the ratio of level of precipitation in April of Algiers to Stockholm in its simplest form?",
    img: `./images/download (5).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 9,
    question:
      "What is the value of Antlyn plc's share of the textile industry in 2021 and 2022 combined?",
    img: `./images/download (6).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 10,
    question:
      "What is the change in value of Graff inc's share of the textile industry from 2021 to 2022?",
    img: `./images/download (6).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 11,
    question:
      "What was the combined value of Balcom plc's and Trade ltd's share of the industry in 2022?",
    img: `./images/download (6).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 12,
    question:
      "What was the approximate percentage increase in the value of Royer inc's textile sales from 2021 to 2022?",
    img: `./images/download (6).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 13,
    question: "What proportion of Val Thorens' snowfall occurred in January?",
    img: `./images/download (7).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 14,
    question:
      "What was the percentage increase in snowfall in Whistler from November to December?",
    img: `./images/download (7).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 15,
    question:
      "If total snowfall for the following January was predicted to increase by 20% from December in Val Thorens and Whistler and decrease by 15% in Tignes and Les Arcs, what would be the total snowfall across all the resorts next January?",
    img: `./images/download (7).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  {
    questionId: 16,
    question:
      "How much snow fell in Whistler and Les Arcs in January and February combined?",
    img: `./images/download (7).png`,
    more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  },
  // {
  //   questionId: 17,
  //   img: `./images/download (1).png`,
  //   more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  // },
  // {
  //   questionId: 18,
  //   img: `./images/download (1).png`,
  //   more: `The average selling prices of the different grades of wireless headphones are as follows:`,
  // },
];

const answer = [
  {
    id: 1,
    1: "$490,000",
    2: "$540,000",
    3: "$550,000",
    4: "$790,000",
  },
  {
    id: 2,
    1: "$113,400",
    2: "$126,000",
    3: "$151,200",
    4: "$226,800",
  },
  {
    id: 3,
    1: "0.83:1",
    2: "0.89:1",
    3: "0.94:1",
    4: "1.06:1",
  },
  {
    id: 4,
    1: "$300,000",
    2: "$310,000",
    3: "$330,000",
    4: "$390,000",
  },
  {
    id: 5,
    1: "64",
    2: "66",
    3: "68",
    4: "70",
  },
  {
    id: 6,
    1: "4.39%",
    2: "4.35%",
    3: "4.28%",
    4: "4.12%",
  },
  {
    id: 7,
    1: "34",
    2: "36",
    3: "42",
    4: "48",
  },
  {
    id: 8,
    1: "34",
    2: "36",
    3: "42",
    4: "48",
  },
  {
    id: 8,
    1: "4.1",
    2: "3.1",
    3: "2.1",
    4: "1.1",
  },
  {
    id: 9,
    1: "$501k",
    2: "$534k",
    3: "$621k",
    4: "$1,035k",
  },
  {
    id: 10,
    1: "$45k",
    2: "$252k",
    3: "$435k",
    4: "$480k",
  },
  {
    id: 11,
    1: "$464k",
    2: "$551k",
    3: "$604k",
    4: "$760k",
  },
  {
    id: 12,
    1: "7.3%",
    2: "6.1%",
    3: "7.9%",
    4: "8.2%",
  },
  {
    id: 13,
    1: "5%",
    2: "7%",
    3: "10%",
    4: "12%",
  },
  {
    id: 14,
    1: "30%",
    2: "40%",
    3: "50%",
    4: "60%",
  },
  {
    id: 15,
    1: "110.5cm",
    2: "115.5cm",
    3: "120.5cm%",
    4: "125.5cm",
  },
  {
    id: 16,
    1: "40cm",
    2: "50cm",
    3: "60cm%",
    4: "70cm",
  },
];

const changeText = [
  "welcome to apituda",

  "Do You want to continue",

  "yes or no enter y or n respectively",
];
// const declearations = (function () {
//   const body = document.querySelector("body");
//   const welcomeNote1 = document.querySelector(".dor");
//   const welcomeNote2 = document.querySelector(".cor");
//   const welcomeNote3 = document.querySelector(".sor");
//   const wrapper = document.querySelector(".wrap");
//   const input = document.querySelector("input");
//   const about = document.querySelector(".about");
//   const check = document.querySelector("button");
//   const container1 = document.querySelector(".container-one");
//   const container2 = document.querySelector(".container-two");
//   const dsQuestion = document.querySelector(".question")
// })();
 const body = document.querySelector("body");
 const welcomeNote1 = document.querySelector(".dor");
 const welcomeNote2 = document.querySelector(".cor");
 const welcomeNote3 = document.querySelector(".sor");
 const wrapper = document.querySelector(".wrap");
 const input = document.querySelector(".cntInput");
 const about = document.querySelector(".about");
 const check = document.querySelector(".checkbtn");
 const container1 = document.querySelector(".container-one");
 const container2 = document.querySelector(".container-two");
 const dsQuestion = document.querySelector(".question");
const questionHeader = document.querySelector(".qnt-head");
const questionText = document.querySelector(".qnt-text");
const buttonList = document.querySelector(".button_list");
const options = document.querySelectorAll("input[radio]");
const optionContainer = document.querySelectorAll(".optCnt");
const opts = document.querySelectorAll(".opt");
welcomeNote1.innerHTML = changeText[0];
// setTimeout(function () {
//   welcomeNote1.style.display = "none";
  welcomeNote2.innerHTML = changeText[1];
// }, 15000);
// setTimeout(function () {
//   welcomeNote1.style.display = "none";
//   welcomeNote2.style.display = "none";
  welcomeNote3.innerHTML = changeText[2];
// }, 30000);
// setTimeout(function () {
  input.style.display = "block"
  check.style.display = "block"
// }, 45000);
for (i = 0; i < question.length; i++) {
  buttonList.innerHTML += `<li class="buttons">${question[i].questionId}</li>`;
}
check.addEventListener("click", function () {
  if (input.value == "n") {
    body.style.backgroundImage = "none";
    wrapper.style.display = "none";
    about.style.display = "block";
    //about.classList.add("display");
  } else if (input.value == "y") {
    body.style.backgroundImage = "none";
    wrapper.style.display = "none";
    about.style.display = "none";
    about.classList.remove("display");
    dsQuestion.style.display = "block";
  } else {
    alert("invalid input");
  }
});
// const optionArray = Array.from("optionContainer");
// optionArray.forEach((element, index) => {

// })
 
const buttons = document.querySelectorAll(".buttons");
const btnArr = Array.from(buttons);
btnArr.forEach((element, index) => {
  console.log(answer[index][1]);
  element.addEventListener("click", function () {
    questionHeader.innerHTML = `question ${question[index].questionId}`;
    questionText.innerHTML = `${question[index].question}`;


    optionOne.innerHTML = ` <input type="radio" name="options" value="${answer[index][1]}" id="rad${answer[index].id}" class="opt"> ${answer[index][1]}`;
    optionTwo.innerHTML = ` <input type="radio" name="options" value="${answer[index][2]}" id="rad${answer[index].id}" class="opt"> ${answer[index][2]}`;
    optionThree.innerHTML = `<input type="radio" name="options" value="${answer[index][3]}" id="rad${answer[index].id}" class="opt"> ${answer[index][3]}`;
    optionFour.innerHTML = `<input type="radio" name="options" value="${answer[index][4]}" id="rad${answer[index].id}" class="opt"> ${answer[index][4]}`;
    const arr = [];
    const AddOpt = (opt) => {
      arr.push({ opt });
      localStorage.setItem("options", JSON.stringify(arr))
      return { opt };
    }
    
for (const element of opts) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    const newopt = AddOpt(element.value);
  });
    }
    const option = Array.from(options);
    option.forEach((element) => {
      element.addEventListener("click", function () {
        element.classList.add("dsColor");
      });
    });
  });
});