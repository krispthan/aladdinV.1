import './claim-code.scss';
import React from 'react';
import { AladdinButton, AladdinCard, AladdinInput } from '@aladdin/ui-kit';
import { IClaimCodeData, FormValidation } from '@aladdin/domain-models';
import { customUseForm } from '@aladdin/shared/forms';

/**Things to do:
 * api post request to handle claim code
 *
 *
 */

export const ClaimCode: React.FC = () => {
  const { onSubmit, control, errors } = customUseForm<IClaimCodeData>([
    FormValidation.claimCode,
  ]);
  return (
    <AladdinCard className="claim-code-card py-4" fullWidth>
      <p>
        To get started, you will need to type in the your promotion code.
        <br /> A promotion code grants you credit for uploading and analyzing
        your data through our platform.
      </p>
      <h6 className="py-2">Type/copy the code below:</h6>
      <form className="claim-code-form" method="post" onSubmit={onSubmit}>
        <AladdinInput
          outline
          name="claim-code"
          label="Claim Code"
          type="text"
          control={control}
        />
        {errors.claimCode && (
          <p className="error-text text-danger font-small">{`${errors.claimCode.message}`}</p>
        )}
        <br />
        <div className="text-center my-3">
          <AladdinButton
            btnClicked={() => {
              console.log('test');
            }}
            classes="update-btn"
          >
            Claim
          </AladdinButton>
        </div>
      </form>
    </AladdinCard>
  );
};
