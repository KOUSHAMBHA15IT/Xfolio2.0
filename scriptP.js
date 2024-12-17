

const scroll2 = new LocomotiveScroll({
    el: document.querySelector('#main2'),
    smooth: true
});

function circleMfolo2(){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#mincir2").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMfolo2();