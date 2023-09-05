let questionsRandom = [
  "직무를 선택한 이유를 말해주세요.",
  "이 회사에 들어와서 하고 싶은 일은 무엇입니까?",
  "본인의 강점이 무엇인지 업무 경력을 토대로 소개해주세요.",
  "우리 회사의 제품을 사용해 본 적이 있나요? 제품을 개선할 방법이 있을까요?",
  "번아웃 관리 비법이 있나요?",
  "회사에 입사했을 때 기대하는 바가 무엇인가요?",
  "업무 외에 다른 일을 시키는 것도 괜찮은가요?",
  "갈등 해소법이 있나요?",
  "살면서 힘들었던 일과 그 일을 극복한 방법을 말해주세요.",
  "이직을 결심하게 된 계기가 있나요?",
  "잘 하는것과 못 하는것이 있나요?",
  "가장 어려웠던 고객은 누구였습니까?",
  "고객의 기대에 부응하지 못한 시간에 대해 말씀해 주십시오. 무슨 일이 있었고, 그 상황에 어떻게 대처했습니까?",
  "많은 고객을 상대할 때 고객 요구 사항을 우선적으로 처리하는 방법은 무엇입니까?",
  "당신이 맡은 책임을 넘어서는 일을 맡았던 때를 말씀해 주십시오.",
  "책임이 불분명한 일을 해야 했던 때를 말씀해 주십시오.",
  "도전적인 프로젝트를 진행하기 위해 솔선수범한 경험에 대해 말씀해 주십시오.",
  "복잡한 문제에 대한 간단한 해결책을 찾은 때를 기술하십시오.",
  "당신이 무언가를 발명한 때를 말해주세요.",
  "프로세스를 단순화하려고 시도했지만 실패한 시간에 대해 말씀해 주십시오. 달리 무엇을 했을까요?",
  "문제를 해결하기 위해 자신의 판단력을 효과적으로 사용했던 때를 말씀해 주십시오.",
  "불충분한 정보나 불완전한 데이터로 작업해야 했던 시간에 대해 말씀해 주십시오.",
  "당신이 틀렸던 때를 말해주세요.",
  "지난 1년 동안 배운 중요한 교훈에 대해 말씀해 주십시오.",
  "사고 방식을 바꾼 상황이나 경험에 대해 말씀해 주십시오.",
  "호기심을 통해 더 현명한 결정을 내렸던 때를 말씀해 주십시오.",
  "누군가를 멘토링한 경험에 대해 말씀해 주십시오.",
  "당신이 나쁜 고용을 한 시간에 대해 말해주세요. 언제 그것을 알아냈고, 무엇을 했습니까?",
  "채용 결정을 내릴 때 잠재적인 후보자에게 어떤 자질을 보십니까?",
  "직장에서 프로젝트의 품질에 대해 불만족스러웠던 경우에 대해 말씀해 주십시오. 개선하기 위해 무엇을 했습니까?",
  "다른 사람들이 그 이상으로 나아가도록 동기를 부여한 시간에 대해 말씀해 주십시오.",
  "작업에 대한 표준과 기대치를 충족할 수 없었던 상황을 설명하십시오.",
  "가장 중요한 직업적 성취에 대해 말씀해 주십시오.",
  "과감하고 도전적인 결정을 내려야 했던 때를 말씀해 주십시오.",
  "당신의 비전이 큰 영향을 미쳤던 때를 말씀해 주십시오.",
  "계산된 위험을 감수한 경우의 예를 제공하십시오.",
  "다른 사람이 해 주기를 기다리지 않고 문제나 실수를 바로잡기 위해 솔선했던 상황을 설명하십시오. ",
  "다른 사람에게 정보를 요청했지만 응답하지 않은 경우에 대해 말씀해 주십시오. 뭐 했어요?",
  "Describe a time when you had to rely on yourself to complete a task.",
  "Tell me about a time when you had to be frugal.",
  "Tell me about a time when you had to rely on yourself to complete a project.",
  "Describe a time when you had to speak up in a difficult or uncomfortable environment.",
  "What would you do to gain the trust of your team?",
  "Tell me about a time when you had to tell a harsh truth to someone.",
  "Tell me about the most complicated problem you've had to deal with.",
  "Give me an example of when you utilized in-depth data to develop a solution.",
  "Tell me about something that you have learned in your role.",
  "Describe a time when you disagreed with the approach of a team member. What did you do?",
  "Give me an example of something you believe in that nobody else does.",
  "Tell me about an unpopular decision of yours.",
  "Describe the most challenging situation in your life and how you handled it.",
  "Give an example of a time when you had to handle a variety of assignments. What was the outcome?",
  "Tell me about a time when your team gave up on something, but you pushed them to deliver results."
];

let questionsEssential = [
  "지원 동기를 말해주세요.",
  "진행한 프로젝트들에 대해 요약 설명해주세요.",
  "문제 해결 경험을 말해주세요.",
  "향후 5년 계획을 말해주세요."
];

const questionsCount = 10;
const responseWaitSeconds = 15;
const responseWriteSeconds = 60;

let currentQuestionIndex = 0;
let timerInterval;
let questions = [];
let answers = {};

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const questionText = document.getElementById("question-text");
const timer = document.getElementById("timer");
const answerTextarea = document.getElementById("answer");
const reportContainer = document.getElementById("report-container");
const reportList = document.getElementById("report-list");

startButton.addEventListener("click", startInterview);
nextButton.addEventListener("click", nextQuestion);
finishButton.addEventListener("click", finishInterview);

function startInterview() {
  startButton.disabled = true;
  nextButton.disabled = false;
  finishButton.disabled = false;

  shuffleArray(questionsRandom);
  questions = questionsEssential.concat(questionsRandom.slice(0, questionsCount - questionsEssential.length));
  shuffleArray(questions);

  currentQuestionIndex = 0;
  answers = {};

  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex < questionsCount) {
    questionText.textContent = questions[currentQuestionIndex];
    answerTextarea.value = "";
    startTimer(responseWaitSeconds, showAnswerTextarea);
  } else {
    finishInterview();
  }
}

function startTimer(seconds, callback) {
  clearInterval(timerInterval);
  timer.textContent = seconds;
  timerInterval = setInterval(function () {
    seconds--;
    timer.textContent = seconds;
    if (seconds === 0) {
      clearInterval(timerInterval);
      if (callback) callback();
    }
  }, 1000);
}

function showAnswerTextarea() {
  answerTextarea.style.display = "block";
  startTimer(responseWriteSeconds, () => {
    answerTextarea.style.display = "none";
    nextButton.disabled = false;

    let answer = answerTextarea.value.trim();
    answers[currentQuestionIndex] = answer;
  });
}

function nextQuestion() {
  clearInterval(timerInterval);

  let answer = answerTextarea.value.trim();
  answers[currentQuestionIndex] = answer;

  currentQuestionIndex++;
  answerTextarea.style.display = "none";

  displayQuestion();
}

function finishInterview() {
  clearInterval(timerInterval);
  nextButton.disabled = true;
  finishButton.disabled = true;
  reportContainer.style.display = "block";
  reportList.innerHTML = "";

  questions.slice(0, currentQuestionIndex).forEach(function (question, index) {
    const answer = answers[index] || "No answer provided";
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Question ${index + 1}:</strong> ${question}<br><strong>Your Answer:</strong> ${answer}`;
    reportList.appendChild(listItem);
  });
}

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function init() {
  questionText.innerHTML = `Round마다 질문이 랜덤하게 ${questionsCount}개 나옵니다.<br/>각 질문에 대해서 ${responseWaitSeconds}초간 생각할 시간이 주어진 후 ${responseWriteSeconds}초간 대답을 입력할 수 있습니다.`;
}
init();
