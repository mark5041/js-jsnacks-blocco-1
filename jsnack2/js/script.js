let i = 0;
let myArray = ["Gino Pippo", "Ugo Pannacotta", "Bruno Bucciaratti", "Giorno Giovanna", "Gianfranco Calvo"];
let find = false;
let result = "non sei invitato";

const user = prompt("inserisci nome");
const surname = prompt("inserisci cognome");
const person = user + ' ' + surname;

// while(i < myArray.length - 1 || find != true)
// {
//     if(myArray[i] == person)
//     {
//         find = true;
//         result = "puoi entrare";
//     }
//     i++;
// }

for(let x = 0; x < myArray.length - 1; x++)
{
    if(myArray[x] == person)
    {
        result = "puoi entrare";
    }
}

alert(result)