//This is to display the errors
export default function display_errors(errors) {
    const error_div = document.querySelector('div.error')
    const error_ul =   document.querySelector('ul.errors-content')
    error_ul.innerHTML = ''
    errors.forEach(e => {
        const li = document.createElement('li')
        li.innerHTML = e
        error_ul.appendChild(li)
        
    })

    error_div.style.display = "flex"
    
    //fadout effect 
    setTimeout(()=>{
        error_div.style.display = "none"
        error_ul.innerHTML = '';
    },2500)
    
}