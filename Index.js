var date1 = Date.now()
const SHA2 = require("sha2");
console.log(SHA2["SHA-224"]("a").toString("base64"))
console.log(Date.now() - date1)
