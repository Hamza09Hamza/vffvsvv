let openin=false;
const mybutton=document.querySelector('.eventholder')
mybutton.addEventListener('click', () =>{
    if(openin===false){
        mybutton.classList.add('opened');
        openin=true;
        document.getElementsByClassName('iconwebsite')[0].style.transition='all 0.2s'
        document.getElementsByClassName('title')[0].style.transition='all 0.5s'
       document.getElementsByClassName('iconwebsite')[0].src="images/heart-rate(3).png";
       document.getElementsByClassName('iconwebsite')[0].style.zIndex=500;
       document.getElementsByClassName('title')[0].style.color='white';
       document.getElementsByClassName('title')[0].style.zIndex=500;

    }else {
        mybutton.classList.remove('opened');
        openin=false
        document.getElementsByClassName('iconwebsite')[0].style.transition='all 0.2s'
        document.getElementsByClassName('title')[0].style.transition='all 0.5s'
        document.getElementsByClassName('iconwebsite')[0].src="images/heart-rate(1).png";
        document.getElementsByClassName('iconwebsite')[0].style.zIndex=1;
        document.getElementsByClassName('title')[0].style.color='black';
        document.getElementsByClassName('title')[0].style.zIndex=1;
    }
})