function UI() {

   this.quiz_box =document.querySelector("#quiz-box");
   this.quiz_box =document.querySelector("#quiz-box");

}

UI.prototype.soruGoster = function (){
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent=this.soruGoster.SoruMetni;

    const optionList =document.createElement("div");
    optionList.classList.add("option-list");

for(let [key,value] of Object.entries(this.soruGoster.cevapSecenekleri)){
     const option = document.createElement("div");
     option.classList.add("option");


     const span = document.createElement("span");
     span.textContent = key + ")" + value;


     option.appendChild(span);
     optionList.appendChild(option);


   }  

   cardBody.appendChild(title)
   
   cardBody.appendChild(optionList);
   this.body.appendChild(cardBody);

}


