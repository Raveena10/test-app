
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
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2" style={{ fontSize: 40, fontWeight: "bold" }}>Contact Form</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form >
            <div className="form-group">
              <input
                className="form-control my-2"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="form-group my-3">
              <button
                type="submit"
                onClick={submitHandler}
                className="btn btn-block btn-dark"
              >Add Contact
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  </>
  );
}

export default ContactForm;
