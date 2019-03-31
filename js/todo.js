//helper funciton

function createElement(type,className){
    var element=document.createElement(type);
    if(className){
        element.classList.add(className);
    }
    return element;
}

function createParagraph(text,className){
    var p=createElement("p",className);
    p.innerText=text;
    return p;
}

function createUl(className){
    var ul=createElement("ul",className);
    return ul;
}

function createDiv(className){
    var div=createElement("div",className);
    return div;
}
function createButton(text,className,dataPurpose){
    var button=createElement("button",className,dataPurpose);
    button.innerText=text;
    button.setAttribute("data-purpose",dataPurpose);
    return button;
}

function createTODO(text){
    var li=createElement("li","todo");
    var p=createParagraph(text);
    li.append(p);
    var buttonContainer=createDiv("buttons");
    var upButton=createButton("up","up","up");
    var downButton=createButton("down","down","down");
    var removeButton=createButton("remove","remove","remove");

    buttonContainer.append(upButton);
    buttonContainer.append(downButton);
    buttonContainer.append(removeButton);

    // now append button container to list
    li.append(buttonContainer);

    return li;
}


var todoInput =document.getElementById("todo-input");
var todoAdd=document.getElementById("todo-add");
var todoMainContainer=document.getElementById("todo-main");
// var ulContainer=document.getElementById("todo-main");


todoAdd.addEventListener("click",function(e){
    if(todoInput.value.length >1){
            var todo=createTODO(todoInput.value);
           
            todoMainContainer.append(todo);
            console.log(todoMainContainer);
            // ulContainer.append(todoMainContainer)
            todoInput.value="";
        }
    }
)
 

