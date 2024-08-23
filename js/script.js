
function btnEncriptar() {
    let mensaje = document.getElementById('ingreseTexto').value;
    let texto = encriptar(mensaje);
    document.getElementById('mensajeFinal').value=texto;
}

function encriptar(texto) { 
  let arreglo = texto.split('');
  let textoCifrado = '';
  arreglo.forEach(element => {
    switch(element) {
      case 'e':
        textoCifrado+='enter';
        break;
      case 'i':
        textoCifrado+='ines';
        break;
      case 'a':
        textoCifrado+='ai';
        break; 
      case 'o':
        textoCifrado+='ober';
        break;
      case 'u':
        textoCifrado+='ufat';
        break;                 
      default:
        textoCifrado+=element;
    }
  });
  return textoCifrado;
}

function btnDesencriptar() {
  let mensaje = document.getElementById('ingreseTexto').value;
  let texto = desencriptar(mensaje);
  document.getElementById('mensajeFinal').value=texto;
}

function desencriptar(mensaje) {
  if(mensaje.search("ai") >= 0 || mensaje.search("enter") >= 0 || mensaje.search("imes") >= 0 || mensaje.search("ober") >= 0 || mensaje.search("ufat") >= 0) {
    let arr = mensaje.split(' ');
    arr.forEach(element => {
      mensaje = mensaje.replaceAll("ai","a");
      mensaje = mensaje.replaceAll("enter","e");
      mensaje = mensaje.replaceAll("imes","i");
      mensaje = mensaje.replaceAll("ober","o");
      mensaje = mensaje.replaceAll("ufat","u");
    });  
  }
  return mensaje;
}
