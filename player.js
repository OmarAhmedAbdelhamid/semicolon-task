function substitute(callback){
    console.log("Player is warming up and get in the pitch in 5 sec");
    setTimeout(()=>{
        console.log("Player is down the pitch");
        callback();
    },5000)
} 


function choose(){
    console.log("Picking the player");
}


function done(){
    console.log("Change has been made");
}

substitute(()=>{
    done();
})

choose();


