alert("Aee bhediya aa gya re tu");

console.log("tu ne dekne ke liye ok dabaya");


let num1 = prompt("Ek number le re")
let num2 = prompt("Ek aur number le re")

console.log("tere number string me aae hai or concat ho gae", num1+num2);
console.log("tere number ab int ke tarah sum ho gae gae re", Number.parseInt(num1)+Number.parseInt(num2));


let check = confirm("Kya tu dekhne layak hi gya re")

if(check)
{
    document.write("tu dekne layak go gya re sabash");
    
}
else
{
    console.log("tu tho abhi bacha hai re, jake maa ka dudh phi");
    
}