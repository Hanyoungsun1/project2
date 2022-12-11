let devHeight = window.innerHeight;

window.addEventListener("resize",() => {
    devHeight = window.innerHeight;
})

let contents = document.querySelectorAll("#container>div");
for (let i=0; i<contents.length; i++){
    contents[i].getElementsByClassName.height = devHeight + "px";
}


// 스크롤 움직일 때
let sections = document.querySelectorAll("#container>div>.scroll");

let activation= (index,list) => {
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}

window.addEventListener("scroll", e => {
    let scroll = document.querySelector("html").scrollTop;

    for(let i=0; i<sections.length; i++){
        if(scroll >= i*devHeight && scroll < (i+1)*devHeight){
            activation(i,sections);
        }
    }

   for(let i=0;i<contents.length;i++){
    contents[i].addEventListener('wheel', e => {
        if (e.wheelDelta > 0) { //scroll up
          let prev = e.currentTarget.previousElementSibling.offsetTop;
          console.log(prev);
          window.scroll({
            top: prev,
            left: 0,
            behavior: "smooth"
          });
        }
    })
   } 
})

