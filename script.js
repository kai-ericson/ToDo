const todoList = document.querySelector("#todoList");
const addBtn=document.querySelector("#addBtn");
const input=document.querySelector("#listItem");
let completedCount = 0;
const todoArray=[];

addBtn.addEventListener("click",addToList);
input.addEventListener("click",function(){
    input.setAttribute("class","inputClicked");
});


function addToList(){
    const text=input.value;
    //Checks that the input isn't empty
    if(text !== ""){
        //adds the new input to the array and the HTML list
        todoArray.push(text);
        const item = document.createElement("li");
        todoList.appendChild(item);
        const itemLabel=document.createElement("span");
        itemLabel.innerText=text;
        item.appendChild(itemLabel);
        
        const trashcan = document.createElement("button");
        trashcan.setAttribute("class","trashcan");
        trashcan.innerHTML="&#x1F5D1";
        //trashcan.setAttribute("class","trashcan");
        item.append(trashcan);
        //Eventlistener checks for clicks on the list, and updates number of finished tasks
        itemLabel.addEventListener("click",
            function(){
                console.log("clicked on text");
                itemLabel.setAttribute("class", "completed");
                completedCount++;
                console.log(completedCount);
                document.querySelector("#nbrFinishedTasks").innerHTML = completedCount + " completed";
            }
        );
        trashcan.addEventListener("click", function(){
            item.remove();
            
        })
        //Clear the input and warning text, and updates number of tasks in list.
        input.value="";
        document.querySelector("#warningText").innerHTML = "";
        document.querySelector("#warningText").setAttribute("class","");
        //text.setAttribute("class","");
        //document.querySelector("#nbrTasks").innerHTML ="Number of tasks: "+ todoArray.length;
        
    }else{
        //Warning text is shown if the input is empty.
        document.querySelector("#warningText").innerHTML="Input must not be empty";
        document.querySelector("#warningText").setAttribute("class","warning");
       
        

    }
};