export default function removefixed() {
    var window_height = document.getElementsByClassName("PageConteneur")

        window.addEventListener('scroll', (event) => {
                event.preventDefault()
                console.log(this.scrollTop())
        })

}