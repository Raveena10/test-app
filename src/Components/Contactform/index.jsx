
import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddContact } from "../../Redux/Action/Contactaction";

function ContactForm() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Number, setNumber] = useState("");
    const submitHandler=()=>{
        const formdata={
            Email:Email,
            Number:Number
        }
        dispatch(AddContact(formdata));
        console.log("form data" + JSON.stringify(formdata))
        history.push("/show")
    }
  return (
    <>
    <div className="containezr">
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Email
      </label>
      <input
        type="E-mail"
        id="email"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setEmail(e.target.value)}
      />

    </div>
    <div className="col-auto">
      <label htmlFor="inputPassword6" className="col-form-label">
        Mobile number
      </label>
      <input
        type="number"
        id="number"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
    <br></br>
    <button className="btn btn-primary" type="submit"
     onClick={submitHandler}>Submit</button>
    </div>
  </>
  );
}

export default ContactForm;
