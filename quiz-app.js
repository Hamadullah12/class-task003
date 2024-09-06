let data = [
    {
        Q: "What is the ans of 2+2?",
        a: "4",
        b: "3",
        c: "9",
        d: "6",
        ans: "ans1"
    },
    {
        Q: "What is the ans of 6+2?",
        a: "4",
        b: "3",
        c: "8",
        d: "6",
        ans: "ans3"
    },
    {
        Q: "What is the ans of 8+1?",
        a: "4",
        b: "3",
        c: "9",
        d: "6",
        ans: "ans3"
    },
    {
        Q: "What is the ans of 77-65?",
        a: "4",
        b: "3",
        c: "9",
        d: "8",
        ans: "ans4"
    },
    {
        Q: "What is the ans of 4*2?",
        a: "4",
        b: "8",
        c: "12",
        d: "16",
        ans: "ans2"
    },
    {
        Q: "What is the ans of 2/2?",
        a: "4",
        b: "1",
        c: "0",
        d: "0.5",
        ans: "ans2"
    },
    {
        Q: "What is the ans of 4/2?",
        a: "2",
        b: "1",
        c: "0",
        d: "0.5",
        ans: "ans2"
    }


]

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");

let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAns() {
    let ans;
    answers.forEach((curElement) => {
        if (curElement.checked) {
            ans = curElement.id;
            console.log(ans);
        }

    })
    return ans;
}

function next() {

    let checkedAns = checkAns()


    if(checkedAns == data[num].ans){
        score++;
    }
    num++;

    if(num < data.length){
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
} else{
    myScore.innerHTML=`You Scored ${score}/${data.length} `
}

}
