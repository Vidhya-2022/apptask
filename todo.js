
let button=document.getElementById("#button");
let input=document.getElementById("inputtask");
let date=document.getElementById("date");
let option=document.getElementById("option");
// function addtodo(text){
//     const todo={
//          text:document.getEventlister("#inputtask"),
    
//         id:Date.now(),
//     };
//     todoitem.push(todo);
//     console.log(todoitem);
// };
// const form=document.querySelector("#inputtask").value;
// form.addEventListener("submit",add);
function insert(){
    let taskname=document.querySelector("#inputtask").value;
    let taskdate=document.querySelector("#date").value;
    let taskoption=document.querySelector("#option");
    document.querySelector("#tasklists").innerHTML+=`<div>${taskname}</div>`;
    document.querySelector("#tasklists").innerHTML+=`<div>${taskdate}</div>`;
    
}
