const questions =[{
    'que':'Which of the following is markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'Which of the following is scripting language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'PHP',
    'correct':'c'  
},
{
    'que':'Which of the following is not programing language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'None',
    'correct':'d'
}
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')


const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
    
}
 const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans=== data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
 }

 const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
 }
  const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false
        }
    )
  }
  const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thank you for playing quiz</h3>
    <h2> ${right}/ ${total} are correct</h2>
    </div>
    `
  }
 loadQuestion();