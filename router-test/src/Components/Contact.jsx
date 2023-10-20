import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3" >
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Contact Us</h1>
          <p class="col-md-8 fs-4">You can contact us regarding our products or anything you wish to let us know in the following ways.<br/>E-mail: contact@xerxes.com<br/></p>
          <Link to="/about"><button class="btn btn-primary btn-lg" type="button">About us</button></Link>
        </div>
      </div>
    </>
  )
}

export default Contact