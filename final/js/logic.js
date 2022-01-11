window.onload = function() {
    // user class 
    class User {
        constructor(name, email, username, password){
            this.name = name
            this.email = email
            this.username = username
            this.password = password
        }
    }
    const updateUserTable = () =>{
        console.log('upadting tabl')
        const userTableContent = document.getElementById('user-info-table-body');
        userTableContent.innerHTML = '';
        users.forEach((user, index) => {
            const template = `<tr><td><button value='${index}' class="profile-name-btn">${user.name}</button></td><td>${user.email}</td><td>${user.username}</td></tr>`
            userTableContent.innerHTML += template
        });
        // user table list
        const profileNames = document.getElementsByClassName('profile-name-btn');
        // method to handle profile name click
        Array.from(profileNames).forEach(function(element) {
            // console.log(element.value)
            element.addEventListener('click', handleProfileClick);
        });    
    }
    const resetNewUserInputs = () => {
        document.querySelector("form#create-form input[name='name']").value = '';
        document.querySelector("form#create-form input[name='email']").value = '';
        document.querySelector("form#create-form input[name='username']").value = '';
        document.querySelector("form#create-form input[name='password']").value = '';
    }
    /***************** CREATE FUNCTION *******************/
    const users = [new User('admin user', 'admin@email.com', 'admin', '1234')] // lista de usuarios que crean
    const createBtn = document.getElementById('create-btn');
    // creacion del user
    createBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('creating user ...')
        const name = document.querySelector("form#create-form input[name='name']").value;
        const email = document.querySelector("form#create-form input[name='email']").value;
        const username = document.querySelector("form#create-form input[name='username']").value;
        const password = document.querySelector("form#create-form input[name='password']").value;
        const new_user = new User(name, email, username, password);
        users.push(new_user);
        // resetting values to ''
        resetNewUserInputs();
        // updating table information
        updateUserTable();
    });
    
    /***************** LOGIN FUNCTION ********************/
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('logging in ...')
        const flag = false
        const username_input = document.querySelector('form#login-form input[name="username"]').value
        const password_input = document.querySelector('form#login-form input[name="password"]').value
        
        users.forEach((user) => {
            if(user.username === username_input){
                console.log('found user');
                if(user.password === password_input){
                    console.log('password works')
                    alert('credentials are good!')
                    flag = true
                }else {
                    alert('WRONG PASSWORD')
                }
            }
        })
        if(!flag){
            alert('no user found with that username')
        }
    });

    /***************** USER TABLE FUNCTION ***************/
    // user table list
    // const profileNames = document.getElementsByClassName('profile-name-btn');
    // method to handle profile name click
    let activeProfile = 0;
    
    const handleProfileClick = (event) =>{
        event.preventDefault()
        activeProfile = event.target.value
        console.log(activeProfile)
        profile = document.getElementsByClassName('profile-data')
        active_user = users[activeProfile]
        console.log(active_user)
        // changing profile section
        profile[0].innerHTML = `<b>Name</b>: ${active_user.name}`
        profile[1].innerHTML = `<b>Email</b>: ${active_user.email}`
        profile[2].innerHTML = `<b>Username</b>: ${active_user.username}`
        // changing edit profile section
        document.querySelector("form#edit-user-form input[name='name']").value = active_user.name
        document.querySelector("form#edit-user-form input[name='email']").value = active_user.email
        document.querySelector("form#edit-user-form input[name='username']").value = active_user.username
        document.querySelector("form#edit-user-form input[name='password']").value = active_user.password

    }
    const profileName = document.getElementsByClassName('profile-name-btn')[0];
    profileName.addEventListener('click', handleProfileClick);
    /******************* EDIT BUTTON */
    const editBtn = document.getElementById('edit-btn');
    // edit btn
    editBtn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('editing user ...')
        user = users[activeProfile]
        console.log(document.querySelector('form#edit-user-form input[name="name"]').value)
        user.name = document.querySelector('form#edit-user-form input[name="name"]').value
        user.email = document.querySelector('form#edit-user-form input[name="email"]').value
        user.username = document.querySelector('form#edit-user-form input[name="username"]').value
        user.password = document.querySelector('form#edit-user-form input[name="password"]').value
        updateUserTable();
    });
    
    // profile name click for each link
    // Array.from(profileNames).forEach(function(element) {
    //     element.addEventListener('click', handleProfileClick);
    // });
    
}