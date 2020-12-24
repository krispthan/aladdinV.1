import "./update-profile.scss";
import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { FormValidation, IProfileFormData } from "@aladdin/domain-models";
import { AladdinButton, AladdinInput, EditableTable } from "@aladdin/ui-kit";
import { customUseForm } from "@aladdin/shared/forms";

/* Things to do:
handle post request
Refactor input - create custom input to dynamically render the input
*/

export const UpdateProfile: React.FC = () => {
  const { onSubmit, control, errors, formatPhoneNumber } = customUseForm<
    IProfileFormData
  >([
    FormValidation.firstName,
    FormValidation.address,
    FormValidation.lastName,
    FormValidation.phoneNumber,
    FormValidation.email,
  ]);

  return (
    <MDBRow className="update-profile-row-container">
      <MDBCol xl="3" md="3" className="photo-col mb-3 ">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
          className="photo-image img-fluid z-depth-1 rounded-circle"
          alt="Image of "
        />
      </MDBCol>
      <MDBCol xl="9" md="9">
        <form className="update-profile-form" onSubmit={onSubmit}>
          <MDBRow>
            <MDBCol>
              <AladdinInput
                outline
                name={FormValidation.firstName}
                label="First Name"
                type="text"
                control={control}
              />
              {errors.firstName && (
                <p className="error-text text-danger font-small">{`${errors.firstName.message}`}</p>
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <AladdinInput
                outline
                name={FormValidation.lastName}
                label="Last Name"
                type="text"
                control={control}
              />
              {errors.lastName && (
                <p className="error-text text-danger font-small">{`${errors.lastName.message}`}</p>
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <AladdinInput
                outline
                name="email"
                label="Email"
                type="text"
                control={control}
              />
              {errors.email && (
                <p className="error-text text-danger font-small">{`${errors.email.message}`}</p>
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <AladdinInput
                outline
                name={FormValidation.address}
                label="Address"
                type="text"
                control={control}
              />{" "}
              {errors.address && (
                <p className="error-text text-danger font-small">{`${errors.address.message}`}</p>
              )}
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow>
            <MDBCol>
              <AladdinInput
                outline
                name="address2"
                label="Address #2"
                type="text"
                control={control}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <AladdinInput
                outline
                name={FormValidation.phoneNumber}
                label="Phone Number"
                type="text"
                control={control}
                formatValueOnChange={formatPhoneNumber}
              />

              {errors.phoneNumber && (
                <p className="error-text text-danger font-small">{`${errors.phoneNumber.message}`}</p>
              )}
            </MDBCol>
          </MDBRow>
          <div className="text-center my-3">
            <AladdinButton classes="update-btn">Update</AladdinButton>
          </div>
        </form>
        <EditableTable />
      </MDBCol>
    </MDBRow>
  );
};
