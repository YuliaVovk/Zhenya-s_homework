const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const button = document.querySelector("button");

// Level 1
// button.addEventListener("click", function () {
//   const val1 = Number(input1.value);
//   const val2 = Number(input2.value);
//   const val3 = Number(input3.value);

//   if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
//     console.log("Not a number value was detected. Triangle cannot be created");
//   } else if (val2 + val1 < val3 || val3 + val1 < val2 || val2 + val3 < val1) {
//     console.log("Triangle is impossible to create");
//   } else if (val1 === val2 && val2 === val3) {
//     console.log("Rovnostoronniy");
//   } else if (val1 === val2 || val1 === val3 || val2 === val3) {
//     console.log("Rovnobedrenniy");
//   } else {
//     console.log("Obichniy");
//   }
// });

// level2
button.addEventListener("click", function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const val3 = Number(input3.value);

  if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
    console.log("Not a number value was detected. Triangle cannot be created");
  } else if (val2 + val1 < val3 || val3 + val1 < val2 || val2 + val3 < val1) {
    console.log("Triangle is impossible to create");
  } else if (val1 === val2 && val2 === val3) {
    console.log("Rovnostoronniy");
  } else if (val1 === val2 || val1 === val3 || val2 === val3) {
    console.log("Rovnobedrenniy");
  } else {
    let max;
    let mid;
    let min;

    if (val1 > val2 && val1 > val3) {
      max = val1;
    } else if (val2 > val1 && val2 > val3) {
      max = val2;
    } else {
      max = val3;
    }

    if (val1 < val2 && val1 < val3) {
      min = val1;
    } else if (val2 < val1 && val2 < val3) {
      min = val2;
    } else {
      min = val3;
    }

    if (min < val1 && val1 < max) {
      mid = val1;
    } else if (min < val2 && val2 < max) {
      mid = val2;
    } else {
      mid = val3;
    }
    if (min % 3 === 0 && mid % 4 === 0 && max % 5 === 0) {
      console.log("Its Egyptian triangle");
    } else {
      console.log("Obichniy");
    }
  }
});
