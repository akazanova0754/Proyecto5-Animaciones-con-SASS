function btn(){
    var btn1 = document.getElementsByClassName('btn-1');
    var btn2 = document.getElementsByClassName('btn-2');
    btn1=Array.from(btn1);
    btn2=Array.from(btn2);
    const state = { deg: 0 };
    preview(btn1,state);
    next(btn2,state);
   
    
}

function preview(btn1,state){
    let cubo= document.getElementById('cube');
    let degMin=1080;
    btn1.forEach(btn => {
        btn.firstChild.addEventListener('click',function(){
            state.deg-=90;
            if(state.deg>degMin){
                state.deg=-90;
            }
            cubo.style.transform=`rotateY(${state.deg}deg)`;
            console.log(state.deg);
            if((state.deg+180) % 360 == 0 && state.deg != 0){
                animacion3();
            }else{
                removeAnimacion3();
            }
        })
    });
}
function next(btn2,state){
    let cubo= document.getElementById('cube');
    let degMax=1080;
    btn2.forEach(btn=>{
        btn.firstChild.addEventListener('click',function(){
            state.deg+=90
            if(state.deg>degMax){
                state.deg=90;
            }
            cubo.style.transform=`rotateY(${state.deg}deg)`;
            console.log(state.deg);
            if((state.deg + 180) % 360 == 0 && state.deg != 0){
                animacion3();
            }else{
                removeAnimacion3();
            }
        });
    });
}
function animacion3(){
    let texto= document.getElementsByClassName('text-1');
    texto=Array.from(texto)[0]
    texto.classList.add('moveScene');
    texto.classList.add('typingEffect');
}
function removeAnimacion3(){
    let texto= document.getElementsByClassName('text-1');
    texto=Array.from(texto)[0]
    texto.classList.remove('moveScene');
    texto.classList.remove('typingEffect');
}
