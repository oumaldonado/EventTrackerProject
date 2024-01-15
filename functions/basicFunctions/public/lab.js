/*
1 : Write a function named 'reverse' ...  
  
This function will take one argument, a string.  
  
Return the submitted string with the characters in reverse order.  
  
***NOTE*** Do not use the 'reverse' method on the String object, write your own.
*/

/************** Your Solution Here ****************/
function reverse(word) {
  let reversedString = '';
  let wordArr= [...word];


  // Iterate through the characters of the input string in reverse order
  for (let i = wordArr.length - 1; i >= 0; i--) {
    reversedString += wordArr[i];
  }

  return reversedString;
}
/**************************************************/

/*
2 : Write a function named 'palindromeChecker' ...  
  
This function will take one argument, a string.  
  
If the provided string is a palindrome (the same backwards and forwards), return
true, otherwise return false.
*/

/************** Your Solution Here ****************/
function palindromeChecker(word){
	return word === reverse(word);
}

/**************************************************/

/*
3 : Write a function named 'isPrime' ...  
  
This function will take one argument, a whole number.  
  
If the provided number is prime, return true, otherwise, return false.
*/

/************** Your Solution Here ****************/
function isPrime(num ){
	for(let i = 2; i <num ; i++){
		if (num % i === 0){
			return false;

		}
	}
	return true;
}

/**************************************************/

/* 
4 : Write a function named 'computeTax'. 

This function will take one or two arguments.  
  
* The first argument will always be the amount tendered. 

* The second argument, which is optional, could be the tax percentage (as a 
whole number). If no second argument is provided, assume the tax rate is 7.5%.  
  
Once applying the correct amount of tax, return the amount of tax owed.  
*/

/************** Your Solution Here ****************/

function computeTax(tendered, tax = 7.5){
	
	return tendered * tax / 100 ;
}

/**************************************************/
