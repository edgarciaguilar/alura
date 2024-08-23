let mensaje = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

if(mensaje.search("ai") >= 0 || mensaje.search("enter") >= 0 || mensaje.search("imes") >= 0 || mensaje.search("ober") >= 0 || mensaje.search("ufat") >= 0) {
  let arr = mensaje.split(' ');
  arr.forEach(element => {
    mensaje = mensaje.replaceAll("ai","a");
    mensaje = mensaje.replaceAll("enter","e");
    mensaje = mensaje.replaceAll("imes","i");
    mensaje = mensaje.replaceAll("ober","o");
    mensaje = mensaje.replaceAll("ufat","u");
  });
  console.log(mensaje);
}
else {
  console.log(mensaje);
}