 export default function slider() {
    //sliders[compteur].classList.add('active')
    const sliders = document.querySelectorAll(".slider")
    const compteur = 0

    setInterval(()=>{
        sliders[compteur].classList.toggle('active')            
        // if(compteur < 7){
            compteur++
            compteur = compteur % 7
            sliders[compteur].classList.toggle('active')

    }, 5000)
}
slider()
// console.log(sliders.length)

