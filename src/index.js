
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix == undefined || matrix.length == 0){
    return []
  }
// function towelSort (matrix) {
  let a = []
  for (let arr of matrix){

    index = matrix.indexOf(arr)

    if (index % 2 == 0){
      a.push(...arr)
    }
    else{
      arr = arr.reverse()
      a.push(...arr)
    }
    
    console.log(arr)
    
  }
  console.log(a)
  return a;
}

// towelSort([
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ],
// ])