
// user data save on db
export const saveUser = user => {
    const currentUser = {
        email: user.email
    }
    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            
        })
}

// user role save on db
export const saveUserRole = async email => {
    const currentUser = {
        role: 'host'
    }
    const response = await fetch(`http://localhost:5000/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    const data = response.json();
    return data
}

// get user

export const getUser = async (email)=>{
    const response = await fetch(`http://localhost:5000/user/${email}`)
    const data = await response.json()
    return data
}