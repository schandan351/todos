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
    if(todoInput.value.length >0){
        var todo=createTODO(todoInput.value);
        if(!todoMainContainer.querySelector(".todo")){
            var noToDosP=document.querySelector("p.no-todos");
            todoMainContainer.removeChild(noToDosP);
            var ul=createUl("todo-list");
            ul.append(todo);
            todoMainContainer.append(ul);
        }else{
            var ul=document.querySelector(".todo-list");
            ul.append(todo);
        }
            todoInput.value="";
        }
    }
)
 

todoInput.addEventListener("keyup",function(e){
    if(todoInput.value.length >0){
        if(e.keyCode===13){
            var todo=createTODO(todoInput.value);
            if(!todoMainContainer.querySelector(".todo")){
                var noToDosP=document.querySelector("p.no-todos");
                todoMainContainer.removeChild(noToDosP);
                var ul=createUl("todo-list");
                ul.append(todo);
                todoMainContainer.append(ul);
            }else{
                var ul=document.querySelector(".todo-list");
                ul.append(todo);
            }
            todoInput.value="";
        }
    }
})

todoMainContainer.addEventListener("click",function(e){
    if(e.target.nodeName=== "BUTTON"){
        var button=e.target;
        var typeButton=button.getAttribute("data-purpose");

        var li=button.parentElement.parentElement;
        var ul=li.parentElement;

        switch(typeButton){
            case "remove":
                ul.removeChild(li);
                if(ul.children.length <1){
                    var p=createParagraph("NO TODOS TO DISPLAY","no-todos");
                    var li=document.querySelector(".todo-list");
                    todoMainContainer.removeChild(li);
                    todoMainContainer.append(p);
                }
                break;

            case "up":
                var previousElement=li.previousElementSibling;

                if(previousElement!==null){
                    ul.removeChild(li);
                    ul.insertBefore(li,previousElement);
                }
                break;
            
            case "down":
                var nextElement=li.nextElementSibling;
                if(nextElement!==null){
                    ul.removeChild(li);
                    ul.insertBefore(li,nextElement.nextElementSibling);
                }
                break;

        }
    }
})