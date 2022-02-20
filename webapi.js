  const WebSocket = require('ws'); // URL connection
    require("dotenv").config(); //env
   var price,highprice = 0 ;
    const ws = new WebSocket(process.env.API)
    //const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    ws.onmessage = even =>{
      price = JSON.parse(even.data).p; 
      high = JSON.parse(even.data).h; 
      low = JSON.parse(even.data).l; 
  //     if (price < highprice){
  //         highprice = price;
  //         console.log(highprice);
  //       coinbuy()
  //     }else{
  //       highprice = price;
  //       console.log(highprice);
  //       coinsell()
  //     }  
  //  }

  //   const coinbuy = function(){
  //       console.log("buy");
  //   }
  //   const coinsell = function(){
  //       console.log("sell");
  //   }

  console.log("high price"+ high);
  console.log("low price" + low);

    }