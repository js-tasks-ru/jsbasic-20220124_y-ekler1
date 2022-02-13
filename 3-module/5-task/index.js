let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
           let numAr = str
           .split(' ')
           .filter(x => Number(x))
     let min = Math.min(...numAr);
     let max = Math.max(...numAr);


     return {
       min,
       max
     }
           }
