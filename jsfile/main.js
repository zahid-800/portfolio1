function hello() {
    console.log('Hello')
}
function goodBye() {
    console.log('Goodbye')
}
goodBye();
hello();

function display(some) {
    console.log(some);
}

function caculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

caculator(4, 886, display);

setTimeout(function () {
    myfuction('hello brother')
}, 4000)



function myfunction() {
    let d = new Date();

    document.getElementById('demo1').innerHTML = d.getHours() + ' : ' + d.getMinutes() + " : " + d.getSeconds()+ ' ' +  'pm'

}
setInterval(myfunction,1000)

// function u(some){
//     document.getElementById('demo1').innerHTML=some;
// }
// const promises= new Promise(function(resolve, reject){
//     console.log('hello welcome')
    
//     let paymentSuccess=true;

//     if(paymentSuccess){
      
//        resolve("ok")
//     }else{
//         reject("not right")
//     }
// });

// promises.then(
//     function(value)  {u(value);},
//     function(error)  {u(error);}
// )