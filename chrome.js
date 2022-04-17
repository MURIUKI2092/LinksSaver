let myLeads = [];
let inputEl = document.querySelector("#input")
 let unordered =document.querySelector("#unorderd");
 let tabSave = document.querySelector("#tabbtn");

const  leadFromLocalStorage =JSON.parse(localStorage.getItem("myLeads"))
console.log(leadFromLocalStorage)
if(leadFromLocalStorage){
  myLeads = leadFromLocalStorage;
  renderLeads(myLeads);
}
let inputBtn =document.querySelector("#savebtn")
let deleteBtn = document.querySelector("#deletebtn")
// grabbing the current tab
tabSave.addEventListener("click",()=>{
  chrome.tabs.query({'active': true, 'currentWindow': true}, function 
(tabs) {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderLeads(myLeads)

})

})

 inputBtn.addEventListener("click",()=>{
   myLeads.push(inputEl.value);
   inputEl.value =" ";
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderLeads(myLeads)
   
 })
 deleteBtn.addEventListener("dblclick",()=>{
  myLeads.splice(0,myLeads.length)
  localStorage.clear()
  renderLeads(myLeads)
  console.log(leadFromLocalStorage)
 })
 function renderLeads(n) {
  let listItems = " ";
  for(let i =0; i<n.length;i++){
   listItems += `<li>
   <a  target =' _blank' href=  '${n[i]  }  '> ${n[i]  }</a></li> `
   
 }
 unordered.innerHTML = listItems

 }
