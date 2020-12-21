import './features-contact-us.scss';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MDBRow, MDBCol, MDBInput, MDBContainer } from 'mdbreact';
import { AladdinButton } from '@aladdin/ui-kit';
import { GoogleContactUs } from './contact-map/contact-map';
import { FormValidation, IContactFormData } from '@aladdin/domain-models';
import { ErrorMessage } from '@hookform/error-message';
import { customUseForm } from '@aladdin/shared/forms';
/**Things to do:
 * handle api call post request
 * 

 */

export const FeaturesContactUs: React.FC = () => {
  const { onSubmit, control, errors, formatPhoneNumber } = customUseForm<
    IContactFormData
  >([
    FormValidation.firstName,
    FormValidation.email,
    FormValidation.phoneNumber,
  ]);
  return (
    <MDBContainer>
      <h1>Contact Us</h1>
      <p className="send d-inline-block">Send us a message </p>
      <MDBRow className="contact-us-row">
        <MDBCol className="contact-us-col" xl="4" md="5" size="6">
          <form className="contact-form" method="post" onSubmit={onSubmit}>
            <Controller
              name="firstName"
              control={control}
              defaultValue={''}
              render={({ value, onChange }) => (
                <MDBInput
                  className="mb-0"
                  label="First Name"
                  value={value}
                  onChange={onChange}
                  icon="user"
                />
              )}
            />

            {errors.firstName && (
              <p className="error-text text-danger font-small">{`${errors.firstName.message}`}</p>
            )}
            <Controller
              render={({ value, onChange }) => (
                <MDBInput
                  label="Phone Number"
                  value={value}
                  onChange={onChange}
                  icon="phone"
                />
              )}
              name="phoneNumber"
              control={control}
              defaultValue={''}
            />

            {errors.phoneNumber && (
              <p className="error-text text-danger font-small">{`${errors.phoneNumber.message}`}</p>
            )}

            <Controller
              render={({ value, onChange }) => (
                <MDBInput
                  label="Email"
                  value={value}
                  onChange={onChange}
                  icon="envelope"
                />
              )}
              name="email"
              control={control}
              defaultValue={''}
            />

            {errors.email && (
              <p className="error-text text-danger font-small">{`${errors.email.message}`}</p>
            )}
            <MDBInput
              type="textarea"
              label="Message"
              rows="2"
              icon="pencil-alt"
            />

            <div className="text-center my-3">
              <AladdinButton
                btnClicked={() => {
                  // onSubmit();
                }}
                classes="update-btn"
              >
                Submit
              </AladdinButton>
            </div>
          </form>
        </MDBCol>
        <MDBCol className="company-contact-col" xl="8" md="7" size="6">
          <div className="contacts-map-container d-flex">
            <GoogleContactUs />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
