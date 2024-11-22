function sum(a, b) {
    if (isNaN(a) || isNaN(b)) throw new TypeError("Tipo de dado não permitido");
    return a + b;
}

try {
    // tenta executar o bloco de código
    console.log(sum(2,9));
    console.log(sum(false, 10));
    console.log(sum(undefined, 8));
    console.log(sum(17, 8));
    console.log(sum("um", 33));        
} catch (error) {
    // bloco executado quando ocorre algum erro no "try"
    console.log("Tipo de dado não permitido");
} finally {
    // Sempre é executado independente se houve error ou não
    console.log("Operação encerrada");
}
