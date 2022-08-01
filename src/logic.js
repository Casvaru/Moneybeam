function count(){
    internationalNumberFormat = new Intl.NumberFormat('en-US')

    let money100 = document.getElementById("valueMoney100").innerHTML
    let totalSection1 = document.getElementById("totalSection1")
    let amountSection1 = document.getElementById("amountSection1").value

    let money50 = document.getElementById("valueMoney50").innerHTML
    let totalSection2 = document.getElementById("totalSection2")
    let amountSection2 = document.getElementById("amountSection2").value

    let money20 = document.getElementById("valueMoney20").innerHTML
    let totalSection3 = document.getElementById("totalSection3")
    let amountSection3 = document.getElementById("amountSection3").value

    let money10 = document.getElementById("valueMoney10").innerHTML
    let totalSection4 = document.getElementById("totalSection4")
    let amountSection4 = document.getElementById("amountSection4").value

    let money5 = document.getElementById("valueMoney5").innerHTML
    let totalSection5 = document.getElementById("totalSection5")
    let amountSection5 = document.getElementById("amountSection5").value

    let money2 = document.getElementById("valueMoney2").innerHTML
    let totalSection6 = document.getElementById("totalSection6")
    let amountSection6 = document.getElementById("amountSection6").value

    let money1 = document.getElementById("valueMoney1").innerHTML
    let totalSection7 = document.getElementById("totalSection7")
    let amountSection7 = document.getElementById("amountSection7").value


    let getMoney = document.getElementById("amountCapsule1").value
    let money = document.getElementById("money")

    let totalMoney = getMoney * 1
    money.innerHTML = totalMoney

    let getAwards = document.getElementById("amountCapsule2").value
    let awards = document.getElementById("awards")

    let totalAwards = getAwards * 1
    awards.innerHTML = totalAwards

    let totalGlobal = document.getElementById("totalGlobal")

    let totalAmountSection1 = money100 * amountSection1
    let totalAmountSection2 = money50 * amountSection2
    let totalAmountSection3 = money20 * amountSection3
    let totalAmountSection4 = money10 * amountSection4
    let totalAmountSection5 = money5 * amountSection5
    let totalAmountSection6 = money2 * amountSection6
    let totalAmountSection7 = money1 * amountSection7
    
    totalSection1.innerHTML = totalAmountSection1
    totalSection2.innerHTML = totalAmountSection2
    totalSection3.innerHTML = totalAmountSection3
    totalSection4.innerHTML = totalAmountSection4
    totalSection5.innerHTML = totalAmountSection5
    totalSection6.innerHTML = totalAmountSection6
    totalSection7.innerHTML = totalAmountSection7

    totalGlobal.innerHTML = totalAmountSection1 + totalAmountSection2 + totalAmountSection3 + totalAmountSection4 + totalAmountSection5 + totalAmountSection6 + totalAmountSection7 + totalMoney + totalAwards

}
let reloadPage = document.getElementById("reload")
    reloadPage.addEventListener("click", () => {location.reload()})
