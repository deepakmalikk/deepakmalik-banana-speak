var btnTranslate=document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input")
var outputDiv =document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURl(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with the server! please try again after sometime")
}


function clickEventHandler(){
    var inputText= txtInput.value

    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translated =json.contents.translated;
        outputDiv.innerText=translated ;})
    .catch(errorHandler)
    
}


btnTranslate.addEventListener("click",  clickEventHandler)