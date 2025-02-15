"use strict";

//Промісифікувати setTimeout
//setTimeout(cb,1000)
//delay(1000).then(cb)

function delay(ms){
  function executor(resolve,reject){
      if(typeof ms !== 'number'){
         reject (new TypeError('milliseconds must be a number'))
      }
      if(ms < 0 || !Number.isInteger(ms)){
        reject (new RangeError('milliseconds must be more 0 and must be integer'))
      }
       setTimeout(resolve,ms)
     }

  return new Promise(executor)

}
//setTimeout(()=>console.log('action is over'),1000)
delay(2000)
.then(()=>console.log('action is over'))
.catch(error => console.log(error))