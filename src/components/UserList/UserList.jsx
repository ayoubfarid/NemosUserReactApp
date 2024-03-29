import React, { useState, useEffect } from "react";
import {fetchUser} from './../../services/user/usersRequest';
import UsersNotFound from "../UsersNotFound/UsersNotFound";
import UsersIsLoading from "../UsersIsLoading/UsersIsLoading";
import UserRow from "../UserRow/UserRow";


 const  UserList = () => {
    const [users, setUsers] = useState([]); 
    const [isLoading,setIsLoading]=useState(true); 


  useEffect(() => { 
    setTimeout(()=> {
        //your code to be executed after 1 second
        fetchUser.then(users=>{
        setUsers(users);
        setIsLoading(false);
    }).catch((e)=>{
        console.log('exception');
    })
      }, 6000);
    
    
  }, []);  
        return isLoading ?
        <UsersIsLoading/>
        : users.length > 0 ?
          users.map((user,index)=> <UserRow key={index} props={user} />) : 
          <UsersNotFound/>
          


}
export default UserList;