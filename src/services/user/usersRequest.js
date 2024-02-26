export const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => { 
        try {
            let data = localStorage.getItem('users');
            if (!data) {
                localStorage.setItem('users', JSON.stringify([]));
                data = '[]';
            }
            resolve(JSON.parse(data));
        } catch (e) {
            reject(e);
        }
    }, 100);
});

export function addUser(user) {
    fetchUser.then(usersFound => {
        
        let users = [...usersFound];
        user.id=users.length + 1;
        users.push(user);
        setUsers(users);
    }).catch(err => {
        console.error('Error adding user:', err);
    });
}

export function setUsers(users) {
    const dataStringify = JSON.stringify(users);
    localStorage.setItem('users', dataStringify);
}
export function changeStatusUser(id,status){
    fetchUser.then(users => {
        const indexUser = users.findIndex(user => user.id === id);
        users.at(indexUser).status=status;
        console.log('users',users)
        setUsers(users);
    }).catch(err => {
        console.error('Error removing user:', err);
    });
}

export function removeUser(idUser) {
    fetchUser.then(users => {
        const newUserArray = users.filter(user => user.id !== idUser);
        setUsers(newUserArray);
    }).catch(err => {
        console.error('Error removing user:', err);
    });
}
