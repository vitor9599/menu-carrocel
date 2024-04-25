function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}



//parte de imagnes comeca aqui

let radio = document.querySelector('.manual-btn')/*pegar  */
let contador =1

document.querySelector('#radio1').checked = true/*fazer marcacao do radio 1 true confirma */

/*fazer imagens passar  */
setInterval(() => (
    proximaImg()
), 5000)

function proximaImg(){
contador++
if(contador > 6){
    contador =1
}
document.querySelector('#radio'+contador).checked = true
}
