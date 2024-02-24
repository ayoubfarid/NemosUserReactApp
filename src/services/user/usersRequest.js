  export const fetchUser =new Promise((resolve, reject) =>{
    let data=[]
    try{
     if( localStorage.getItem('users') == null){
        localStorage.setItem('users','[]');
         data=[];
    } 
    else{
    let dataUser=localStorage.getItem('users');
    if(dataUser !=='') {
        data=JSON.parse(dataUser);
    }
    console.log('users rec ',data)
    }
    resolve(data);   
        
    }catch(e){
        reject(e);
    }
}
    );


 export function addUser(user){
    let users = fetchUser();
    users.add(user);
    setUsers(users);
};
export function setUsers(users){
    const dataStringify=JSON.stringify(users);
    localStorage.setItem('users',dataStringify);
}
export function removeUser(idUser){
    let id=idUser;
    let users = fetchUser();
    const newUserArray = users.filter(user => {
        return user.id !== id;
      });
      setUsers(newUserArray);
}