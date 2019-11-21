//Code for the Example given
    function frankenSplice(arr1, arr2, n) {
        var newArray = [];
        for (var i=0; i<arr2.length/2;i++){
          newArray.splice(0+i,0,arr2.slice(0,n)[i]);
        }
        for (i=0; i<arr1.length;i++){
          var item = arr1[i];
          newArray.splice(n+i,0,item);
        }
        for (var i=0; i<arr2.length/2;i++){
          newArray.splice(newArray.length+i, 0, arr2.slice(n,arr2.length)[i]);
        }
        return newArray;
      }
      
      frankenSplice([1, 2, 3], [4, 5], 1);

      //What should look like when you run it.
      //Output:
      [Array(5) [ 4, 1, 2, 3, 5 ]



      //SliceAndDice Trying out new way
      function SliceAndDice(arr1, arr2, n) {
        var newArray = [];
        for (var i=0; i<arr2.length/2;i++){
          newArray.splice(0+i,0,arr2.slice(0,n)[i]);
        }
        for (i=0; i<arr1.length;i++){
          var item = arr1[i];
          newArray.splice(n+i,0,item);
        }
        for (var i=0; i<arr2.length/2;i++){
          newArray.splice(newArray.length+i, 0, arr2.slice(n,arr2.length)[i]);
        }
        return newArray;
      }
      
      SliceAndDice([1, 2, 3], [4, 5, 6, 7, 8, 9], 1);

      //What should look like when you run it.
      //Output:
      Array(9) [ 4, 1, 2, 3, undefined, undefined, 5, 6, 7 ]