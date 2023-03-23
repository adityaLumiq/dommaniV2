const table = document.getElementById("table"); 
const add = document.getElementById("add");
const remove = document.getElementById("remove")
const border = document.getElementById("border")
const randomizer = document.getElementById("color")
const disco = document.getElementById("disco")
// console.log(add)



let GLOBAL_INDEX = 1
let rembuttons = []

add.addEventListener("click",  function(){
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
            let deleteables = document.getElementsByClassName(ind)
            for(let j=0; j<deleteables.length; j++){
                console.log("dele: ", deleteables[j])
                deleteables[j].remove()
            }
        
            console.log(deleteables)
            rb.remove()
        })
    }
});









remove.addEventListener("click", function(){
    child = table.lastChild
    if(child){
        child.remove()
    }
})

border.addEventListener("click", function(){
    console.log('here')
    data = document.querySelectorAll("td")

    for(i=0; i<data.length;  i++){
        if(data[i].classList.contains('td-border')){
            data[i].classList.remove('td-border')
        }
        else{
            data[i].classList.add('td-border')
        }
    }
})

colorList = ["#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#b48ead"]

randomizer.addEventListener("click", function(){
    data = document.querySelectorAll("td")
    ind = Math.floor(Math.random() * 6)
    for(i=0; i<data.length;  i++){
        data[i].style.backgroundColor = colorList[ind]
    }
})



