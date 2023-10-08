const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const uppLow =  document.getElementById("u&l")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("spe-chr")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
    
}


const generatePassword = (password = "") => {
    if(uppLow.checked){
        password += getRandomData(upperSet+lowerSet)
    }
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
 

    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("Generate").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// $('#select-all').click(function(event) {   
//     if(this.checked) {
//         // Iterate each checkbox
//         $(':checkbox').each(function() {
//             this.checked = true;                        
//         });
//     } else {
//         $(':checkbox').each(function() {
//             this.checked = false;                       
//         });
//     }
// });