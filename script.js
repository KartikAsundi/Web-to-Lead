function submitHandler(){
    let outputDate= document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("input Value",inputDate.value); //Convert the string form to date form

    let formatedDate= new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value= formatedDate;
}