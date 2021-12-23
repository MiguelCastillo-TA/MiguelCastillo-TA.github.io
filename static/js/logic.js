window.onload = function() {
    const createBtn = document.getElementById('create-btn');
    const loginBtn = document.getElementById('login-btn');
    const profileNames = document.getElementsByClassName('profile-name-btn');
    const editBtn = document.getElementById('edit-btn');
    // edit btn
    editBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('editing user ...')
    });
    // creacion del user
    createBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('creating user ...')
    });
    // login
    loginBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('logging in ...')
    });
    // method to handle profile name click
    const handleProfileClick = (event) =>{
        event.preventDefault();
        console.log('handling profile click')
        console.log(event.target.href)
    }
    // profile name click for each link
    Array.from(profileNames).forEach(function(element) {
        element.addEventListener('click', handleProfileClick);
    });
    
}