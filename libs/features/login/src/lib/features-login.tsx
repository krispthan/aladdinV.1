import './features-login.scss';
import React, { useState } from 'react';
import { ILoginFormData, FormValidation } from '@aladdin/domain-models';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { customUseForm } from '@aladdin/shared/forms';
import { AladdinButton, AladdinCheckbox, AladdinInput } from '@aladdin/ui-kit';

/* Things to do:
api post request
need to link signup and forgot password
*/

export const Featureslogin = () => {
  const { control, errors, onSubmit, getValues, register } = customUseForm<
    ILoginFormData
  >([
    FormValidation.email,
    FormValidation.password,
    FormValidation.confirmPassword,
  ]);
  const [checked, setChecked] = useState(false);
  const onChangeHander = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <MDBContainer className="login-container">
      <MDBRow>
        <MDBCol xl="8" md="6">
          <h2>Some content about login can go here</h2>
        </MDBCol>
        <MDBCol xl="4" md="6">
          <MDBCard className="login-card mx-auto">
            <h3 className="mt-4 mx-5 d-flex justify-content-center">Login</h3>
            <MDBCardBody>
              <form
                className="login-form w-100"
                method="post"
                onSubmit={onSubmit}
              >
                <AladdinInput
                  classes="login-input w-100"
                  outline
                  label="Email"
                  name="email"
                  type="text"
                  control={control}
                />
                {errors.email && (
                  <p className="error-text text-danger font-small">{`${errors.email.message}`}</p>
                )}

                <AladdinInput
                  classes="login-input w-100"
                  outline
                  label="Password"
                  type="text"
                  name="password"
                  control={control}
                />
                {errors.password && (
                  <p className="error-text text-danger font-small">{`${errors.password.message}`}</p>
                )}
                <AladdinInput
                  outline
                  classes="register-input w-100"
                  label="Confirm Password"
                  type="text"
                  name="confirmpassword"
                  control={control}
                />
                {errors.confirmPassword && (
                  <>
                    <span className="error-message error-message px-2 error-text text-danger">{`${errors.confirmPassword.message}`}</span>
                  </>
                )}
                <div className="d-flex justify-content-between py-2">
                  <div className="d-flex">
                    <AladdinCheckbox
                      control={control}
                      register={register}
                      name="remember-me"
                      defaultValue={false}
                      id="remember-me"
                    />

                    <span className="remember-message"> Remember me </span>
                  </div>
                  <p className="forgot-password-message font-small d-flex">
                    Forgot
                    <a
                      href="#!"
                      className="external-link-text font-weight-bold ml-1"
                    >
                      Password?
                    </a>
                  </p>
                </div>
                <div className="text-center my-3">
                  <AladdinButton type="submit" classes="login-btn mx-auto">
                    Login
                  </AladdinButton>
                </div>
                <p className="font-small py-3 d-flex justify-content-center">
                  Don't have an account?
                  <a
                    href="#!"
                    className="external-link-text font-weight-bold ml-1"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
