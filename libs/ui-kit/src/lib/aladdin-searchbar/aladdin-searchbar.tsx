import './aladdin-searchbar.scss';
import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import { customUseForm } from '@aladdin/shared/forms';
import { ISearchForm } from '@aladdin/domain-models';
import { useForm } from 'react-hook-form';
export interface AladdinSearchbarProps {}

/**Things to do
 * Create a test hardness for searching
 *
 * get request for fields to filter when searching
 * reset input using useeffect
 */

export const AladdinSearchbar: React.FC = (props) => {
  const { handleSubmit, register } = useForm<ISearchForm>();

  const onSubmit = (data: ISearchForm) => {
    console.log('Current data:', data);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="form-inline search-form d-"
    >
      <div className="d-flex">
        <input
          className="form-control form-control-sm ml-3 w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <MDBIcon icon="search" alt="search-icon" />
      </div>
    </form>
  );
};

export default AladdinSearchbar;
