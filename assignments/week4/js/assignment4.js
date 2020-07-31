/**  JS Code for Assignment 4  **/

window.onload = () => {

    const users = new Array;
    const userData = document.querySelector('#user-data');
    const jsonData = document.querySelector('#json-data');

    function User(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    };

    const addUser = () => {
        // get form values
        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // create new user and push to users array
        const newUser = new User(firstname, lastname, email, password);
        users.push(newUser);
    };

    const showData = () => {

        userData.innerHTML = '';

        if (users.length >= 1) {
            // iterate through users array and display
            for (let index in users) {
                const userLabel = document.createElement('dl');
                const userLabelText = document.createTextNode('User #' + (parseInt(index) + 1));
                userLabel.appendChild(userLabelText);
                userData.appendChild(userLabel);

                const userName = document.createElement('dd');
                const userNameText = document.createTextNode(`Name: ${users[index].firstname} ${users[index].lastname}`);
                userName.appendChild(userNameText);
                userLabel.appendChild(userName);

                const userEmail = document.createElement('dd');
                const userEmailText = document.createTextNode('Email: ' + users[index].email);
                userEmail.appendChild(userEmailText);
                userLabel.appendChild(userEmail);

                const userPassword = document.createElement('dd');
                const userPasswordText = document.createTextNode('Password: ' + users[index].password);
                userPassword.appendChild(userPasswordText);
                userLabel.appendChild(userPassword);
            }
        }
    };

    const showJSONData = () => {

        jsonData.innerHTML = '';

        if (users.length >= 1) {
            const jsonString = JSON.stringify(users);
            
            const userJson = document.createElement('p');
            const userJsonText = document.createTextNode(jsonString);
            userJson.appendChild(userJsonText);
            jsonData.appendChild(userJson);
        }

    };

    const clearAllData = () => {
        if (users.length >= 1) {
            userData.innerHTML = '';
            jsonData.innerHTML = '';
            users.length = 0;
        }
    };

    document.querySelector('#submit').addEventListener('click', () => {
        addUser();
    });

    document.querySelector('#btnShowUsers').addEventListener('click', () => {
        showData();
    });

    document.querySelector('#btnShowJSON').addEventListener('click', () => {
        showJSONData();
    });

    document.querySelector('#btnClearData').addEventListener('click', () => {
        clearAllData();
    });

};