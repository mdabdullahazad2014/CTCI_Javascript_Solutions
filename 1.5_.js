/*
 *  Write a method to replace all spaces in a string with ‘%20’.
 */

function replaceString(data){
    
    var charArray = data.split("");
    
    for(var i=0 ; i < data.length; i++)
    {
      charArray[i] = charArray[i].replace(' ', '%20');
    }
    console.log(charArray.join(""))
}

replaceString("A AD ");