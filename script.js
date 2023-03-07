/*window.addEventListener('load',()=>{
    console.log('le site  charge')
})

window.addEventListener('DOMContentLoaded',()=>{
    console.log('le site est en train de charger')
})*/
const btn = document.getElementById('ajout-pa');
const compteur = document.getElementById("compteur");

/*let nombreDeClic = 0;

btn.addEventListener('click',()=>{

   compteur.textContent = nombreDeClic++;
})*/
let montantTotalValue = 0;

for (let i = 0 ; i< btn.length; i++)
{
  btn[i].addEventListener('click',function (){

     /*if (i === 0){
        montantTotalValue += 10

     }
     /!*else if (i === 1) {
        montantTotalValue += 20;
     }*!/*/
     compteur.textContent = montantTotalValue ;
  });
}
