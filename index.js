import { dataQuestions } from "./assets/js/data.js";



const BODY = document.querySelector("body");
const header = document.querySelector('.header');
// const OVERLAY_CONTENT = document.querySelector(".menu__overlay");
const header__menu = document.querySelector('.header__menu');
const menu__cross = document.querySelector('.menu__cross');
const container__burger = document.querySelector(".wrapper__burger");



// menu
container__burger.addEventListener('click', addBurgerMenu)
function addBurgerMenu() {
  header__menu.classList.toggle("active__menu");
  BODY.classList.toggle("lock");
  // OVERLAY_CONTENT.classList.toggle("active__menu");
  // setTimeout(()=>{

  menu__cross.classList.toggle("active__menu");
  container__burger.classList.toggle("active__menu");
  header.querySelector('.header__icon').remove()
  header.style.display = "grid"
  // },500)
}



// test 
let popupBg = document.querySelector('.popup__bg');
let popup = popupBg.querySelector('.popup'); // Само окно
let popupBTN = popup.querySelector('.popup__button'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
// let progressBar = popup.querySelector(".popup__progress-bar")

let questionNumber = 0

BODY.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.closest('button') && !e.target.closest('.popup__button')) {
    header.insertAdjacentHTML("beforeend", `
        <div class="header__icon">
            <img class="header__img" src="./assets/img/rain_bk3.png" alt="">
            <p class="header__text">тест на определение IQ</p>
        </div>
        
      `)
    header.style.display = "flex";
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active');

    changeQuestion()

  }
})
const popupQuestion = document.querySelector('.popup__content-question');

function changeQuestion() {

  let answer = []
  if (dataQuestions[questionNumber].type === "string") {
    answer = dataQuestions[questionNumber].versionsAnswers.map((ans) => {
      return `<li class="popup__content-item item">
        <div class="item-circle">
        </div>
        <p class="item-text">${ans}</p>
        </li>`

    })
  } else if (dataQuestions[questionNumber].type === "color") {
    const square = dataQuestions[questionNumber].versionsAnswers.map((ans) => {
      return `<div class="popup__content-square color" style="background:${ans}">
    </div>`
    })
    answer.push(
      `<li class="popup__wrapper-square">
      ${square.join('')}
      </li>`
    )

  } else if (dataQuestions[questionNumber].type === "imgNumber") {
    const numbers = dataQuestions[questionNumber].versionsAnswers.map((ans) => {
      return `<div class="popup__content-number">${ans}
    </div>`
    })
    answer.push(
      `<li class="popup__content-img item" style="width:${dataQuestions[questionNumber].img.width}">
        <img src="${dataQuestions[questionNumber].img.path}" alt="">
      </li>
      <li class="popup__content-numbers item">
        ${numbers}
      </li>`
    )
  }else if (dataQuestions[questionNumber].type === "imgString") {
    const numbers = dataQuestions[questionNumber].versionsAnswers.map((ans) => {
      return `<div class="popup__content-number">${ans}
    </div>`
    })
    answer.push(
      `<li class="popup__content-img item" style="width:${dataQuestions[questionNumber].img.width}">
        <img src="${dataQuestions[questionNumber].img.path}" alt="">
      </li>
      <li class="popup__content-numbers item">
        ${numbers}
      </li>`
    )
  }
  // answer = dataQuestions[questionNumber].versionsAnswers.map((ans)=>{
  //   if(dataQuestions[questionNumber].type === "string"){
  //     return `<li class="popup__content-item item">
  //     <div class="item-circle">
  //     </div>
  //     <p class="item-text">${ans}</p>
  //     </li>`
  //   } else if(dataQuestions[questionNumber].type === "color"){
  //     return `<li class="popup__content-square" style="background:${ans}">
  //     </li>`
  //   }

  // })

  popupQuestion.innerText = dataQuestions[questionNumber].question
  const list = document.createElement('ul');
  list.className = "popup__content-list";
  console.log(answer.join(' '));
  list.innerHTML = answer.join('');
  document.querySelector('.popup__content-list').replaceWith(list);

  questionNumber++
  const progressLine = 100 / dataQuestions.length * questionNumber + "%";
  document.documentElement.style.setProperty('--width', progressLine);

}

popupBTN.addEventListener('click', (e) => {

  changeQuestion()
  e.target.disabled = true;
  e.target.style.background = "#8E8E8E";

})
// const popupList = document.querySelector('.popup__content-list');

popup.addEventListener('click',(e)=>{
  popup.querySelectorAll('.item').forEach(item => {
    item.style.background = "rgb(90 90 90 / 73%)";
    const circle = item.querySelector('.item-circle')
    const text = item.querySelector('.item-text')
    if(circle || text){

      circle.style.background = "transparent";
      text.style.color = "#FFF";
    }
  });
  if(e.target.closest('.item')){
    e.target.style.background = "#FFC700"
    e.target.querySelector('.item-circle').style.background =  "#2950C2";
    e.target.querySelector('.item-text').style.color =  "#272727";
    popupBTN.style.background = "#FFC700"
    popupBTN.style.color = "#0D0C11"
    popupBTN.disabled = false;
  }
  if(e.target.closest('.color')){
    popup.querySelectorAll('.color').forEach(item => {
      item.style.border = "none"
      
    });
    e.target.style.border = "3px solid #FFC700"
    popupBTN.style.background = "#FFC700"
    popupBTN.style.color = "#0D0C11"
    popupBTN.disabled = false;
  }
})