/**
 * Created by Wesam on 8/21/2016.
 */


var
    inputButton = document.getElementById('calck'),
    resultDiv = document.getElementById('result');

inputButton.onclick = function () {
    var
        inputWord = document.getElementById('word').value,
        inputChar = document.getElementById('char').value,
        wordSplit,
        count = 0,
        i  ;

    wordSplit = inputWord.split("");
    for ( i =0 ; i < wordSplit.length ; i = i +1 ){
        if( wordSplit[i] === inputChar ){
            count++;
        }
    }

    resultDiv.innerHTML = "האות "+ inputChar +" מופיע "+ count +" פעמים במילה "+ inputWord +" " ;
};
