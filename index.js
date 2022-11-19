
console.log("I like black && white");

//-------------------navLinks------------------

const main = document.getElementById('main')
let clicked = 0;

document.getElementById('s1-link').style.color = "var(--txt-a-focused)"
document.getElementById(`s1-content`).style.display = "block"

for(let j = 1; j<6; j++) {
    document.getElementById(`s${j}-link`).onclick = () => {
        main.style.transform = `translate(-${(j*100)-100}vw)`;

        document.getElementById('s1-link').style.color = "var(--txt-a)"
        document.getElementById('s2-link').style.color = "var(--txt-a)"
        document.getElementById('s3-link').style.color = "var(--txt-a)"
        document.getElementById('s4-link').style.color = "var(--txt-a)"
        document.getElementById('s5-link').style.color = "var(--txt-a)"
        document.getElementById(`s${j}-link`).style.color = "var(--txt-a-focused)"
            clicked += 1;
            document.querySelector('body').style.overflow = "hidden"
            document.getElementById('s1-content').style.display = "block"
            document.getElementById('s2-content').style.display = "block"
            document.getElementById('s3-content').style.display = "block"
            document.getElementById('s4-content').style.display = "block"
            document.getElementById('s5-content').style.display = "block"
            setTimeout(()=>{
                clicked -= 1
                if(clicked === 0){
                    document.querySelector('body').style.overflow = ""
                    document.getElementById('s1-content').style.display = "none"
                    document.getElementById('s2-content').style.display = "none"
                    document.getElementById('s3-content').style.display = "none"
                    document.getElementById('s4-content').style.display = "none"
                    document.getElementById('s5-content').style.display = "none"
                    document.getElementById(`s${j}-content`).style.display = "block"
        }}, 1000)
        
    };

    
}

//------------------navHide--------------------

let navHidden = false

document.getElementById('nav-hide').onclick = ()=> {
    switch (navHidden){
        case false :
            document.querySelector('.nav').style.transform = "translateY(-100%)";
            document.getElementById('nav-hide').style.transform = "translateY(50%)";
            document.querySelector('.nav-hide-img').style.transform = "rotate(180deg)";
            document.querySelectorAll('.sect').forEach(sect => {sect.style.transform = "translateY(-100px)"});
            document.querySelector('.nav').style.opacity = "0.1";
            navHidden = true;
            break;
        case true :
            document.getElementById('nav-hide').style.transform = "translateY(0)";
            document.querySelector('.nav-hide-img').style.transform = "rotate(0)";
            document.querySelector('.nav').style.transform = "translateY(0)";
            document.querySelectorAll('.sect').forEach(sect => {sect.style.transform = "translateY(0)"});
            document.querySelector('.nav').style.opacity = "1";
            navHidden = false;
    }
    
}

document.getElementById('nav-hide').onmouseenter = () => {
    document.querySelector('.nav').style.opacity = '1';
}

document.getElementById('nav-hide').onmouseleave = () => { if(navHidden){
        document.querySelector('.nav').style.opacity = '0.1';
}}

//-----------------workshop----------------

const constract = document.getElementById('construct')
let clr = "black"

document.getElementById('clr-box-black').onclick = () => clr = "black";
document.getElementById('clr-box-white').onclick = () => clr = "white";
document.getElementById('clr-box-red').onclick = () => clr = "red";
document.getElementById('clr-box-yellow').onclick = () => clr = "yellow";
document.getElementById('clr-box-green').onclick = () => clr = "green";
document.getElementById('clr-box-mint').onclick = () => clr = "mint";
document.getElementById('clr-box-l-blue').onclick = () => clr = "l-blue";
document.getElementById('clr-box-blue').onclick = () => clr = "blue";
document.getElementById('clr-box-purple').onclick = () => clr = "purple";
document.getElementById('clr-box-magenta').onclick = () => clr = "magenta";

for (let i = 0; i<400; i++) {
    constract.innerHTML += '<div id="box"></div>'    
}

document.querySelectorAll('#box').forEach(box => {
    box.onclick = ()=> {
        switch(clr){
            case "black":
                box.style.background = "#151515"
                break
            case "white":
                box.style.background = "#fff"
                break
            case "red":
                box.style.background = "#c22"
                break
            case "yellow":
                box.style.background = "#ee2"
                break
            case "green":
                box.style.background = "#2c2"
                break
            case "mint":
                box.style.background = "#2fa"
                break
            case "l-blue":
                box.style.background = "#2ff"
                break
            case "blue":
                box.style.background = "#22c"
                break
            case "purple":
                box.style.background = "#72c"
                break
            case "magenta":
                box.style.background = "#c2c"
                break
        }
    }
});