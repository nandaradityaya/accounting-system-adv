// import React from 'react'

import SignInForm from "./form";

function SignIn() {
  return (
    <>
      <div className="wrapper">
        <div className="authentication-header" />
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="mb-4 text-center">
                  <img src="assets/images/logo-img.png" width={180} alt="" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="p-4 rounded">
                      <div className="text-center">
                        <h3 className="">Sign in</h3>
                        <p>
                          Dont have an account yet? <a href="#">Sign up here</a>
                        </p>
                      </div>
                      <div className="form-body">
                        <SignInForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
