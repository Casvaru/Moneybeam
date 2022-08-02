function formatear(dato) {
    return dato.replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
      });
  }
function count(){
    let money100 = parseInt(document.getElementById("valueMoney100").innerHTML)
    let totalSection1 = document.getElementById("totalSection1")
    let amountSection1 = document.getElementById("amountSection1").value

    let money50 = parseInt(document.getElementById("valueMoney50").innerHTML)
    let totalSection2 = document.getElementById("totalSection2")
    let amountSection2 = document.getElementById("amountSection2").value

    let money20 = parseInt(document.getElementById("valueMoney20").innerHTML)
    let totalSection3 = document.getElementById("totalSection3")
    let amountSection3 = document.getElementById("amountSection3").value

    let money10 = parseInt(document.getElementById("valueMoney10").innerHTML)
    let totalSection4 = document.getElementById("totalSection4")
    let amountSection4 = document.getElementById("amountSection4").value

    let money5 = parseInt(document.getElementById("valueMoney5").innerHTML)
    let totalSection5 = document.getElementById("totalSection5")
    let amountSection5 = document.getElementById("amountSection5").value

    let money2 = parseInt(document.getElementById("valueMoney2").innerHTML)
    let totalSection6 = document.getElementById("totalSection6")
    let amountSection6 = document.getElementById("amountSection6").value

    let money1 = parseInt(document.getElementById("valueMoney1").innerHTML)
    let totalSection7 = document.getElementById("totalSection7")
    let amountSection7 = document.getElementById("amountSection7").value


    let getMoney = document.getElementById("amountCapsule1").value
    let money = document.getElementById("money")

    let totalMoney = parseInt(getMoney * 1)
    money.innerHTML = totalMoney

    let getAwards = document.getElementById("amountCapsule2").value
    let awards = document.getElementById("awards")

    let totalAwards = parseInt(getAwards * 1)
    awards.innerHTML = totalAwards

    let getBox = document.getElementById("amountCapsule3").value
    let box = document.getElementById("box")

    let totalBox = parseInt(getBox * 1)
    box.innerHTML = totalBox

    let getDiff = document.getElementById("amountCapsule4").value
    let diff = document.getElementById("diff")

    let totalDiff = parseInt(getDiff * 1)
    diff.innerHTML = formatear(totalDiff.toFixed(0))

    let totalGlobal = document.getElementById("totalGlobal")
    
    let totalAmountSection1 = parseInt((money100*1000) * amountSection1)
    let totalAmountSection2 = parseInt((money50*1000) * amountSection2)
    let totalAmountSection3 = parseInt((money20*1000) * amountSection3)
    let totalAmountSection4 = parseInt((money10*1000) * amountSection4)
    let totalAmountSection5 = parseInt((money5*1000) * amountSection5)
    let totalAmountSection6 = parseInt((money2*1000) * amountSection6)
    let totalAmountSection7 = parseInt((money1*1000) * amountSection7)
    
    formatear(totalAmountSection1.toFixed(0))
    formatear(totalAmountSection2.toFixed(0))
    formatear(totalAmountSection3.toFixed(0))
    formatear(totalAmountSection4.toFixed(0))
    formatear(totalAmountSection5.toFixed(0))
    formatear(totalAmountSection6.toFixed(0))
    formatear(totalAmountSection7.toFixed(0))

    
    Value1 = parseInt(totalAmountSection1)
    Value2 = parseInt(totalAmountSection2)
    Value3 = parseInt(totalAmountSection3)
    Value4 = parseInt(totalAmountSection4)
    Value5 = parseInt(totalAmountSection5)
    Value6 = parseInt(totalAmountSection6)
    Value7 = parseInt(totalAmountSection7)
    
    totalSection1.innerHTML = formatear(totalAmountSection1.toFixed(0))
    totalSection2.innerHTML = formatear(totalAmountSection2.toFixed(0))
    totalSection3.innerHTML = formatear(totalAmountSection3.toFixed(0))
    totalSection4.innerHTML = formatear(totalAmountSection4.toFixed(0))
    totalSection5.innerHTML = formatear(totalAmountSection5.toFixed(0))
    totalSection6.innerHTML = formatear(totalAmountSection6.toFixed(0))
    totalSection7.innerHTML = formatear(totalAmountSection7.toFixed(0))
    
    totalGlobalValue = Intl.NumberFormat('en-US').format((Value1 + Value2 + Value3 + Value4 + Value5 + Value6 + Value7 + totalAwards + totalMoney + totalBox) - totalDiff)
    totalGlobal.innerHTML = totalGlobalValue
}

let reloadPage = document.getElementById("reload")
    reloadPage.addEventListener("click", () => {location.reload()})