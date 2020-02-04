export default function slider() {
    //sliders[compteur].classList.add('active')
    const sliders = document.querySelectorAll(".imgs")
    var compteur = 0
    setInterval(()=>{
        sliders[compteur].classList.toggle('marche')
        // if(compteur < 7){
            compteur++
            compteur = compteur % 5
            sliders[compteur].classList.toggle('marche')

    },5000)
}


