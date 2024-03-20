// (function (){
//     const forms = document.querySelectorAll(".needs-validation")

//     forms.forEach((form)=>{
//         form.addEventListener('submit', (event)=> {
//             if(!form.checkValidity()){
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//             alert('Mensaje enviado')
//         })
//     })
// })()

(function(){
    const form = document.querySelector('#form')

    form.addEventListener('submit', (evento)=> {
        if(!form.checkValidity()){
            evento.preventDefault()
            evento.stopPropagation()
            form.classList.add('was-validated')
        }
        else alert('Mensaje enviado')
    })
})();