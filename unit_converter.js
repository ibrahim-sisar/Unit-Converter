const length=document.getElementById('length')
const weight=document.getElementById('weight')
const Temperature=document.getElementById('Temperature')
const select=document.getElementById('Unit')
const select2=document.getElementById('Unit2')
const but=document.getElementById('but')
const in1=document.getElementById('in1')
const hid=document.getElementsByClassName('hid')
const had=document.getElementsByClassName('had')

let page='length'
let lengthlist=[
    'meters',
    'kilometers',
    'feet',
    'miles',
    
]
let weightlist=[
    'grams',
    'kilograms',
    'pounds',
    'ounces'
]
let Temperaturelist=[
    'celsius',
    'kelvin',
    'fahrenheit',
]


let data=''   
let data2=''   
for ( let e in lengthlist){

data += `<option value="${lengthlist[e]}" class="option">${lengthlist[e]}</option>`
data2 += `<option value="${lengthlist[e]}" class="option">${lengthlist[e]}</option>`
}
select.innerHTML=data
select2.innerHTML=data2

length.onclick=function(){
    console.log('length')
    let data=''   
    let data2=''   
for ( let e in lengthlist){

    data += `<option value="${lengthlist[e]}" class="option">${lengthlist[e]}</option>`
    data2 += `<option value="${lengthlist[e]}" class="option">${lengthlist[e]}</option>`
}
select.innerHTML=data
select2.innerHTML=data2
page='length'
}

weight.onclick=function(){
    console.log('weight')
    let data=''   
    let data2=''   
for ( let e in weightlist){

    data += `<option value="${weightlist[e]}" class="option">${weightlist[e]}</option>`
    data2 += `<option value="${weightlist[e]}" class="option">${weightlist[e]}</option>`
}
select.innerHTML=data
select2.innerHTML=data2
page='weight'
}
Temperature.onclick=function(){
    console.log('Temperature')
    let data=''   
    let data2=''   
for ( let e in Temperaturelist){

    data += `<option value="${Temperaturelist[e]}" class="option">${Temperaturelist[e]}</option>`
    data2 += `<option value="${Temperaturelist[e]}" class="option">${Temperaturelist[e]}</option>`
}
select.innerHTML=data
select2.innerHTML=data2
page='Temperature'

}

    

function convertLength(value, fromUnit, toUnit) {
    const lengthUnits = {
        'meters': 1,
        'kilometers': 0.001,
        'feet': 3.28084,
        'miles': 0.000621371
    };
    const valueInMeters = value / lengthUnits[fromUnit];
    return valueInMeters * lengthUnits[toUnit];
}
function convertWeight(value, fromUnit, toUnit) {
    const weightUnits = {
        'grams': 1,
        'kilograms': 0.001,
        'pounds': 0.00220462,
        'ounces': 0.035274
    };
    const valueInGrams = value / weightUnits[fromUnit];
    return valueInGrams * weightUnits[toUnit];
}
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;

    let celsiusValue;
    if (fromUnit === 'celsius') {
        celsiusValue = value;
    } else if (fromUnit === 'fahrenheit') {
        celsiusValue = (value - 32) * 5 / 9;
    } else if (fromUnit === 'kelvin') {
        celsiusValue = value - 273.15;
    }

    if (toUnit === 'celsius') return celsiusValue;
    if (toUnit === 'fahrenheit') return celsiusValue * 9 / 5 + 32;
    if (toUnit === 'kelvin') return celsiusValue + 273.15;
}

but.onclick=function(){
    
    for(let i = 0; i < hid.length; i++){
            hid[i].style.display='none'
    
    }
    for(let i = 0; i < had.length; i++){
        had[i].style.display='block'

}
    unitfrom=select.value
    unitto=select2.value
    value2=in1.value


    if (page == 'length'){
  
        had[1].innerHTML=`${value2} ${unitfrom} =  ${convertLength(value2,unitfrom,unitto)} ${unitto}`
    
        
    }else if(page == 'weight'){
        had[1].innerHTML=`${value2} ${unitfrom} =  ${convertWeight(value2,unitfrom,unitto)} ${unitto}`
    }else if(page == 'Temperature'){
        had[1].innerHTML=`${value2} ${unitfrom} =  ${convertTemperature(value2,unitfrom,unitto)} ${unitto}`
    }
   
}
had[2].onclick=function(){
    for(let i = 0; i < had.length; i++){
        had[i].style.display='none'
    }
    for(let i = 0; i < hid.length; i++){
            hid[i].style.display='block'
    
    }

}
