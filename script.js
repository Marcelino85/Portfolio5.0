function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  // Pegar a tag img
  const img = document.querySelector("#profile img")

   if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/myimg.png')
  } else {
     //Se tiver sem light mode, manter a imagem normal
     img.setAttribute('src', './assets/Avatar.png')
    
   } 


}






//function toggleMode(){
// const html = document.documentElement
 
/*  if(html.classList.contains('light')) {
 html.classList.remove('light')
} else{
  html.classList.add('light')
 } 
 
 ( Interpretando o código - se no documento HTML, na sua LISTA DE CLASSES, CONTER um atributo LIGHT. Realizar a remoção na lista do html  do atributo LIGHT. Se NÃO ADICIONAR a função LIGHT a LISTA DE CLASSES do HTML)
 
 Existe uma função chamada toggle que ja realiza toda essa atividade, sendo assim não precisamos usar o if e else.
 */
 //html.classList.toggle('light')  muito mais Prático!!

