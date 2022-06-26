let array=[];
let button=document.getElementById("#button");
let input=document.getElementById("inputtask");
let date=document.getElementById("date");
array.forEach((insert)=>{
  document.write(insert +"<br>");
});
// inserting task
function insert(){
    if(input.value==0){
      alert("Task cannot be empty");
    }
    else{
    let taskname=document.querySelector("#inputtask").value;
    let taskdate=document.querySelector("#date").value;
    document.querySelector("#tasklists").innerHTML+=`<div><span>${taskname}${taskdate}<span>
    <button type="submit" onclick="completedtask(this)">completed</button>
    <button type="submit" onclick="deletetask(this)">delete</button> 
</div>`     
input.value="";  }  
};
//delete task
let deletetask=(d)=>{
    d.parentElement.parentElement.remove();
}
//move to completed task
let completedtask=(c)=>{
  var copy=c.parentElement.parentElement.cloneNode(true);
  document.getElementById("completed").appendChild(copy);
  c.parentElement.parentElement.remove();
}
    


