  const WebSocket = require('ws'); // URL connection
    require("dotenv").config(); //env
   var price,highprice = 0 ;
    const ws = new WebSocket(process.env.API)



    const coinbuy = function(){
      console.log("buy");
  }
  const coinsell = function(){
      console.log("sell");
  }

    ws.onmessage = even =>{
      price = JSON.parse(even.data).c; 
      high = JSON.parse(even.data).h; 
      low = JSON.parse(even.data).l; 
      if (price < highprice){
          highprice = price;
          console.log(highprice);
        coinbuy()
      }else{
        highprice = price;
        console.log(highprice);
        coinsell()
      }  
  console.log("price"+ price);
}