const quizDB = [
    {
        question: "Q1: what is my hobbies?",
        a: "Cycling",
        b: "Outdoorsy person",
        c: "Chess",
        d: "Watching TV",
        ans: "ans3"
    },
    {
        question: "Q2: My favourite subject",
        a: "physics",
        b: "MAth",
        c: "Chemistry",
        d: "Computer",
        ans: "ans1"
    },
    {
        question: "Q3: My best friend name ",
        a: "NoOne",
        b: "Srajan",
        c: "Sajal",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q4: How old I am?",
        a: "15",
        b: "14",
        c: "13.5",
        d: "14.5",
        ans: "ans1"
    },
    {
        question: "Q5: What is my birthday date(Most difficult)?",
        a: "27 may",
        b: "21 june",
        c: "3 oct",
        d: "29 feb",
        ans: "ans1"
    },
]




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const LoadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

LoadQuestion();

const getCheckAnswer = () => {
    let answer

    answers.forEach((curAnsElem) => {
            if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        LoadQuestion();       
   }else{

        showScore.innerHTML = `
            <h3> your score ${score}/${quizDB.length} 👍 </h3>
        `;

        showScore.classList.remove('scoreArea');
   }

}); 