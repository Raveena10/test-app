import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  useHistory } from "react-router-dom";

export default function ShowContact()
{
  let history = useHistory();
    const [contactSelector, setcontactSelector] = useState([]);
    var cs = useSelector((state) => state.contacts.contacts)
    setcontactSelector(cs)
    console.log("contactSelector ",contactSelector)
    const redirecth=()=>{
      history.push("/")
  }
    return (
        <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <div>
        <button type="submit"
         onClick={redirecth}>Submit</button>
      </div>
        </>
      );
     
}