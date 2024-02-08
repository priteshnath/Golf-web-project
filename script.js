var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-10+"px"
    crsr.style.top = dets.y-10+"px"
    crsrBlur.style.left = dets.x-200+"px"
    crsrBlur.style.top = dets.y-200+"px"

})

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "80px",
    duration : 0.2,
    scrollTrigger:{
        trigger: "#nav",
        scroller : "body",
        // markers:true,
        start : "top -10%",
        end : "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end : "top -80%",
        scrub:2
    }
})

var h4all = document.querySelectorAll("#nav h4")

// h4all.forEach(function(elem){
//     elem.addEventListener("mouseover",function(){
//         crsr.style.scale = 3;
//         crsr.style.border = "0.3px solid #fff";
//         crsr.style.backgroundColor = "transparent" ;
//     })
//     elem.addEventListener("mouseout",function(){
//         crsr.style.scale = 0;
//         crsr.style.border = "0px solid #95c11e";
//         crsr.style.backgroundColor = "#95c11e" ;
//     })
// })

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-100,
    x:-100,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:100,
    x:100,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 100%",
        end:"top 50%",
        scrub:3
    }
})