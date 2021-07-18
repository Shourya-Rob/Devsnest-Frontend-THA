  
let cli=document.querySelector('.cli');
let hov=document.querySelector('.hov');
// let cli=document.querySelector('.cli');
// let cli=document.querySelector('.cli');

cli.addEventListener('click',()=>{
    cli.innerHTML="clicked.";
})
hov.addEventListener('mouseover',()=>{
    hov.innerHTML="Its a whole another dimension.";
})
hov.addEventListener('mouseout',()=>{
    hov.innerHTML="Hover Me";
})
cli.addEventListener('click',()=>{
    cli.innerHTML="clicked";
})