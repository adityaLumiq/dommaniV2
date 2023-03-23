const everything = document.getElementById("everything")
const table = document.getElementById("table"); 
const add = document.getElementById("add");
const remove = document.getElementById("remove")
const border = document.getElementById("border")
const randomizer = document.getElementById("color")
const disco = document.getElementById("disco")
const error = document.getElementById("error")
const backgr = document.getElementById("backgr")
const lorde = document.getElementById("lorde")
const sanjay = document.getElementById("sanjay")
const cancel = document.getElementById("cancel")
// console.log(add)
const colorList = ["#155263", "#ff6f3c", "#ff9a3c", "#f76b8a", "#5585b5", "#680747", "#d59bf6", "#c4c1e0", "#42b883", "#347474" ,"#cbf078"]





let BACKGROUND_IMG = ""
let TIMEOUT = false
let GLOBAL_INDEX = -1
let rembuttons = []
let MUSIC = new Audio();
let PROFILE = "cancel"



lorde.addEventListener("click", function(){
    PROFILE = "lorde"
    BACKGROUND_IMG = "url(melodrama.jpg)";
    // backgr.style.backgroundImage=BACKGROUND_IMG
    MUSIC = new Audio('hd.wav');
})
sanjay.addEventListener("click", function(){
    PROFILE = "sanjay"
    MUSIC = new Audio('nahi.wav');
    BACKGROUND_IMG = "url(no-nah.gif)";
    // backgr.style.backgroundImage=BACKGROUND_IMG
})
cancel.addEventListener("click", function(){
    PROFILE = "cancel"
    BACKGROUND_IMG = "";
    backgr.style.backgroundImage=BACKGROUND_IMG
    MUSIC = new Audio('');
})

function removeBG(){
    BACKGROUND_IMG = "";
    backgr.style.backgroundImage=BACKGROUND_IMG
}
add.addEventListener("click",  function(){
    if(GLOBAL_INDEX >= 9){
        console.error("NOOOO")
        error.classList.add("panic")
        error.classList.remove("no-panic")
        return
    }
    MUSIC.play();
    if(PROFILE === "lorde"){
        BACKGROUND_IMG = "url(melodrama.jpg)";
        backgr.style.backgroundImage=BACKGROUND_IMG
        setTimeout(removeBG, 3000)
    }
    if(PROFILE === "sanjay"){
        BACKGROUND_IMG = "url(no-nah.gif)";
        backgr.style.backgroundImage=BACKGROUND_IMG
        setTimeout(removeBG, 2000)
        return
    }
    backgr.style.backgroundImage=BACKGROUND_IMG
    console.log("yo")
    let row = document.createElement("tr")
    let data1 = document.createElement("td")
    data1.setAttribute('contenteditable', 'true') 
    data1.innerText = "Yeah,";
    data1.classList.add("td-no-border");
    data1.classList.add(`${GLOBAL_INDEX}`);
    // console.log(data1.attributes)
    
    let data2 = document.createElement("td")
    data2.setAttribute('contenteditable', 'true') 
    data2.innerText = "Awesome";
    data2.classList.add("td-no-border");
    data2.classList.add(`${GLOBAL_INDEX}`);

    let data3 = document.createElement("td")
    data3.setAttribute('contenteditable', 'true') 
    data3.innerText = "right?";
    data3.classList.add("td-no-border");
    data3.classList.add(`${GLOBAL_INDEX}`);

    let rembutton = document.createElement("button")
    rembutton.innerText = "kill"
    rembutton.classList.add("rembutton")
    rembutton.classList.add("btn")
    rembutton.classList.add(`${GLOBAL_INDEX}`);

    

    // console.log(rembuttons)

    row.append(data1)
    row.append(data2)
    row.append(data3)
    row.append(rembutton)
    table.append(row)
    // console.log(add)
    GLOBAL_INDEX+=1

    rembuttons = document.getElementsByClassName("rembutton")
    
    for(let i=0; i<rembuttons.length; i++){
        let rb = rembuttons[i];
        
        rb.addEventListener("click", function(){
            let ind = (rb.attributes[0].value).slice(-1)
            console.log(ind, "    ", GLOBAL_INDEX)
            if(ind == GLOBAL_INDEX-1){
                console.log("yep")
                deleteLast()
                return
            }
            else{
                let deleteables = document.getElementsByClassName(ind)
                for(let j=0; j<deleteables.length; j++){
                    console.log("dele: ", deleteables[j])
                    deleteables[j].remove()
                }
            }
            // console.log(deleteables)
            rb.remove()
        })
    }
});



function deleteLast(){
    backgr.style.backgroundImage="";
    GLOBAL_INDEX = Math.max(0, GLOBAL_INDEX-1);
    error.classList.add("no-panic")
    error.classList.remove("panic")
    child = table.lastChild
    if(child){
        child.remove()
    }
}


function toggleBorder(){
    // console.log('here')
    data = document.querySelectorAll("td")

    for(i=0; i<data.length;  i++){
        if(data[i].classList.contains('td-border')){
            data[i].classList.remove('td-border')
        }
        else{
            data[i].classList.add('td-border')
        }
    }
}

function alternateBorder(){
    data = document.querySelectorAll("td")

    for(i=0; i<data.length;  i++){
        if(i%2===0){
            if(data[i].classList.contains('td-border')){
                console.log('hura')
                data[i].classList.remove('td-border')
            }
        }
        else{
            data[i].classList.add('td-border')
        }
    }
}


function randomizeColor(){
    data = document.querySelectorAll("td")
    ind = Math.floor(Math.random() * 6)
    for(i=0; i<data.length;  i++){
        data[i].style.backgroundColor = colorList[ind]
    }
}


function recursiveToggle(){
    toggleBorder()
    randomizeColor()


    let timer
    if(TIMEOUT){
        everything.classList.add("everything-disco");
        backgr.classList.add("disco-bg")
        timer = setTimeout(recursiveToggle, 200)
    }
    else{
        if(everything.classList.contains('everything-disco')){
            everything.classList.remove('everything-disco')
        }
        backgr.classList.remove("disco-bg")
        clearTimeout(timer)
    }
    
}
function discoFunc(){
    
    alternateBorder()
    TIMEOUT = !TIMEOUT
    recursiveToggle()
    
}
remove.addEventListener("click", deleteLast)

border.addEventListener("click", toggleBorder)



randomizer.addEventListener("click", randomizeColor)




disco.addEventListener("click", discoFunc)




let colors = ['red','yellow','blue','green','orange'];

setInterval(() => {
    document.body.style.setProperty('--bgColor', colors[0]);
}, 1000);