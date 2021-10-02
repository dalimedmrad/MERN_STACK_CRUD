import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contacts";
import Contact from "./Contact";
import ReactLoading from 'react-loading';

const ConatctList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loadContacts = useSelector((state) => state.contactReducer.loadContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (

  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
    {loadContacts ?<ReactLoading type="spokes" color="grey" height={550} width={550} />:contacts.map(el => <Contact key={el._id} contact={el}/>)}
  </div>
  )};

export default ConatctList;
