const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numeralsObj = {
  thousands: { 
    loc: 3,
    letters: ["M", "V̅", "X̅"]
  },
  hundreds: {
    loc: 2,
    letters: ["C", "D", "M"]
  },
  tens: {
    loc: 1,
    letters: ["X", "L", "C"]
  },
  singles: {
    loc: 0,
    letters: ["I", "V", "X"]
  } 
}

function convertor(dLoc, numSet) {
  let arNu = numberInput.value;
  let arnuArray = arNu.split("");
  const length = arnuArray.length;
  const revArr = arnuArray.reverse();
  const digit = Number(revArr[dLoc]);
  // does the digit exist?
  if (digit) {
    // if so convert to a roman numeral
    if (digit <= 3) {
      return numSet[0].repeat(digit);
    } else if (digit === 4) {
      return numSet[0] + numSet[1];
    } else if (digit <= 8) {
      return numSet[1] + numSet[0].repeat(digit - 5);
    } else if (digit === 9) {
      return numSet[0] + numSet[2];
    }
  } else {
    return "";
  }
};

function concatenator() {
  let result = [];
  for (const key in numeralsObj) {
    result.push(convertor(numeralsObj[key].loc, numeralsObj[key].letters));
  }
  return result.join("");
};

convertButton.addEventListener("click", () => {
  let numVal = numberInput.value;
  if (isNaN(numVal) || numVal === "") {
    output.innerText = "Please enter a valid number";
  } else if (numVal <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numVal >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = concatenator();
  };
});
