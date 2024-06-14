let captchaChecked= false;
function submitHandler(event){
    if(captchaChecked){
    let outputDate= document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("input Value",inputDate.value); //Convert the string form to date form

    let formatedDate= new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value= formatedDate;
    }else{
        alert("please check the captcha to submit the form");
        event.preventDefault();
    }
}

 function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500); 

function captchasuccess(){
    captchaChecked = true;
}
