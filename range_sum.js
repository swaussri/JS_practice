//Program to print a range of numbers and find their sum

function range(start, end, step)
{
  if(step!=1)
    step=1;
  
  let arr=[];
  
  if (start>end)
    for(let i=start; i>=end; i-=step)
      arr.push(i);
  else
    for(let i=start; i<=end; i+=step)
      arr.push(i);
  return arr;
}

function sum(arr)
{
  let tot=0;
  for(let i=0; i<=arr.length; i++)
    tot+=i;
  return tot;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
