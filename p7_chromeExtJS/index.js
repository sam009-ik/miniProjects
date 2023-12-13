//Javascript for taking in input from user and pushing it to an array
let myLeads = []
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById("tab-btn")


//Create a ul-element
const ulEl = document.createElement("ul");
//Add bootstrap class to list
ulEl.classList.add("list-group");
//Append to the div after input btn
document.getElementById("div-list-el").appendChild(ulEl);

//Get data from local storage parsed as an array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

//Check if leadsFromLocalStorage is truth
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    
    //Clear the input field
    clearInput();

    //Convert myLeads to string and store
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    //Render the leads
    render(myLeads);

    //To verify that it works
    console.log(localStorage.getItem("myLeads"));

})

deleteBtn.addEventListener("dblclick", function() {
    //When delete button is doubled click
    localStorage.clear()
    myLeads = []
    //For clearing the dom we can call renderLeads since it will be empty
    render(myLeads)
})

tabBtn.addEventListener("click", function(){
    //console.log(tabs[0]["url"])
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })

})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target='_blank' href='"+ myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // Template strings using backticks
        listItems += `
            <li class="list-group-item m-0">
                <a class="list-group-item-action text-info link-underline-primary" target='_blank' href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>`
    };
    ulEl.innerHTML = listItems;
    
}


function clearInput() {
    if (inputEl.value != "") {
        //Then set input value to an empty string
        inputEl.value = "";
    }
}