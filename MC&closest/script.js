let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
// To check if element matches the given CSS selector

console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))
//To look for the nearest ancestor that matches the given CSS selector. 
//the element itself is also checked

console.log(id1.contains(sp1));
console.log(id1.contains(sp1));