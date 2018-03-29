//Program to compare two data structures and return true if they are the same and return false if they are not

function deepEqual(obj1, obj2)
{
  if (obj1 === obj2)
    return true;  
  else if((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null))
  {    
    if(Object.keys(obj1).length != Object.keys(obj2).length)
      return false;  
    for(var prop in obj1)
    {
       if(obj2.hasOwnProperty(prop))
       {        
          if(! deepEqual(obj1[prop], obj2[prop]))
            return false;
       }      
       else
         return false;
     }    
     return true;    
  }    
  else
    return false;    
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// Output → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// Output → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// Output → true
