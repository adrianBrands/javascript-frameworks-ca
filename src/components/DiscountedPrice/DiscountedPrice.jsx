
export default function DiscountedPrice(data){
  
  for(let i = 0; i < data.length; i++){
    if(data[i].price === data[i].discountedPrice){
      console.log(data[i].price)
    } else {
      return 0
    }
  }
}