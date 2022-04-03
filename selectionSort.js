let array = [3,5,8,1,3,9,1,10,12,5];





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
        array[min] = aux;
    }
    }
}

        return array;
}


console.log(selectionSort(array));
