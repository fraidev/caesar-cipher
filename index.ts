type Operation = "sum" | "sub";

const modulos = (a: number, b: number) => ((a % b) + b) % b;

function shift(input: string, shiftCount: number, operation: Operation) {
  return input
    .toUpperCase()
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0) - 65;
      const shifted =
        operation === "sum" ? code + shiftCount : code - shiftCount;
      return String.fromCharCode(modulos(shifted, 26) + 65);
    })
    .join("");
}

function encrypt(input: string) {
  return shift(input, 3, "sum");
}

function decrypt(input: string) {
  return shift(input, 3, "sub");
}

console.log(encrypt("abc")); // DEF
console.log(encrypt("xyz")); //	ABC
console.log(decrypt("abc")); //	XYZ
console.log(decrypt("xyz")); //	UVW
