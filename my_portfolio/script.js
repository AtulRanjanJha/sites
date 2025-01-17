
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
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
  locoScroll();
  
  
  function pin(){
    if(innerWidth > 600){
      gsap.to(".slider",{
        x:"-=100%",
        scrollTrigger:{
          trigger:".page6",
          scroller:".main",
          start:"top 0%",
          end:"top -150%",
          scrub:1,
          pin:true,
          ease:Expo.easeInOut,
        }
      })
    }
  }
  pin()
  
  if(innerWidth > 600){
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
  
  document.addEventListener("DOMContentLoaded",function(){
  
  let tll = gsap.timeline({paused:true});
  tll.to(".menu-overlay",{
    duration:1,
    clipPath:"polygon(0 0,100% 0,100% 100%,0 100%",
    ease:"power2.out"
  })
  tll.from(".menu-link a, .btn",{
    opacity:0,
    y:100,
    stagger: 0.05,
    duration: .75,
    ease:"power1.inout"
  },
  "<",
  )
  tll.to(".bhidio-preview",{
    duration:1,
    height:"200px",
    ease:"power4.inout",
  
  },"<",)
  tll.to(".menu-divider",{
    duration:2,
    width:"100%",
    ease:"power4.out"
  },"<",)
  
  function openmenu(){
    document.querySelector(".menu-overlay").style.pointerEvents = "all"
    tll.play()
  }
  function closemenu(){
    document.querySelector(".menu-overlay").style.pointerEvents = "none"
    tll.reverse()
  }
  document.querySelector(".menu-btn-open").addEventListener("click", function(){
    openmenu()
  })
  document
  .querySelector(".menu-close-btn").addEventListener("click",function(){
    closemenu() 
  })
  tll.reverse()
  
  
  
    const digit1 = document.querySelector(".digit1")
    const digit2 = document.querySelector(".digit2")
    const digit3 = document.querySelector(".digit3")
  
    for(let i = 0; i<2; i++) {
      for(let j = 0; j < 10; j++) {
        const div = document.createElement("div")
        div.className = "num"
        div.textContent = j
        digit3.appendChild(div)
      }
    }
  
    const finalDigit =  document.createElement("div")
    finalDigit.className = "num"
    finalDigit.textContent = "0"
    digit3.appendChild(finalDigit)
  
    function animate(digit, duration,delay=1.5){
      const numHeight = digit.querySelector(".num").clientHeight;
  
      const totalDistance = 
      (digit.querySelectorAll(".num").length -1)* numHeight
      gsap.to(digit,{
        y: -totalDistance,
        duration: duration,
        ease: "power2.inout",
        delay: delay,
    
      })
      }
  
      animate(digit3, 5)
      animate(digit2, 6)
      animate(digit1, 2,5)
  
      gsap.to(".progress-bar",{
        width:"30%",
        duration:2,
        ease: "power4.inOut",
        delay: 7,
      })
      gsap.to(".progress-bar",{
        width: "100%",
        opacity:0,
        duration:2,
        delay:8.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(".pre-loader",{
            display: "none"
          })
        }
      })
  
      gsap.to("#hero-imgs>img",{
        clipPath: `polygon(100% 0%,0% 0%,0% 100%,100% 100%)`,
        duration: 1,
        ease: "power4.inout",
        stagger: 0.25,
        delay: 9.5,
        
      })
      gsap.to(".loader",{
        scale:1.15,
        duration: 5,
        ease: "power4.out",
        delay: 9.5,
        
      })
      gsap.to(".loader",{
        y:"-=110%",
        // opacity:0,
        // scale:0,
        transform:`scaleY(0)`,
        duration: 2,
        ease: Expo.easeInOut,
        delay: 12,      
      })
  
  })
  
  
  
  function clutter(){
    
  var clutter = ""
  document.querySelector(".page1-h1 h1").textContent.split("").forEach(function(e){
      clutter += `<span>${e}</span>`
  })
  
  document.querySelector(".page1-h1 h1").innerHTML = clutter
  
  
  }
  clutter()
  
  
  
  const target = document.querySelectorAll('.itemss-with-text');
  const results = Splitting({ target: target, by: 'chars' });
  
  
  const target1 = document.querySelectorAll('#number');
  const results1 = Splitting({ target: target1, by: 'chars' });
  
  
  const target2 = document.querySelectorAll('.text-right');
  const results2 = Splitting({ target: target2, by: 'chars' });
  
  
  const target3 = document.querySelectorAll('.cut');
  const results3 = Splitting({ target: target3, by: 'chars' });
  
   
  
  Shery.makeMagnet("nav>i,nav>img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  function loadingAnime(){
    
  var tl = gsap.timeline()
  
  
  tl.from("nav>img ",{
      scale:0,
      opacity:0,
      rotate:-1000,
      delay:13.5,
      y:-50,
      duration:.5,
      
    onUpdate:function(){
      // document.querySelector(".loader").style.display = "none"
  
  }
  },"anime2")
  
  tl.to("nav>img",{
    rotate:-3,
    delay:.5,
    duration:.5,
    ease:"elastic.out(1,0.3)",
    
  })
  tl.to("nav",{
    scale:0,
    duration:.5,
    ease:"power4.out",
    scrollTrigger:{
      trigger:"page1",
      scroller:".main",
      start:"top -15%",
      end:"top -18%",
      scrub:2,
      // ease:Expo.easeInOut,
    }
  })
  
  
  
    tl.from("#h1 h1 span",{
      scale:0,
      color:"black",
      fontSize:"5vw",
      stagger:{
        amount:.3
      },
      duration:3,
      ease:Expo.easeInOut,
      delay:-3,
     
  
  })
  
  
  gsap.from("#wrapp h4",{
    y:"+=100%",
    opacity:0,
    ease:"power4",
    delay:13.8
  })
  
  tl.from(".h2-wrap h2",{
    y:70,
    ease:"power4.inout",
    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
      scrub:2,
      ease:Expo.easeInOut,
      
    }
  })
  
  tl.from(".chalo",{
    x:-1500,
    duration:1,
    scrollTrigger:{
      trigger:".chalo",
      scroller:".main",
      start:"top 50%",
      end:"top 35%",
      scrub:1,
      ease:Expo.easeInOut
    }
  })
  tl.from(".content .left h1",{
    fontWeight:"100",
    scrollTrigger:{
      trigger:".chalo",
      scroller:".main",
      start:"top 60%",
      end:"top 40%",
      scrub:1,
      ease:Expo.easeInOut
    }
  })
  
  tl.from(".page3 .a-wrap",{
    width:0,
    scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      start:"top 18%",
      end:"top 17.5%",
      scrub:2,
      ease:Expo.easeInOut,
    }
  })
  
  tl.from(".h6-wrap h6",{
    y:50,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 50%",
      end:"top 47%",
      scrub:2,
      ease:Expo.easeInOut,
    }
  })
  tl.from(".page4>h1",{
    scale:0,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 30%",
      end:"top 27%",
      scrub:2,
      ease:Expo.easeInOut,
    }
  })
  
  tl.from(".anime-patti",{
    width:0,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 15%",
      end:"top 13%",
      scrub:2,
      ease:Expo.easeInOut,
    }
  })
  tl.from(".page4 .a-wrap",{
    width:0,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 15%",
      end:"top 13%",
      scrub:2,
      ease:Expo.easeInOut,
    }
  })
  tl.to("#marquee-1,#marquee-3",{
    left:"0%",
    scrollTrigger:{
      trigger:"#marquee-1",
      scroller:".main",
      start:"top 40%",
      end:"top 0%",
      scrub:2,
      ease:Expo.ease,
    }
  })
  tl.to("#marquee-2,#marquee-4",{
    left:"-18%",
    scrollTrigger:{
      trigger:"#marquee-1",
      scroller:".main",
      start:"top 40%",
      end:"top 0%",
      scrub:2,
      ease:Power4,
    }
  })
  tl.from(".itemss-with-text h1 span .char",{
    fontWeight:"100",
    fontSize:"2vw",
    stagger:.1,
    ease:Expo.easeInOut,
    scrollTrigger:{
      trigger:".marquees",
      scroller:".main",
      start:"top 40%",
      end:"top 5%",
      scrub:2,
    }
  })
  
  tl.to(".marker-wrapper",{
    left:"105%",
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      start:"top 0%",
      end:"top -150%",
      scrub:1,
      ease:Expo.easeInOut,
    }
  })
  tl.to(".marker-wrapper2",{
    left:"0%",
    rotate:720,
    height:"200vw",
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      start:"top 0%",
      end:"top -150%",
      scrub:1,
      ease:Expo.easeInOut,
    }
  })
  gsap.to(".row-2,.row-1",{
    top:"0%",
    ease:"power4.outdent",
    stagger:{
      amount:.5,
    },
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  gsap.to(".brand-name",{
    left:"0%",
    ease:"power4.outdent",
    delay:1.5,
  
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  gsap.from(".lets-talk p",{
    opacity:0,
    ease:"power4.outdent",
    delay:1,
   
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  gsap.from(".text",{
    scale:0,
    ease:"power4.outdent",
    delay:2,
    
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  
  gsap.from(".text",{
    duration:10,
    ease:Linear.easeNone,
    repeat:-5,
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    }
  })
  gsap.from(".box",{
    top:"100%",
    ease:"power4.out",
    delay:1,
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  gsap.to(".footer p",{
    marginLeft:"1vw",
    opacity:1,
    ease:"power4.out",
    delay:1.5,
    stagger:{
      amount:.5,
    },
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  
  gsap.from(".h-stripe",{
    top:"500%",
    ease:"power4.out",
    delay:2,
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  gsap.from(".line",{
    scaleX:0,
    ease:"power4.out",
    delay:1,
    scrollTrigger:{
      trigger:".footer",
      scroller:".main",
      start:"top 50%",
      end:"top 40%",
    
    }
  })
  }
  loadingAnime()
  
  
  
  var cur2 = document.querySelector("cursor-2")
  var cur2 = document.querySelector("cursor-3")
  var left2 = document.querySelector(".bhidio-preview")
  var vid = document.querySelector(".page2-left video")
  var model = document.querySelector(".page4 model-viewer")
  left2.addEventListener("mousemove", function(e){
  
    gsap.to(".over-img",{
      scale: 1.2,
      ease: "expo.inout",
    })
    gsap.to(".page2-left img",{
      opacity: 0,
    })
    vid.play()
   gsap.to(".cursor-2",{
    x: e.clientX - 380,
    y: e.clientY - 35,
    duration:0.5,
    scale:1
     
   })
  })
  
  var model = document.querySelector("model-viewer")
  model.addEventListener("mousemove", function(e){
   gsap.to(".cursor-3",{
    x: e.clientX - 420,
    y: e.clientY - 35,
    duration:0.5,
    scale:1
     
   })
  })
  
  left2.addEventListener("mouseleave", function(e){
    gsap.to(".over-img",{
      scale: 1,
    })
  
    gsap.to(".page2-left img",{
      opacity: 1,
  
    })
  
   gsap.to(".cursor-2",{
    x: e.clientX - 400,
    y: e.clientY - 35,
    duration:0.5,
    scale:0
     
   })
  })
  model.addEventListener("mouseleave", function(e){
   gsap.to(".cursor-3",{
    x: e.clientX - 400,
    y: e.clientY - 35,
    duration:0.5,
    scale:0
     
   })
  })
  
  
  var laz = document.querySelector(".lazrev")
  left2.addEventListener("click", function(){
  laz.play()
    gsap.to(".lazrev",{
      top: "50%",
      borderRadius: "0px",
      transform: `translate(-50%,-50%) scaleX(1) scaleY(1)`,
      duration:1,
      ease: Expo.easeInOut,
    })
  })
  
  
  laz.addEventListener("click", function(){
  laz.pause()
   
    gsap.to(".lazrev",{
      top: "70%",
      borderRadius: "50px",
      transform: `translate(-50%,-50%) scaleX(0.7) scaleY(0)`,
      duration:1,
      ease: Expo.easeInOut,
    })
  })
  
  
  document.getElementById("next").onclick = function(){
    var list = document.querySelectorAll(".item")
    document.querySelector("#slide").appendChild(list[0])
  }
  document.getElementById("prev").onclick = function(){
    var list = document.querySelectorAll(".item")
    document.querySelector("#slide").prepend(list[list.length - 1])
  }
  

  document.addEventListener("DOMContentLoaded", function(){
    const imageSources = [
      'K1.png',
      'bur.png',
      'https://raw.githubusercontent.com/Masterx-AI/Project_Wine_Quality_Investigation/main/wq.jpg',
      'https://i0.wp.com/eos.org/wp-content/uploads/2024/07/wildfire.jpg?fit=1200%2C675&ssl=1',
      'https://analyticsindiamag.com/wp-content/uploads/2020/08/stars-movies-1200x670-1-1024x572.jpg'
    ]
  
    const menuItems = document.querySelectorAll(".menu-item")
  
    menuItems.forEach((item) => {
      const copyElement = item.querySelectorAll(".info , .name , .tag")
  
      copyElement.forEach((div) => {
        const copy = div.querySelector("p")
  
        if(copy){
          const duplicateCopy = document.createElement("p")
          duplicateCopy.textContent = copy.textContent
          div.appendChild(duplicateCopy)
        }
      })
    })
  
    const appendImages = (src) => {
      const pre1 = document.querySelector("#pre-img1")
      const pre2 = document.querySelector("#pre-img2")
  
      const img1 = document.createElement("img")
      const img2 = document.createElement("img")
  
      img1.src = src
      img1.style.clipPath = "polygon(0% 100%, 100% 100%,100% 100%, 0% 100%) "
      img2.src = src
      img2.style.clipPath = "polygon(0% 100%, 100% 100%,100% 100%, 0% 100%) "
    
      pre1.appendChild(img1)
      pre2.appendChild(img2)
    
      gsap.to([img1, img2],{
        clipPath:"polygon(0% 100% ,100% 100%,100% 0%, 0% 0%)",
        duration:1,
        ease:"power3.out",
        onComplete:function(){
          removeExtraImages(pre1)
          removeExtraImages(pre2)
  
        }
      })
    }
    function removeExtraImages(container){
      while(container.children.length > 10){
        container.removeChild(container.firstChild);
      }
    }
    document.querySelectorAll(".menu-item").forEach((item,index) => {
      item.addEventListener("mouseover", () => {
        mouseOverAnimation(item)
        appendImages(imageSources[index])
      })
  
      item.addEventListener("mouseout", () => {
        mouseOutAnimation(item)
      })
    })
  
    const mouseOverAnimation = (elem) =>{
      gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
        top:"-100%",
        duration:.3,
      })
      gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
        top:"-100%",
        duration:.3,
  
      })
    }
    const mouseOutAnimation = (elem) =>{
      gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
        top:"0%",
        duration:.3,
      })
      gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
        top:"100%",
        duration:.3,
  
      })
    }
  document.querySelector(".menu").addEventListener("mouseout",function(){
    gsap.to(".pre-img img",{
      clipPath:"polygon(0% 0%, 100% 0%,100% 0%, 0% 0%)",
      duration:1,
      ease:"power3.out",
    })
  })
    
  document.addEventListener("mousemove",function(e){
    const preview = document.querySelector(".preview")
    // gsap.to(preview,{
    //   x:e.clientX + 300,
    //   y:e.clientY - 400,
    //   duration:1,
    //   ease:"power3.out",
    // })
  
  })
  
  })
  
  
  
  function textanimation(){
  document.querySelectorAll(".itmss").forEach((item)=>{
    item.addEventListener("mouseenter",function(){
      gsap.set(this.querySelectorAll(".word span"),{
        opacity:0,})
        gsap.to(this.querySelectorAll(".word span"),{
          opacity:1,
          duration:.1,
          stagger:{
            from:"random",
            each:.02
          }
          ,ease:"power2.out"
        })
     
    })
  
  item.addEventListener("mouseleave",function(){
    gsap.to(this.querySelectorAll(".word span"),{
      opacity:0,
      duration:.1,
      stagger:{
        from:"random",
        each:.02
      },
      ease:"power2.in"
    })
  })  
  })
  
  }
  textanimation()
  
  
  
  Shery.makeMagnet(".slide" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  let currentScroll = 0;
  let isScrollingDown = true;
  let arrows = document.querySelectorAll(".arrow");
  
  let tween = gsap.to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 8,
    ease: "linear"
  }).totalProgress(0.5);
  
  
  
  