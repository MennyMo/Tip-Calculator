let bill = 0;
let rating = 0;
let sharingBill = 0;

let result;

document.getElementById("calculate").onclick = function() {
    tipCalculator();
    console.log('here');
} 


function tipCalculator(){

    let bill = document.getElementById("bill").value;
    let rating = document.getElementById("rating").value;
    let sharingBill = document.getElementById("sharing-bill").value;

     if (sharingBill === null || sharingBill <= 1) 
     {
    sharingBill = 1;
    document.getElementById("each").style.display = "none";
    } 
  else {
    document.getElementById("each").style.display = "block";
  }
  let total = (bill * rating) / sharingBill;
    result = Math.round(total * 1000)/1000;
    console.log(result);
  //  document.getElementsByClassName('total').style.display ;
    document.getElementById("tip").innerHTML = result;
}




    



 

  
