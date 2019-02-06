
var db = firebase.database();
db.ref('scores/0x09bbddfc7a185865044557144b29f9430ec3276f9959223047e20034e4a3b4b3').once('value',function gotData(data){
    console.log('helo');
},errData);
function gotData(data){
    console.log('data: '+data.val());
}
function errData(err){
    console.log(arr);
}