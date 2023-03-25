let cel_val=document.querySelector('#celsius >input')
let fah_val=document.querySelector('#fahrenhite >input')
let kel_val=document.querySelector('#kelvin >input')
let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100;
}
cel_val.addEventListener('input',function(){
    let cel_tem=parseFloat(cel_val.value)
    let far_tem=(cel_tem*(9/5))+32
    let kel_tem=cel_tem+273
    fah_val.value=roundNumber(far_tem)
    kel_val.value=roundNumber(kel_tem)
})
fah_val.addEventListener('input',function(){
    let far_tem=parseFloat(fah_val.value);
    let cel_tem=(far_tem-32)*(5/9)
    let kel_tem=(far_tem-32)*(5/9)+273
    cel_val.value=roundNumber(cel_tem)
    kel_val.value=roundNumber(kel_tem)
})
kel_val.addEventListener('input',function(){
    let kel_tem=parseFloat(kel_val.value);
    let cel_tem=kel_tem-273.15
    let far_tem=(kel_tem-273.15)*(9/5)+32
    cel_val.value=roundNumber(cel_tem)
    fah_val.value=roundNumber(far_tem)
})
btn.addEventListener('click',()=>{
    cel_val.value=""
    fah_val.value=""
    kel_val.value=""
})