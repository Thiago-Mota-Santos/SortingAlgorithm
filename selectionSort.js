let array = [];
for (let i = 0 ; i < 100 ; i++){
  array.push(getRandom(1, 1000));
}





function selectionSort (array)
{

    let min = array[0];

    for(let j in array){
        min = j;
    

    for(let i in array){
    if(array[i] > array[min]){
        min = i;
    }
    if(array[j] < array[min]){
        aux = array[j];
        array[j] = array[min];
        array[min] = aux
    }
    }
}

        return array;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(selectionSort(array));
