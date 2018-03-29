//Program to print a chess board

let size=0, hash="#", blank=" ", str=" ";
size=prompt("What is the size of the chess board?");
for(let lineCount=0;lineCount<size;lineCount++)
{
  for(let charCount=0; charCount<size/2; charCount++)
  {
    if( lineCount%2 == 0)
    {
      str+=blank;
      str+=hash;
    }
    else
    {
      str+=hash;
      str+=blank;
    }
  }
  console.log(str, "\n");
  str=" ";
}
