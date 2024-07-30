export const dataQuestions = [
  {
    id: 1,
    type: "string",
    question: "Ваш пол:",
    versionsAnswers: ['Мужчина', "Женщина"]
  },
  {
    id: 2,
    type: "string",
    question: "укажите ваш возраст: ",
    versionsAnswers: ["До 18", "От 18 до 28", "от 29 до 35", "От 36"]
  },
  {
    id: 3,
    type: "string",
    question: "Выберите лишнее:",
    versionsAnswers: [
      "Дом",
      "Шалаш",
      "Бунгало",
      "Скамейка",
      "Хижина"]
  },
  {
    id: 4,
    type: "string",
    question: "Продолжите числовой ряд:18  20  24  32",
    versionsAnswers: [
      "62",
      "48",
      "74",
      "57",
      "60",
      "77",
    ]
  },
  {
    id: 5,
    type: "color",
    question: "Выберите цвет, который сейчас наиболее Вам приятен:",
    versionsAnswers: [
      "#A8A8A8",
      "#0000A9",
      "#00A701",
      "#F60100",
      "#FDFF19",
      "#A95403",
      "#000000",
      "#850068",
      "#46B2AC",
    ]
  },
  {
    id: 6,
    type: "color",
    question: "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен: ",
    versionsAnswers: [
      "#A8A8A8",
      "#FDFF19",
      "#00A701",
      "#000000",
      "#0000A9",
      "#F60100",
      "#46B2AC",
      "#850068",
      "#A95403",
    ]
  },
  {
    id: 7,
    type: "string",
    question: "Какой из городов лишний?",
    versionsAnswers: [
      "Вашингтон",
      "Лондон",
      "Париж",
      "Нью-Йорк",
      "Москва ",
      "Оттава",
    ]
  },
  {
    id: 8,
    type: "imgNumber",
    question: "Выберите правильную фигуру из четырёх пронумерованных.",
    img:{path:"./assets/img/quest8.png", width:'185px', height:"235px"},

    versionsAnswers: [
    1,2,3,4
    ]
  },
  {
    id: 9,
    type: "string",
    question: "Вам привычнее и важнее:",
    versionsAnswers: [
      "Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее",
      "Учитывать в ежедневной практике прошлый опыт"
    ]
  },
  // {
  //   id: 10,
  //   type: "imgString",
  //   question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
  //   img:"../img/quest10.png",
  //   versionsAnswers: [
  //     "оно остроконечное",
  //     "оно устойчиво",
  //     "оно-находится в состоянии равновесия",
  //   ]
  // },
  {
    id: 11 ,
    type: "imgString",
    question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
    img:{path:"./assets/img/quest10.png", width:'228px', height:"207px"},
    versionsAnswers: [
      "оно остроконечное",
      "оно устойчиво",
      "оно-находится в состоянии равновесия",
    ]
  },
  {
    id: 12 ,
    type: "imgNumber",
    question: "Вставьте подходящее число",
    img:"./assets/img/quest11.png",
    versionsAnswers: [
      34,36,53,44,66,42
    ]
  },

]