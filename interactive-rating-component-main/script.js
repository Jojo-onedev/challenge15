let ratingstate = document.querySelector('.ratingstate');
let ratingthank = document.querySelector('.ratingthank');
let point = document.querySelectorAll('.point');
let submitbtn = document.getElementById('submitbtn');
let count = document.querySelector('.count');
let compteur = 0;

point.forEach((mark)=>{
    mark.addEventListener('click',()=>{
        if (!mark.classList.contains('selected')) {
            mark.classList.add('selected');
            compteur++
        }else{
            mark.classList.remove('selected');
            compteur--
        }
        // console.log(compteur);
    });
})


submitbtn.addEventListener('click',()=>{
    ratingstate.style.display='none';
    ratingthank.style.left="50%";
    count.innerHTML=compteur;

})    

