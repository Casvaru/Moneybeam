let btnReset1 = document.getElementById("reset1")
let input1 = document.getElementById("amountCapsule1")
    btnReset1.addEventListener("click", ()=>{
        input1.value = ""
        count()
})
let btnReset2 = document.getElementById("reset2")
let input2 = document.getElementById("amountCapsule2")
    btnReset2.addEventListener("click", ()=>{
        input2.value = ""
        count()
})
let btnReset3 = document.getElementById("reset3")
let input3 = document.getElementById("amountCapsule3")
    btnReset3.addEventListener("click", ()=>{
        input3.value = ""
        count()
})
let btnReset4 = document.getElementById("reset4")
let input4 = document.getElementById("amountCapsule4")
    btnReset4.addEventListener("click", ()=>{
        input4.value = ""
        count()
})

let reloadPage = document.getElementById("reload")
    reloadPage.addEventListener("click", () => {location.reload()})
