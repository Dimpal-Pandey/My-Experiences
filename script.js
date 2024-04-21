var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
    },150)
}

tl.to("#loader h1",{
    // scale:1.5,
    delay:0.5,
    duration:1,    
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})

tl.to("#loader h1",{
    // scale:1.5,
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})



function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()


var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
var nav = document.querySelector(".navigation")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"   
    blur.style.left = dets.x - 50+"px"
    blur.style.top = dets.y - 50+"px"   
})
nav.addEventListener("mouseenter", function(){
    crsr.style.display = "none";
    blur.style.display = "none";
});

nav.addEventListener("mouseleave", function(){
    crsr.style.display = "block";
    blur.style.display = "block";
});

var tl = gsap.timeline()

tl.from(".main",{
    scrollTrigger:{
        trigger:".main",
        scroller:".main",
        markers:false,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }  
})

tl.from(".navigation",{
    opacity:0,
    delay:3,   
    
})
tl.from(".navigation header",{
    x:-80,
    opacity:0,
    duration:.5,
    delay:.5,
    stagger:.5,
})
tl.from("#nav",{
    x:80,
    opacity:0,
    duration:.5,
    delay:-.5,
    stagger:.5,
})
tl.from(".page1 h1",{
    y:100,
    opacity:0,
    stagger:.5,
    delay:.3,
    duration:.5,  
   
})
tl.from(".page1 p.tpara",{
    x:-100,
    opacity:0,
    stagger:.5,
    delay:.3,
    duration:.5,      
})
tl.from(".page1 p.bpara",{
    x:100,
    opacity:0,
    stagger:.5,
    delay:.1,
    duration:.5,    
})
tl.from(".page2-A",{
    x:100,
    opacity:0,
    stagger:.5,
    delay:1,
    duration:.5,
    // rotate:180,
    scrollTrigger:{
        trigger:".page2-A",
        scroller:".main",
        markers:false,
        start:"top 40%",
        end:"top 60%",
        scrub:2,
    }
})
tl.from(".page2-B",{
    x:-100,
    opacity:0,
    stagger:.5,
    delay:.3,
    duration:.5,
    // rotate:180,
    scrollTrigger:{
        trigger:".page2-B",
        scroller:".main",
        markers:false,
        start:"top 40%",
        end:"top 60%",
        scrub:2,
    }
})



document.getElementById("currentYear").textContent = new Date().getFullYear();