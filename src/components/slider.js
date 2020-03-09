export default function slider() {
    //sliders[compteur].classList.add('active')
    var ImageSlide = document.getElementsByClassName("imgSlide")
    var compteur = 0
    var stopButton = document.getElementsByClassName('Arrete')
    var launchButton = document.getElementsByClassName('PlaySlide')
    var playing = true
    var slideInterval = setInterval(nextSlide, 5000)
        function nextSlide(){
            if(ImageSlide[compteur]){
                ImageSlide[compteur].className = "imgSlide"
                compteur = (compteur + 1)%ImageSlide.length
                ImageSlide[compteur].className = "imgSlide marche"
            }
         
        }

}


