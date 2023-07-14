const questions = [
    {
        'que':'Who invented Java Programming?',
        'a' : 'Guido van Rossum',
        'b' : 'James Gosling',
        'c' : 'Dennis Ritchie',
        'd' : 'Bjarne Stroustrup',
        'correct' : 'b',
    },
    {
        'que':'Which one of the following is not a Java feature?',
        'a' : 'Object-oriented',
        'b' : 'Use of pointers',
        'c' : 'Portable',
        'd' : 'Dynamic and Extensible',
        'correct' : 'b',
    },
    {
        'que':'What is the extension of java code files?',
        'a' : '.js',
        'b' : '.text',
        'c' : '.class',
        'd' : '.java',
        'correct' : 'd',
    },
    {
        'que':'What is the extension of compiled java classes?',
        'a' : '.js',
        'b' : '.text',
        'c' : '.class',
        'd' : '.java',
        'correct' : 'c',
    },
    {
        'que':'Which of these are selection statements in Java?',
        'a' : 'break',
        'b' : 'continue',
        'c' : 'for()',
        'd' : ' if()',
        'correct' : 'd',
    },
    {
        'que':'Which of these keywords is used to define interfaces in Java?',
        'a' : ' intf',
        'b' : 'Intf',
        'c' : 'interface',
        'd' : 'Interface',
        'correct' : 'c',
    },
    {
        'que':'Which of the following is a superclass of every class in Java?',
        'a' : 'ArrayList',
        'b' : 'Abstract class',
        'c' : ' Object class',
        'd' : 'String',
        'correct' : 'c',
    },
    {
        'que':'Which one of the following is not an access modifier?',
        'a' : ' Protected',
        'b' : 'Void',
        'c' : 'Public',
        'd' : 'Private',
        'correct' : 'b',
    },
    {
        'que':'What is the numerical range of a char data type in Java?',
        'a' : ' 0 to 256',
        'b' : '-128 to 127',
        'c' : '0 to 65535',
        'd' : '0 to 32767',
        'correct' : 'c',
    },
    {
        'que':'Which of the below is not a Java Profiler?',
        'a' : ' JProfiler',
        'b' : 'Eclipse Profiler',
        'c' : 'JVM',
        'd' : 'JConsole',
        'correct' : 'c',
    },
]

let index = 0;
let total = questions.length;
let right=0,
    wrong=0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct ){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector(".box").innerHTML = `
        <h3> Thank You For Playing The Quiz </h3>
        <h2> ${right} / ${total} are correct </h2>
    `
}

loadQuestion();
