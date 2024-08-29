let subject={
    'Front' : 'React',
    'Backend' : 'PHP'

};

console.log(subject)

for(i in subject){ 
    switch(i){
        
        case 'Front' :
            console.log("we cant");
        break 
    }
    console.log("Tracks: "+i+" Subject "+subject[i]);
    


}

