import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <main class="form-signin w-100 m-auto">
        <div className='container'>
  <form className='lg-col-4'>
    <img class="mb-4" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/red-dead-redemption-2/8/89/Sharpshooter8_HDR_FrontTwo.jpg?width=960" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    <kpm-button class="jYwCKXeG1NQk9WXqAtIT kpm_input-field-button kpm_gray-key-icon"><div class="YaUcSL9pZJkawAbwG9cF"><svg class="J6MDbAOqISHJlMVCHWAE" viewBox="25 25 50 50" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" ><circle cx="50" cy="50" r="20"></circle></svg></div><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" class="h9pVviaQm_vH3Kknq7ed kpm_reset aALDRsdsL0ZI13JpW4S6"><path d="M1 17.0748V6.92522C1 6.19396 1.3991 5.52099 2.04077 5.17026L10.5408 0.5243C11.1385 0.197577 11.8615 0.197577 12.4592 0.5243L20.9592 5.17026C21.6009 5.52099 22 6.19396 22 6.92522V17.0748C22 17.806 21.6009 18.479 20.9592 18.8297L12.4592 23.4757C11.8615 23.8024 11.1385 23.8024 10.5408 23.4757L2.04077 18.8297C1.3991 18.479 1 17.806 1 17.0748Z" class="x42ZoZlm9VYGazCSUyBE"></path><circle cx="11.5" cy="9.5" r="3" fill="white" stroke="white"></circle><path d="M10 9H13V18L11.5 19L10 18V9Z" fill="white"></path><path d="M12.5 8.5C12.5 9.05228 12.0523 9.5 11.5 9.5C10.9477 9.5 10.5 9.05228 10.5 8.5C10.5 7.94772 10.9477 7.5 11.5 7.5C12.0523 7.5 12.5 7.94772 12.5 8.5Z" class="x42ZoZlm9VYGazCSUyBE"></path><rect x="10" y="16" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect><rect x="10" y="14" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect></svg></kpm-button></div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    <kpm-button  class="jYwCKXeG1NQk9WXqAtIT kpm_input-field-button kpm_gray-key-icon"><div class="YaUcSL9pZJkawAbwG9cF"><svg class="J6MDbAOqISHJlMVCHWAE" viewBox="25 25 50 50" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="20"></circle></svg></div><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" class="h9pVviaQm_vH3Kknq7ed kpm_reset aALDRsdsL0ZI13JpW4S6"><path d="M1 17.0748V6.92522C1 6.19396 1.3991 5.52099 2.04077 5.17026L10.5408 0.5243C11.1385 0.197577 11.8615 0.197577 12.4592 0.5243L20.9592 5.17026C21.6009 5.52099 22 6.19396 22 6.92522V17.0748C22 17.806 21.6009 18.479 20.9592 18.8297L12.4592 23.4757C11.8615 23.8024 11.1385 23.8024 10.5408 23.4757L2.04077 18.8297C1.3991 18.479 1 17.806 1 17.0748Z" class="x42ZoZlm9VYGazCSUyBE"></path><circle cx="11.5" cy="9.5" r="3" fill="white" stroke="white"></circle><path d="M10 9H13V18L11.5 19L10 18V9Z" fill="white"></path><path d="M12.5 8.5C12.5 9.05228 12.0523 9.5 11.5 9.5C10.9477 9.5 10.5 9.05228 10.5 8.5C10.5 7.94772 10.9477 7.5 11.5 7.5C12.0523 7.5 12.5 7.94772 12.5 8.5Z" class="x42ZoZlm9VYGazCSUyBE"></path><rect x="10" y="16" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect><rect x="10" y="14" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect></svg></kpm-button></div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <Link to="/home"><button class="btn btn-primary w-100 py-2" type="submit">Sign in</button></Link>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form></div>
</main>
    </>
  )
}

export default Login