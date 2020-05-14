export default function removefixed() {
    // var window_height = document.getElementsByClassName("PageConteneur")

    //     window.addEventListener('scroll', (event) => {
    //             event.preventDefault()
    //             console.log(this.scrollTop())
    //     })
    var text = document.getElementsByClassName("pHead")
    console.log(1)
    var fadeOut = function(){
    console.log(2)
        text.className = "pHead"
        text.className = "pHead visual"
    }
    fadeOut()
        // text.setAttribute('style', 'display: none')
        // text.style.display = "none"
        // text.className = "pHead"
        // text.className = "pHead visual"
        //text.classList.add("visual")
        // text.style = { "display" : "none"}

}
// how to use fancybox
// const IMAGES = [{
//                 src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//                 thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//                 thumbnailWidth: 320,
//                 thumbnailHeight: 174,
//                 isSelected: true,
//                 caption: "After Rain (Jeshu John - designerspics.com)"
//         },
//         {
//                 src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//                 thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//                 thumbnailWidth: 320,
//                 thumbnailHeight: 212,
//                 tags: [{
//                         value: "Ocean",
//                         title: "Ocean"
//                 }, {
//                         value: "People",
//                         title: "People"
//                 }],
//                 caption: "Boats (Jeshu John - designerspics.com)"
//         },

//         {
//                 src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//                 thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//                 thumbnailWidth: 320,
//                 thumbnailHeight: 212
//         }
// ]