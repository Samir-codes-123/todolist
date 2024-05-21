// Function to create a close button and append it to a list item
function createX(index){
   let span = document.createElement("span");
   span.className = "close";
   span.innerHTML = "x";
   index.appendChild(span);
}

let Myarr = [];

// Select all list items and add close buttons to them
let NodeList = document.querySelectorAll("li");
NodeList.forEach((index) => {
   createX(index);
   Myarr.push(index.textContent.trim());
});

// Adding event listener to the add button to add new tasks
document.querySelector(".addBtn").addEventListener("click", () => {
   let input = document.querySelector("#myInput").value.trim();
   let checking=`${input}x`
   console.log(input);
   if (input === "") {
       alert("Write your task to submit!");
   } else if (Myarr.includes(checking)) {
      alert("Task has already been added");
   } else {
       let Myul = document.querySelector("ul");
       let newLi = document.createElement("li");
       newLi.textContent = input;
       createX(newLi);// span
       Myul.appendChild(newLi);
       Myarr.push(newLi.textContent.trim());

       // Add event listener to the close button of the new list item
       newLi.querySelector(".close").addEventListener("click", (e) => {
           e.target.parentNode.remove();
           e.stopPropagation();
           Myarr = Myarr.filter((element) => element !== newLi.textContent.trim());// returns filter array
           console.log(Myarr);
       });

       // Clear the input field after adding the task
       document.querySelector("#myInput").value = '';
       console.log(Myarr);
   }
});

// Adding event listeners to existing close buttons to remove tasks
const allCloseButtons = document.querySelectorAll('.close');
allCloseButtons.forEach((element) => {
   element.addEventListener('click', (e) => {
       e.target.parentNode.remove();
       e.stopPropagation();
       let removedText = e.target.parentNode.textContent.trim();
       Myarr = Myarr.filter((element) => element !== removedText);
       console.log(Myarr);
   });
});

// Adding event listener to the list to mark items as checked
document.querySelector("ul").addEventListener("click", (e) => {
   if (e.target.tagName === "LI") {
       e.target.classList.toggle("checked"); // to toggle 
   }
});
