function boilwater(callback){
    console.log('boiling the water');
    setTimeout(()=>{
        console.log("Water is boiled");
        callback();
    },3000)
}



function preparemeal(){
    console.log("The meal getting prepared")
}


function serveMeal() {
    console.log("Meal is ready to be served!");
}


boilwater(()=>{
    serveMeal();
});

preparemeal();