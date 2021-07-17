const quizData=[
    {
    question:'How old is sathwik?',
    a:'5',
    b:'6',
    c:'7',
    d:'8',
    correct:'b'
    },{
        question:'Favourite Programming language of chandra?',
        a:'Java',
        b:'C++',
        c:'Python',
        d:'JS',
        correct:'d'
    },{
        question:'who is the present president of India?',
        a:'Ramanath Kovind',
        b:'Narendra Modi',
        c:'Puyush Goyal',
        d:'prathiba patel',
        correct:'a'
    },
    {
        question:'HTML Stands for',
        a:'Application Programming Interface',
        b:'Hyper Text Markup Language',
        c:'Json Object Notation',
        d:'Cascading Style Sheet',
        correct:'b'
    },
    {
        question:'what year was JS Launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'None Of the above',
        correct:'b'
    }
]

const questionE1=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit")
const answerEls=document.querySelectorAll('.answer')
const quiz=document.getElementById('quiz')
let currentQuiz=0;
let score=0;
function loadQuiz() {
    deSelectAnwers();
const currentQuizData=quizData[currentQuiz];
questionE1.innerText=currentQuizData.question;
   
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}
function deSelectAnwers() {
    answerEls.forEach((answerE1)=>{
        answerE1.checked=false;
          
    });
}
submitBtn.addEventListener('click',()=>{
    const answer=getSelected();

        if(answer){
            if(answer===quizData[currentQuiz-1].correct){
                score++;
            }
            
        
            if(currentQuiz<quizData.length){
                
                loadQuiz();
                }
               
            else{
                quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} question.</h2><button onClick="location.reload()">Reload</button>`
            }
            currentQuiz++;
    console.log(score)
        }
})
function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerE1)=>{
        if(answerE1.checked){
            answer= answerE1.id;
        }
    });
    return answer;
}
initialLoad();
function initialLoad(){

   if(currentQuiz==0){
    loadQuiz();
   } 
   currentQuiz++;
}
