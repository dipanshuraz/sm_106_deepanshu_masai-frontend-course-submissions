var total = '290';
var discount;
if(total >= 300) 
{
  discount = 0.1 * total;
  if(discount>100) {

    discount=100;
    console.log("Final price: "+total+", Discount price: ", total-discount);
  } else {
    console.log("Final price: "+total+", Discount price: ", total-discount);
  } 
  }
  else {
    console.log("Discount is Invalid. Final price:", total);
}
