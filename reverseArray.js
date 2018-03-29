//Program to reverse an array and return the reversed array in a new array
function reverseArray(arrayValue)
{
  let revArr =[], val=0;
  for(let i=0;i<=arrayValue.length+1;i++)
  {
    val=arrayValue.pop();
    revArr.push(val);
  }
  return revArr;
}

//Program to reverse an array in the same binding as the original array and return it
function reverseArrayInPlace(arrayValue)
{
  let l=arrayValue.length, val=0;
  for(let i=0;i<(l/2);i++)
  {
    val=arrayValue[i];
    arrayValue[i]=arrayValue[l-i-1];
    arrayValue[l-i-1]=val;
  }
  return arrayValue;
}
  

console.log(reverseArray(["A", "B", "C"]));
// Output → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// Output → [5, 4, 3, 2, 1]
