function split(wholeArray) {
  const splitPoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, splitPoint);
  const secondHalf = wholeArray.slice(splitPoint);

  return [firstHalf, secondHalf];
}

function merge (arr1, arr2 ){
  let newArray = [];

  arr1.forEach(function(num, i){
    if(num > arr2[i]){
      newArray.push(arr2[i]);
      newArray.push(num);
    }else{
      newArray.push(num);
      newArray.push(arr2[i]);
    }
  })
  return newArray;
}



// let extra =


arr1 = arr1 >= arr2 ? arr2: arr1;
//   let longArr = arr1 >= arr2 ? arr1: arr2;
