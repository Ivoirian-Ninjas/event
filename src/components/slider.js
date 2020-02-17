import $ from "jquery"
export default function slider() {
    //sliders[compteur].classList.add('active')
    const slider = $(".imgs")
    var compteur = 0
    setInterval(()=>{
        slider[compteur].classList.toggle('marche')
        // if(compteur < 7){
            compteur++
            compteur = compteur % 5
            slider[compteur].classList.toggle('marche')

    },5000)
}


