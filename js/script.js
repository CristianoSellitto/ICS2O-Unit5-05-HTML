// Cristiano
// ICS2O-Unit5-05-HTML
// May 4 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-HTML/sw.js", {
    scope: "/ICS2O-Unit5-05-HTML/",
  })
}

/**
 * Finds if the triangle is equilateral, isosceles, or scalene depending on the lengths the user input.
 */
function onButtonClick() {
  const side1 = document.getElementById("side1").value
  const side2 = document.getElementById("side2").value
  const side3 = document.getElementById("side3").value

  if (side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 == side2 && side2 == side3) {
    document.getElementById("result").innerHTML = "<h5>This triangle is equilateral.</h5>"
    } else if (side1 == side2 && side2 != side3 || side2 == side3 && side3 != side1 || side1 == side3 && side3 != side2) {
      document.getElementById("result").innerHTML = "<h5>This triangle is isosceles.</h5>"
    } else {
      document.getElementById("result").innerHTML = "<h5>This triangle is scalene.</h5>"
    }
  } else {
    document.getElementById("result").innerHTML = "<h5>Please enter valid numbers.</h5>"
  }
}
