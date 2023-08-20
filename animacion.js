function btn(){
    var btn1 = document.getElementsByClassName('btn-1');
    var btn2 = document.getElementsByClassName('btn-2');
    console.log(btn1);
    btn1=Array.from(btn1);
    
    preview(btn1);
}

function preview(btn1){
    let cubo= document.getElementById('cube');
    let deg='0';
    let degMax='1080';
    let degMin='-1080';

    let c2=document.getElementById('c-2');
    let c3=document.getElementById('c-3');
    let c4=document.getElementById('c-4');
    let c5=document.getElementById('c-5');
    cubo.style.transform="rotateY(180deg)";
    

    for(item in btn1){
        btn1[item].addEventListener('click',function(){
            let style=window.getComputedStyle(cubo);
            let transform= style.getPropertyValue('transform');
            console.log(transform);
            switch(transform){
                case "matrix(1, 0, 0, 1, 0, 0)":
                    var data=c2.getAttribute('data');
                    cubo.style.transform="rotateY(0deg)";
                    if(data=="360"){
                        c5.setAttribute('data', '-90');
                        console.log("aqui");
                        cubo.style.transform="rotateY(-90deg)";
                    }else{
                        cubo.style.transform="rotateY(0deg)";
                        c2.setAttribute('data','360');
                        c5.setAttribute('data','-90');
                        console.log("dsadasdas");
                        cubo.style.transform="rotateY(-90deg)";
                    }
                    break;
                //90deg y -270deg cara(4)
                case "matrix3d(0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1)":
                    var data=c3.getAttribute('data');
                    if(data=="90"){

                        cubo.style.transform="rotateY(0deg)";
                        console.log("2");
                    }else{
                        c3.setAttribute('data','90');
                        c2.setAttribute('data','-360');
                        console.log("hola");
                        cubo.style.transform="rotateY(-360deg)";
                    }
                    break;


                //270deg y -90deg cara(2)
                case "matrix3d(0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1)":
                    var data=c5.getAttribute('data');
                    if(data=="270"){
                        cubo.style.transform="rotateY(180deg)";
                    }else{
                        c5.setAttribute('data','270');
                        c4.setAttribute('data','-180');
                        cubo.style.transform="rotateY(-180deg)";
                    }
                    break;
                //180deg y -180deg cara(3)
                case "matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)":
                    var data=c4.getAttribute('data');
                    if(data=="180"){
                        c3.setAttribute('data','90');
                        cubo.style.transform="rotateY(90deg)";
                    }else{
                        console.log('entro aqui -180');
                        c4.setAttribute('data','180');
                        c3.setAttribute('data','-270');
                        cubo.style.transform="rotateY(-270deg)";
                    }
                    
                    
                    break;
                //360deg y -360deg
                case "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)":
                    
                    break;
            }
            
        });
        
    }
}