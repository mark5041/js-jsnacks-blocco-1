let i = 0;
let result = 0;

// while(i < 10)
// {
//     let number = parseFloat(prompt("inserisci un numero"));
//     if(isNaN(number))
//     {
//         i--;
//     }
//     else
//     {
//         result += number;
//         
//     }
//     i++
//     
// }

for(let x = 0; x < 10; x++)
{
    let number = parseFloat(prompt("inserisci un numero"));
    if(isNaN(number))
    {
        x--;
    }
    else
    {
        result += number;
    }
}

alert(result);