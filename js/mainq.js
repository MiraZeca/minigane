window.addEventListener('load',run);
const myH1 = document.querySelector('h1');
let options = document.querySelectorAll('.option');


function run() {
  if (!quiz.end()) {
    let cq = quiz.getQuestion();
    myH1.innerHTML = cq.text;
    let rand = quiz.randomize();
    // console.log(rand);
    for (var i = 0; i < options.length; i++) {
      options[i].innerHTML = cq.options[i];
      options[i].onclick = function () {
        quiz.userAnswer(this.innerHTML);
        run();
      }
    }
  }else {
    alert(`Your score is ${quiz.score}`);
  }
}
