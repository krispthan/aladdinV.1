import './password.scss';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  MDBInput,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCardBody,
} from 'mdbreact';
import { IPasswordFormData } from '@aladdin/domain-models';
import { AladdinButton } from '@aladdin/ui-kit';
/* Todo:
handle api post request



*/
export const Password: React.FC<IPasswordFormData> = (props) => {
  const { handleSubmit, errors, control, getValues } = useForm<
    IPasswordFormData
  >();

  const onSubmit = (
    data: IPasswordFormData,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log('data:', data);
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <MDBRow>
          <MDBCol>
            <Controller
              render={(props) => (
                <MDBInput
                  outline
                  size="sm"
                  label="Password"
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  containerClass="mb-0"
                />
              )}
              name="password"
              control={control}
              defaultValue={''}
              rules={{
                required: 'You must specify a password',
                min: {
                  value: 8,
                  message:
                    'Password length must be a minimum of 8 characters long',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Password must contain ',
                },
              }}
            />
            {errors.password && (
              <>
                <MDBIcon
                  className="error-message-icon red-text pr-3"
                  fixed
                  icon="exclamation-triangle"
                />
                <span className="px-2 error-text text-danger">{`${errors.password.message}`}</span>
              </>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <Controller
              render={(props) => (
                <MDBInput
                  outline
                  size="sm"
                  label="New Password"
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  containerClass="mb-0"
                />
              )}
              name="newPassword"
              control={control}
              defaultValue={''}
              rules={{
                required: 'You must specify a password',
                min: {
                  value: 8,
                  message:
                    'Password length must be a minimum of 8 characters long',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    'Password must contain at least 8 characters of symbols, numbers and characters. ',
                },
              }}
            />
            {errors.password && (
              <>
                <MDBIcon
                  className="error-message-icon red-text pr-3"
                  fixed
                  icon="exclamation-triangle"
                />
                <span className="px-2 error-text text-danger">{`${errors.password.message}`}</span>
              </>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <Controller
              render={(props) => (
                <MDBInput
                  outline
                  size="sm"
                  label="Confirm Password"
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  containerClass="mb-0"
                />
              )}
              name="confirmPassword"
              control={control}
              defaultValue={''}
              rules={{
                required: 'You must specify a password',
                validate: (value) => {
                  if (value === getValues()['password']) {
                    return true;
                  } else {
                    return 'The passwords do not match';
                  }
                },
              }}
            />
            {errors.confirmPassword && (
              <>
                <MDBIcon
                  className="error-message-icon red-text pr-3"
                  fixed
                  icon="exclamation-triangle"
                />
                <span className="px-2 error-text text-danger">{`${errors.confirmPassword.message}`}</span>
              </>
            )}
          </MDBCol>
        </MDBRow>
        <div className="text-center my-3">
          <AladdinButton
            btnClicked={() => {
              console.log('test');
            }}
            classes="password-btn"
          >
            Confirm Password
          </AladdinButton>
        </div>
      </form>
    </>
  );
};
