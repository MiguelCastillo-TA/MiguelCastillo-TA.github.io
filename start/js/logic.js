window.onload = function() {
    // user class 
    class User {
    }
    /***************** CREATE FUNCTION *******************/    const createBtn = document.getElementById('create-btn');
    // creacion del user
    createBtn.addEventListener('click', function(event){
        event.preventDefault();
       alert('creating user')
    });
    
    /***************** LOGIN FUNCTION ********************/
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function(event){
        event.preventDefault();
        alert('login clicked')
    });

    /***************** USER TABLE FUNCTION ***************/
    // method to handle profile name click
    const handleProfileClick = (event) =>{
        alert('handle profile select!')
    }
    const profileName = document.getElementsByClassName('profile-name-btn')[0];
    profileName.addEventListener('click', handleProfileClick);

    /******************* EDIT BUTTON */
    const editBtn = document.getElementById('edit-btn');
    // edit btn
    editBtn.addEventListener('click', function(event){
        event.preventDefault();
        alert('editing profile!')
    });
    
    // pista
    // Array.from(profileNames).forEach(function(element) {
    //     element.addEventListener('click', handleProfileClick);
    // });
    
}