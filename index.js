// Code your solutions in this file
 
function writeCards(names){

    let people = []

    for (let i = 0; i< names.length; i++){
       people.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }

    return people

}





function countDown (number){

    while (number >= 0){
        console.log (number)
         number--
    }
    
}