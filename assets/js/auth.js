const $registrLabel = document.querySelectorAll('.registr__label')




let star = false
let placeholder
$registrLabel.forEach( label =>{
    label.children[2].addEventListener('focus', showFocusInput)
    label.children[2].addEventListener('blur', showBlurInput)
})


function showFocusInput(event) {
  
    const $star = this.parentNode.children[0]
   
      //star
    $star.style.color = 'red'
    //border
    this.style.borderColor = 'red'
    //placeholder
    placeholder = this.placeholder
    this.placeholder = ''
    //opacity с 
    $star.nextElementSibling.classList.toggle('registr__placeholder_active')
       //Ошибка ввода
    this.nextElementSibling.classList.toggle('registr__json_active')  
    this.nextElementSibling.textContent = 'Поле не должно быть пустым'
}
function showBlurInput(event) {
  
    const $star = this.parentNode.children[0]
    if(this.value !== '') {
           //star
        $star.style.color = 'red'
        this.style.borderColor = 'red'
    }
    if(star) {
           //star
        $star.style.color = 'green'
         //border
        this.style.borderColor = 'green'
    }
    else  {
           //star
        $star.style.color = 'rgba(255, 255, 255, 0)'
         //border
        this.style.borderColor = '#33d9de'
         //placeholder
        this.placeholder = placeholder
        $star.nextElementSibling.classList.toggle('registr__placeholder_active') 
           //Ошибка ввода
        this.nextElementSibling.classList.toggle('registr__json_active') 
        this.nextElementSibling.textContent = ''
    }  
}
const $eye = document.querySelectorAll('.eye')
$eye.forEach(eye => {
    eye.addEventListener('click', showPassword)
});

function showPassword(event) {
    const $input = this.parentElement.children[2]
    console.log(this.previousElementSibling);
    if($input.type === 'password'){
        $input.type = 'text'
        this.style.background ='url(assets/img/svg/openEye.svg) center/cover no-repeat'
        //this.previousElementSibling.textContent = 'Пароль открыт'
    }
    else{
        $input.type = 'password'
        this.style.background = 'url(assets/img/svg/closedEye.svg) center/cover no-repeat'
    }
}

    