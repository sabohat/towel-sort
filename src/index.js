/* We go throught every array and add its contents to our new array with REST operator (...) 
Notice: if array in the matrix has an odd index, it should be reversed before pushing into new array*/

module.exports = function towelSort (matrix) {

  //return empty array if the input is invalid
  if (matrix == undefined || matrix.length == 0){
    return []
  }
  
  //declare a new array to store values later on
  let newArr= []
  for (let arr of matrix){

    index = matrix.indexOf(arr)
    //index - even, then add contents of arr directly
    if (index % 2 == 0){
      newArr.push(...arr)
    }
    //index - odd, then add contents of arr after reversing
    else{
      arr = arr.reverse()
      newArr.push(...arr)
    }
  }
  //our shiny new array here, Yayy!
  return newArr;
}