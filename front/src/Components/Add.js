import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
import { editContact, postContact } from '../JS/actions/contacts';
import { useHistory } from "react-router-dom";


const Add = () => {
    const [user,setUser] = useState({name:"",email:"",Phone:""});
    const userReducer = useSelector((state) => state.contactReducer.user);
    const edit = useSelector((state) => state.editReducer.edit);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        edit? setUser(userReducer):setUser({name:"",email:"",Phone:""});
    },[edit,userReducer]);
    
    const handleContact = ()=>{
      if(!edit)dispatch(postContact(user)); 
      else dispatch(editContact(userReducer._id,user));
      history.push("/");
    } 
   
    const check = ()=>{
        if(user.name === '' || user.email === '' || user.Phone === ''){
            alert('check again please !!');
        }else{handleContact();}
    }
    const handleChange = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
    }
    return (
        <div className="form">
            <Form>
                <Form.Field>
                    <label>Name :</label>
                    <input value={user.name} placeholder='First Name' name="name" required onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Email :</label>
                    <input value={user.email} placeholder='Email' name="email" required onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone :</label>
                    <input value={user.Phone} placeholder='Phone' name="Phone" required onChange={handleChange} />
                </Form.Field>
               
                <Button disabled={user?false:true} onClick={()=>check()} color={edit? "green":"blue"} type='submit'>{edit ? "Edit": "Save"}</Button>
            </Form>
        </div>
    );
}

export default Add;
