let count =0 ;

function displayCount(){
    document.getElementById('countDisplay').innerHTML =count
}

function checkCountValue(){
    if (count ===10){
        alert("Your Instagram post gained 10 followers! Congrats")
    } else if (count ===20){
        alert("Your instagram post gained 20 followers! Keep it going")
    }
}

function increaseCount(){
    count ++ ;
    displayCount();
    checkCountValue();
}

function reset(){
    document.getElementById('countDisplay').innerHTML=0
}