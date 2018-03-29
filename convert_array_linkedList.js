// Program to convert Array to Linked List
function arrayToList(arr)
{
  var list=null;
  
  for(let i=0; i<arr.length; i++)
  {
    list = {value: arr[i], rest:list};
  }
  return list;
}

console.log(arrayToList([10, 20]));
// Output → {value: 10, rest: {value: 20, rest: null}}


//Program to convert Linked List to Array
function listToArray(list)
{
  var arr=[];
  
  while(list!=null)
  {
    arr.unshift(list.value);
    list=list.rest;
  }
  
  return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// Output → [10, 20, 30]


//Program to prepend a value to a linked list
function prepend(val, list)
{
  var newList = null;
  
  newList = {value:val, rest:list};
  
  return newList;
  
}

console.log(prepend(10, prepend(20, null)));
//Output → {value: 10, rest: {value: 20, rest: null}}


//Program to find the position of an element in a linked list
function nth(list, pos)
{ 
  let countPos=0;
  
  while(list!=null)
  {
    if(countPos==pos)
      return list.value
    else
    {
      countPos++;
      list=list.rest;
    }
  }
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// Output → 20
