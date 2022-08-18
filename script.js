var today = moment().format('L');
         document.getElementById("currentDay").innerHTML = today;


/*
function loadSavedContent() {
    if(localStorage.userEdits!=null)
    document.getElementsByClassName("taskBox").innerHTML = localStorage.userEdits;
}  

function saveEdits() {
    var editElem = document.getElementsByClassName("taskBox");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
*/


function save8() {
    var editElem = document.getElementById("8");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
            
function save9() {
    var editElem = document.getElementById("9");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}

function save10() {
    var editElem = document.getElementById("10");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
            
function save11() {
    var editElem = document.getElementById("11");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}    
        
function save12() {
    var editElem = document.getElementById("12");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
        
function save1() {
    var editElem = document.getElementById("1");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
            
function save2() {
    var editElem = document.getElementById("2");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
        
function save3() {
    var editElem = document.getElementById("3");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}
            
function save4() {
    var editElem = document.getElementById("4");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}  
            
function save5() {
    var editElem = document.getElementById("5");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
}




function loadSavedContent8() {
    if(localStorage.userEdits!=null)
    document.getElementById("8").innerHTML = localStorage.userEdits;
}  

function loadSavedContent9() {
    if(localStorage.userEdits!=null)
    document.getElementById("9").innerHTML = localStorage.userEdits;
}  

function loadSavedContent10() {
    if(localStorage.userEdits!=null)
    document.getElementById("10").innerHTML = localStorage.userEdits;
}  

function loadSavedContent11() {
    if(localStorage.userEdits!=null)
    document.getElementById("11").innerHTML = localStorage.userEdits;
}  

function loadSavedContent12() {
    if(localStorage.userEdits!=null)
    document.getElementById("12").innerHTML = localStorage.userEdits;
}  

function loadSavedContent1() {
    if(localStorage.userEdits!=null)
    document.getElementById("1").innerHTML = localStorage.userEdits;
}  

function loadSavedContent2() {
    if(localStorage.userEdits!=null)
    document.getElementById("2").innerHTML = localStorage.userEdits;
}  
function loadSavedContent3() {
    if(localStorage.userEdits!=null)
    document.getElementById("3").innerHTML = localStorage.userEdits;
}  

function loadSavedContent4() {
    if(localStorage.userEdits!=null)
    document.getElementById("4").innerHTML = localStorage.userEdits;
}  

function loadSavedContent5() {
    if(localStorage.userEdits!=null)
    document.getElementById("5").innerHTML = localStorage.userEdits;
}







/*
var editing = false;
 $(document).on("click", ".saveButton", function() {

   if (!editing) {
     editing = true;
     $(this).closest('td').find('.edited').each(function () {
        var html = $(this).html();
        var input = $('<input type="text" />');
        input.val(html);
        input.appendTo(this);;

     });
   }

 }).change(function() {

   editing = false;
   // var username= 

 });
*/


/*
let tasks = [];


/*
const saveTask = (ev)=>{
    ev.preventDefault();
    let task = {
        
        time: document.getElementById('scheduler').value,
        /*time: document.getElementById('9').value,
        time: document.getElementById('10').value,
        time: document.getElementById('11').value,
        time: document.getElementById('12').value,
        time: document.getElementById('1').value,
        time: document.getElementById('2').value,
        time: document.getElementById('3').value,
        time: document.getElementById('4').value,
        time: document.getElementById('5').value
    

    console.log('added' , {tasks} );
    let pre = document.querySelector('schedule');
    pre.textContent = '\n' + JSON.stringify(tasks, '\t', 2);

    localStorage.setItem('MyTasks', JSON.stringify(tasks));
    } 

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('save').addEventListener('click', saveTask);
})


/*
var elems = document.getElementsByClassName( "taskBox" );
var arr = jQuery.makeArray( elems );
arr.reverse();
$( arr ).appendTo( document.body );
*/
