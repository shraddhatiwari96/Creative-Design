document.querySelectorAll('.story-btn').forEach(btn=>
    {
    btn.addEventListener('click',()=>{
        console.log('clicked')
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})