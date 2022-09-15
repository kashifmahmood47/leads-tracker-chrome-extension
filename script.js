let inputBtn = document.getElementById("input-btn");
let inputText = document.getElementById("input-text");
let ulEl = document.getElementById("ul-el");
let clearAll = document.getElementById("clear-all");
let saveTab = document.getElementById("save-tab")
let inputArr = [];
let inputArr2 = [];
let temp = [];
// let localInput = [];
let leadsFromLocalStorage = [];
// localStorage.clear();

leadsFromLocalStorage = JSON.parse(localStorage.getItem("inputArr"));

if (leadsFromLocalStorage) {
    inputArr = leadsFromLocalStorage;
    showLeads(inputArr);

}

function showLeads(arr) {
    let inputTemp = "";
    for (let i = 0; i < arr.length; i++) {

        // Manual Way
        // inputTemp += "<li> <a target='_blank' href='" + "http://" + inputArr[i] + "'>" + inputArr[i] + "</a> </li>";

        // using template string
        inputTemp += `
        <li> 
        <a target='_blank' href='${arr[i]}'> ${arr[i]} </a> 
        </li>
        `;
    }

    ulEl.innerHTML = inputTemp;
}

if (leadsFromLocalStorage) {
    inputArr = leadsFromLocalStorage;
    showLeads(inputArr);
}

// const tab = [
//     { url: "www.facebook.com" }
// ]

saveTab.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        inputArr.push(tabs[0].url);
        localStorage.setItem("inputArr", JSON.stringify(inputArr));
        showLeads(inputArr);

    })


})

clearAll.addEventListener("click", function() {
    localStorage.clear();
    inputArr = [];
    showLeads(inputArr);
})

inputBtn.addEventListener("click", function() {

    inputArr.push(inputText.value);
    inputText.value = "";
    showLeads(inputArr);


    localStorage.setItem("inputArr", JSON.stringify(inputArr));

    // //array to string
    // localStorage.setItem("inputArr", JSON.stringify(inputArr));

    // //string to array
    // localInput = JSON.parse(localStorage.getItem("inputArr"));

    // console.log(inputArr);
    // //again to string
    // inputArr = JSON.stringify(inputArr);
    // console.log(inputArr);
})