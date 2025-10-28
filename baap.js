
document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault();
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    const convertedUserPassword = parseInt(userPasswordValue);

    if(userEmail.value === 'mdshahed19711@gmail.com'){
        
        if(convertedUserPassword===1234){
            window.location.href= 'inside.html'
        }
        else{
            alert('Invalid pin number')
        }
    }
    else{
        alert('Invalid email name')
    }
})
