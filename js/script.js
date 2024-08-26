function botaoEncriptar() {
    const inputTexto = document.querySelector('.input-texto-area1').value;
    const textoCriptografado = criptografarTexto(inputTexto);
    document.querySelector('.input-texto-area2').value = textoCriptografado;
}

function botaoDescriptografar() {
    const inputTexto = document.querySelector('.input-texto-area1').value;
    const textoDescriptografado = descriptografarTexto(inputTexto);
    document.querySelector('.input-texto-area2').value = textoDescriptografado;
}

function copiar() {
    const textoCopiado = document.querySelector('.input-texto-area2');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // Para mobile
    document.execCommand('copy');
    alert('Texto copiado: ' + textoCopiado.value);
}

// substituindo vogais por números
function criptografarTexto(texto) {
    const regras = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
    let textoCriptografado = texto.replace(/[aeiou]/g, letra => regras[letra]);
    return textoCriptografado;
}

// Revertendo os números para vogais
function descriptografarTexto(texto) {
    const regrasInversas = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    let textoDescriptografado = texto.replace(/[12345]/g, numero => regrasInversas[numero]);
    return textoDescriptografado;
}