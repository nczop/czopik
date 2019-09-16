export const loginData = {
    login: 'a',
    password: 'z',    
}

export const isCredentialsValid = (login, password) => loginData.login === login && loginData.password === password

export const auth = (login, password) => {    
    if (isCredentialsValid(login, password) ){
        localStorage.setItem('login', login)
        return true;             
    }   
        alert('tylko chomik moze wejsc')
        return false;
    }  

export const isUserLoggedIn = () => {  
    const userLogin = localStorage.getItem('login')      
    return !!userLogin                 
}
