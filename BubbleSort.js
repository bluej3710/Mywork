//"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
function bubble_Sort(a) //I couldn't get this to work & realized I needed to put an (a) if using another letter won't be able to find location in the console.
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++) //I had to use w3 schools & go over for loop & use the correct syntax
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([13, 33, 7, 327, 123, 17, 98,])); //had to figure syntax & I forgot to put my semicolons ( out side of [])