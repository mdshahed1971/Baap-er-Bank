
document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault();
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    const convertedUserPassword = parseInt(userPasswordValue);

    if(userEmail.value === 'mdshahed19711@gmail.com'){
        
        if(convertedUserPassword===1234){
            window.location.href= 'inside.html';
            userEmail.value = '';
            userPassword.value = '';
        }
        else{
            alert('Invalid pin number');
            userEmail.value = '';
           userPassword.value = '';
        }
    }
    else{
        alert('Invalid email name');
        userEmail.value = '';
        userPassword.value = '';
    }
    
})
