const button = document.querySelector('.btnAcess')

const [username, password] = document.querySelectorAll('.input1, .input2')

function handleChange(){
    if(username.value.length && password.value.length < 8){
        button.disabled = true
    }else{
        button.disabled = false
    }
}

username.addEventListener('input1', handleChange)
password.addEventListener('input2', handleChange)