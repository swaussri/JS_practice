//Program to print a triangle with hashes

let size=prompt("Number of lines to be printed?");

let hash = "#";
for(let i=0; i<size; i++)
{
  console.log(hash + "\n");
  hash+="#";
}
