const dna = "GGGCCCAAAATTTTTCCCA";

function replaceToRNA(string) {
    let rna = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "T") {
            rna += "U";
        } else {
            rna += string[i];
        }
    }
    console.log(rna);
}

replaceToRNA(dna);