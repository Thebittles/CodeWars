//https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript

function distanceBetweenPoints(a, b) {
   // 𝑑=(𝑥2−𝑥1)2+(𝑦2−𝑦1)2
    Math.hypot(a.x - b.x, a.y - b.y)
  }