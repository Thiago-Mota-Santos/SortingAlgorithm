const arr = [3,5,8,1,3,9,1,10,12,5];

function bubbleSort(arr){

  let n = arr.length

  for(let i = 0; i< n; i++){
      for(let j = 0;j < n-1; j++)
      {
          if(arr[j] > arr[j+1]){
           let aux = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = aux
          }
      }
  }
    return arr;
}


console.log(bubbleSort(arr))