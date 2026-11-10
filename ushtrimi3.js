let produkti35 = 2;
let cmimi35 = 35;

let produkti24 = 1;
let cmimi24 = 24;

let paraZbritjes = produkti35 * cmimi35 + produkti24 * cmimi24;
let zbritja = paraZbritjes * 0.15;
let pasZbritjes = paraZbritjes - zbritja;

let transportOnline = 4;
let vleraFinale = pasZbritjes + transportOnline;

console.log("Çmimi para zbritjes: " + paraZbritjes + " €");
console.log("Zbritja (15%): " + zbritja + " €");
console.log("Pas zbritjes: " + pasZbritjes + " €");
console.log("Transporti: " + transportOnline + " €");
console.log("Vlera përfundimtare: " + vleraFinale + " €");
