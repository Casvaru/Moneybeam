function formatear(dato) {
    return dato.replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
      });
  }
function count(){
    let totalGlobal = document.getElementById("totalGlobal")

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
    let money = document.getElementById("totalMoney")
    let totalMoney = parseInt(getMoney * 1)     

    let getAwards = document.getElementById("amountCapsule2").value
    let awards = document.getElementById("totalAwards")
    let totalAwards = parseInt(getAwards * 1)

    let getBox = document.getElementById("amountCapsule3").value
    let box = document.getElementById("totalBox")
    let totalBox = parseInt(getBox * 1)

    let getDiff = document.getElementById("amountCapsule4").value
    let diff = document.getElementById("totalDiff")
    let totalDiff = parseInt(getDiff * 1)
    
    let Value1 = parseInt((money100*1000) * amountSection1)
    let Value2 = parseInt((money50*1000) * amountSection2)
    let Value3 = parseInt((money20*1000) * amountSection3)
    let Value4 = parseInt((money10*1000) * amountSection4)
    let Value5 = parseInt((money5*1000) * amountSection5)
    let Value6 = parseInt((money2*1000) * amountSection6)
    let Value7 = parseInt((money1*1000) * amountSection7)
    
    totalSection1.innerHTML = formatear(Value1.toFixed(0))
    totalSection2.innerHTML = formatear(Value2.toFixed(0))
    totalSection3.innerHTML = formatear(Value3.toFixed(0))
    totalSection4.innerHTML = formatear(Value4.toFixed(0))
    totalSection5.innerHTML = formatear(Value5.toFixed(0))
    totalSection6.innerHTML = formatear(Value6.toFixed(0))
    totalSection7.innerHTML = formatear(Value7.toFixed(0))
    moneyFormat = formatear(totalMoney.toFixed(0))
    money.innerHTML = moneyFormat
    awardsFormat = formatear(totalAwards.toFixed(0))
    awards.innerHTML = awardsFormat
    boxFormat = formatear(totalBox.toFixed(0))
    box.innerHTML = boxFormat
    diffFormat = formatear(totalDiff.toFixed(0))
    diff.innerHTML = diffFormat
    
    totalGlobalValue = Intl.NumberFormat('en-US').format((Value1 + Value2 + Value3 + Value4 + Value5 + Value6 + Value7 + totalAwards + totalMoney + totalBox) - totalDiff)
    totalGlobal.innerHTML = totalGlobalValue
}