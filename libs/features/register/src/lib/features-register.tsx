import "./features-register.scss";
import React from "react";
import { useModal } from "@aladdin/shared/modals";
import { IRegistrationFormData, FormValidation } from "@aladdin/domain-models";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBPopover,
  MDBInput,
} from "mdbreact";
import { customUseForm } from "@aladdin/shared/forms";
import { AladdinButton, AladdinCheckbox, AladdinInput } from "@aladdin/ui-kit";
/** Things to do :
 * Authentication and authorization using redux
 * api post request
 *
 *
 */

export function FeaturesRegister() {
  const { control, errors, onSubmit, register } = customUseForm<
    IRegistrationFormData
  >([
    FormValidation.lastName,
    FormValidation.firstName,
    FormValidation.email,
    FormValidation.password,
    FormValidation.term,
  ]);
  const { showModal, toggleModal } = useModal();
  return (
    <MDBContainer className="register-container">
      <MDBRow>
        <MDBCol xl="7" md="6">
          <h2>Some content/images about registration can go here</h2>
        </MDBCol>
        <MDBCol xl="5" md="6">
          <MDBCard className="login-card mx-auto">
            <h3 className="mt-4 mx-5 d-flex justify-content-center">
              Create an Account
            </h3>
            <MDBCardBody className="mx-auto mt-2">
              <form
                className="register-form w-100 "
                method="post"
                onSubmit={onSubmit}
              >
                <MDBRow>
                  <MDBCol xl="6">
                    {" "}
                    <AladdinInput
                      outline
                      name={FormValidation.firstName}
                      label="First Name"
                      type="text"
                      control={control}
                    />
                    {errors.firstName && (
                      <>
                        <MDBIcon
                          className="error-message error-message-icon red-text pr-3"
                          fixed
                          icon="exclamation-triangle"
                        />
                        <span className="error-message px-2 error-text text-danger">{`${errors.firstName.message}`}</span>
                      </>
                    )}
                  </MDBCol>
                  <MDBCol className=" px-3" xl="6">
                    <AladdinInput
                      outline
                      name={FormValidation.lastName}
                      label="Last Name"
                      type="text"
                      control={control}
                    />
                    {errors.lastName && (
                      <>
                        <MDBIcon
                          className="error-message error-message-icon red-text pr-3"
                          fixed
                          icon="exclamation-triangle"
                        />
                        <span className="error-message px-2 error-text text-danger">{`${errors.lastName.message}`}</span>
                      </>
                    )}
                  </MDBCol>
                </MDBRow>

                <AladdinInput
                  outline
                  classes="register-input w-100"
                  name="email"
                  label="Email"
                  type="text"
                  control={control}
                />
                {errors.email && (
                  <>
                    <MDBIcon
                      className="error-message error-message-icon red-text pr-3"
                      fixed
                      icon="exclamation-triangle"
                    />
                    <span className="error-message px-2 error-text text-danger">{`${errors.email.message}`}</span>
                  </>
                )}
                <AladdinInput
                  outline
                  classes="register-input w-100"
                  label="Password"
                  type="text"
                  name="password"
                  control={control}
                />
                {errors.password && (
                  <>
                    <MDBIcon
                      className="error-message error-message-icon red-text pr-3"
                      fixed
                      icon="exclamation-triangle"
                    />
                    <span className="error-message px-2 error-text text-danger">{`${errors.password.message}`}</span>
                  </>
                )}

                {/* Users can keep this as a default to create a default project or create new project name */}

                <div className="d-flex">
                  <MDBInput label="My Project" outline size="sm" />
                  <MDBPopover
                    className="position-relative"
                    placement="bottom"
                    popover
                    clickable
                    id="popper2"
                  >
                    <MDBIcon
                      className="px-2 d-flex align-items-center"
                      icon="info-circle"
                    />
                    <div>
                      <MDBPopoverHeader>Create Project?</MDBPopoverHeader>
                      <MDBPopoverBody>
                        Please name your starting project. If field is left as
                        is, a project is created for you.
                      </MDBPopoverBody>
                    </div>
                  </MDBPopover>
                </div>

                <div className="terms-agreement d-flex">
                  <AladdinCheckbox name="term" defaultValue={false} id="term" />
                  <span className="terms-message">
                    I agree the <a>terms of Use</a> and<a> Private Policy.</a>
                  </span>
                </div>
                {errors.term && (
                  <span className="error-text text-danger font-small">{`${errors.term.message}`}</span>
                )}
                <div className="text-center my-3">
                  <AladdinButton classes="register-btn mx-auto">
                    Register
                  </AladdinButton>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">
                  Already have an account?
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
}

export default FeaturesRegister;
