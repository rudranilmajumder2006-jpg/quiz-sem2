startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";

    loadQuestion();
});

function loadQuestion(){

    let q = questions[currentQuestion];

    document.getElementById("question-number")
    .textContent = currentQuestion + 1;

    questionText.textContent = q.question;

    optionsDiv.innerHTML = "";

    q.options.forEach((option,index)=>{

        const label =
        document.createElement("label");

        label.innerHTML = `
            <input
            type="radio"
            name="answer"
            value="${index}">
        `;

        label.appendChild(
            document.createTextNode(option)
        );

        optionsDiv.appendChild(label);
    });

    feedback.textContent = "";
    feedback.className = "";

    nextBtn.style.display = "none";
}