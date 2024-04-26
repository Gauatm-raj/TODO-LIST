let btn=document.getElementById("btn");

let todo=document.getElementById("todo");


btn.addEventListener("click",()=>{
    
    let card=document.createElement("div");
    let superCard=document.createElement("div");

    card.className="card";
    card.innerText="Text Area";
    superCard.style.backgroundColor = "wheat";

    card.setAttribute("contenteditable", "true");

    superCard.append(card);


    //make a div into todo for add text area empty
    card.addEventListener("click",(e)=>{

        if(card.innerText == "Text Area"){
            card.innerText="";
        }
    })

    //if we click outside the div text area remove if text area is empty 
    card.addEventListener("blur",(evt)=>{
      
        let blurCard=evt.target;
        let blurCardParent=blurCard.parentElement;
        
        if(blurCard.innerText==""){
            blurCardParent.remove();
        }

    })

    //selector option

    let selector=document.createElement("select");
    selector.innerHTML=`
      <option value="todo">Todo</option>
      <option value="process">Process</option>
      <option value="done">Done</option>
    `;

    superCard.append(selector);

    selector.addEventListener("change",(evt)=>{
        let selectItem=evt.target;
        let selectedItemValue= selectItem.value;

        let columnMoved=document.getElementById(selectedItemValue);
        columnMoved.append(superCard);

    })




    
    todo.append(superCard);
});