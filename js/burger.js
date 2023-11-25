const burger = document.querySelector('.burger')
const headerDrop = document.querySelector('.header-drop')
const btnProfile = document.querySelectorAll('.profile')
const closeBtn =document.querySelector('.button')
const profileMenu = document.querySelector('.profile-menu')



burger.addEventListener('click',()=>{
    headerDrop.classList.toggle('item-hidden')
})

btnProfile.forEach((item) => {
    item.addEventListener('click',()=>{
   
      profileMenu.classList.remove('hidden')
    })
});

closeBtn.addEventListener('click',()=>{
    profileMenu.classList.add('hidden')
})