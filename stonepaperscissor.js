//stonepaperscissor
// var r=require('readline-sync')
// var user1=r.question('1:stone\n2:paper\n3:scissors\nuser 1 enter choice:')
// var user2=r.question('\nuser 2 enter choice:')
// if(user1==user2)
// {
//     console.log("Tie")
// }
// else if(user1==1 && user2==2)
// {
//     console.log('user2 wins')
// }
// else if(user1==2 && user2==1)
// {
//     console.log('user2 fails')
// }
// else if(user1==1 && user2==3)
// {
//     console.log('user1 wins')
// }
// else if(user1==3 && user2==1)
// {
//     console.log('user1 fails')
// }

//stonepaperscissor
let computer = Math.floor(Math.random()*3);

let read = require('readline-sync');
while(true){
    var user = read.question("enter the input[0:scissor | 1 : paper | 2 : stone ] : ");
console.log("user input : " + user);
console.log("computer input : " + computer);

if(user == computer ){
    console.log("scores level");
}
else if(user == 1  &&  computer == 0){
    console.log("computer wins");
}
else if(user == 0  &&  computer == 1){
    console.log("user wins");
}
else if(user == 1  &&  computer == 2){
    console.log("user wins");
}
else if(user == 2  &&  computer == 1){
    console.log("computer wins");
}
else if(user == 2  &&  computer == 0){
    console.log("user wins");
}
else if(user == 0 &&  computer == 2){
    console.log("computer wins");
}


}

