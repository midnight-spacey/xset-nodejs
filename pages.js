// this code gets an award for being the best code EVER. /j
function musicmenu() {
    const musicmenu = document.getElementById('musicmenu')
    const arrowthing = document.getElementById('toggleicon')
    if ((musicmenu.style.top) === "150%"){
        musicmenu.style.top = "50%"
        arrowthing.src = "down.svg"
    }
    else {
        musicmenu.style.top = "150%"
        arrowthing.src = "up.svg"
    }
}
function leavethefunctionasfrogiesarcade() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[0]
    const reader = document.getElementsByClassName('info')[0]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[0]
    box.style.left = "150%"
    musicbar.style.opacity = "0"
    musicbar.style.pointerEvents = "none"
    extrathingonthemusicbar.style.opacity = "0"
    extrathingonthemusicbar.style.pointerEvents = "none"
    canvas.style.opacity = "0"
    fade.style.opacity = "1"
    setTimeout(function(){
        title.style.left = "0"
        reader.style.left = "0"
        fade.style.opacity = "0"
        pagestuffs.style.opacity = "1"
    }, 1700)
}
function gobacktothefunctionfromfrogiesarcade() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[0]
    const reader = document.getElementsByClassName('info')[0]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[0]
    title.style.left = "-150%"
    reader.style.left = "-150%"
    fade.style.opacity = "1"
    setTimeout(function(){
        box.style.left = "50%"
        musicbar.style.opacity = "1"
        musicbar.style.pointerEvents = null
        extrathingonthemusicbar.style.opacity = "1"
        extrathingonthemusicbar.style.pointerEvents = null
        canvas.style.opacity = "1"
        fade.style.opacity = "0"
        pagestuffs.style.opacity = "0"
    }, 1700)
}
function leavethefunctionasnowggfun() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[1]
    const reader = document.getElementsByClassName('info')[1]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[1]
    document.querySelectorAll("a")[8].innerText = "<--- back"
    box.style.left = "-150%"
    musicbar.style.opacity = "0"
    musicbar.style.pointerEvents = "none"
    extrathingonthemusicbar.style.opacity = "0"
    extrathingonthemusicbar.style.pointerEvents = "none"
    canvas.style.opacity = "0"
    fade.style.opacity = "1"
    setTimeout(function(){
        title.style.left = "0"
        reader.style.left = "0"
        fade.style.opacity = "0"
        pagestuffs.style.opacity = "1"
    }, 1700)
}
function gobacktothefunctionfromnowggfun() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[1]
    const reader = document.getElementsByClassName('info')[1]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[1]
    title.style.left = "150%"
    reader.style.left = "150%"
    fade.style.opacity = "1"
    setTimeout(function(){
        box.style.left = "50%"
        musicbar.style.opacity = "1"
        musicbar.style.pointerEvents = null
        extrathingonthemusicbar.style.opacity = "1"
        extrathingonthemusicbar.style.pointerEvents = null
        canvas.style.opacity = "1"
        fade.style.opacity = "0"
        pagestuffs.style.opacity = "0"
    }, 1700)
}
function leavethefunctionasxenamc() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[2]
    const reader = document.getElementsByClassName('info')[2]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[2]
    box.style.top = "-150%"
    musicbar.style.opacity = "0"
    musicbar.style.pointerEvents = "none"
    extrathingonthemusicbar.style.opacity = "0"
    extrathingonthemusicbar.style.pointerEvents = "none"
    canvas.style.opacity = "0"
    fade.style.opacity = "1"
    setTimeout(function(){
        title.style.top = "0"
        reader.style.top = "20%"
        fade.style.opacity = "0"
        pagestuffs.style.opacity = "1"
    }, 1700)
}
function gobacktothefunctionfromxenamc() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[2]
    const reader = document.getElementsByClassName('info')[2]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[2]
    title.style.top = "150%"
    reader.style.top = "150%"
    fade.style.opacity = "1"
    setTimeout(function(){
        box.style.top = "50%"
        musicbar.style.opacity = "1"
        musicbar.style.pointerEvents = null
        extrathingonthemusicbar.style.opacity = "1"
        extrathingonthemusicbar.style.pointerEvents = null
        canvas.style.opacity = "1"
        fade.style.opacity = "0"
        pagestuffs.style.opacity = "0"
    }, 1700)
}
