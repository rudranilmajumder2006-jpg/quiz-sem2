submitBtn.addEventListener("click", ()=>{

    const selected =
    document.querySelector(
        'input[name="answer"]:checked'
    );

    if(!selected){
        alert("Please select an answer");
        return;
    }

    let answer = Number(selected.value);

    if(answer === questions[currentQuestion].answer){

        feedback.textContent = "Correct!";
        feedback.className = "correct";

        score++;
    }
    else{

        feedback.textContent = "Wrong!";
        feedback.className = "wrong";
    }

    document.getElementById("score")
    .textContent = score;

    nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", ()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();     // Link to Part 2
    }
    else{
        showResult();
    }
});

function showResult(){

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    document.getElementById("final-score")
    .textContent =
    `${score}/${questions.length}`;
}

restartBtn.addEventListener("click", ()=>{

    currentQuestion = 0;
    score = 0;

    resultScreen.style.display = "none";
    startScreen.style.display = "block";

    document.getElementById("score")
    .textContent = "0";
});