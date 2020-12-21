import './features-faq.scss';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBCollapseHeader,
  MDBIcon,
  MDBInput,
} from 'mdbreact';
import { useForm } from 'react-hook-form';
import { IFAQAccordionProps, IFAQFormData } from './models/collapsible-tabs';
/*****Things to do:
 * add content
 * add image to the right col
 */

export const FeaturesFaq: React.FC = () => {
  const { register, handleSubmit } = useForm<IFAQFormData>();

  const [collapsible, setCollapsible] = useState<number>(0);

  const handleCollapsibleTabs = (collapseId) => {
    setCollapsible(collapsible !== collapseId ? collapseId : -1);
  };
  const onSubmit = (data: IFAQFormData) => {
    console.log('data', data);
  };
  const fakeData = [
    { title: 'Question 1', content: 'loremdsfsfdsfsdf' },
    { title: 'Question 2', content: 'loremdsfsfdsfsdf' },
    { title: 'Question 3', content: 'loremdsfsfdsfsdf' },
    { title: 'Question 4', content: 'loremdsfsfdsfsdf' },
    { title: 'Question 5', content: 'loremdsfsfdsfsdf' },
    { title: 'Question 6', content: 'loremdsfsfdsfsdf' },
    { title: 'Question 7  ', content: 'loremdsfsfdsfsdf' },
  ];

  const renderAccordionCard = fakeData.map((tab, index) => {
    return (
      <MDBCard key={index} className="mt-3">
        <MDBCollapseHeader tag="p"
          tagClassName="d-flex justify-content-between"
          onClick={() => handleCollapsibleTabs(index)}
        >
          {tab.title}
          <MDBIcon icon={collapsible === index ? 'minus' : 'plus'} />
        </MDBCollapseHeader>
        <MDBCollapse id={'' + index} isOpen={'' + collapsible === '' + index}>
          <MDBCardBody>{tab.content}</MDBCardBody>
        </MDBCollapse>
      </MDBCard>
    );
  });
  return (
    <MDBContainer className="faq-container md-accordion">
      <MDBRow>
        <MDBCol lg="8">
          <h1 className="pt-3">FAQ</h1>
          {renderAccordionCard}
        </MDBCol>
        <MDBCol lg="4" className="faq-form-col">
          {/* <img src="" alt="Question icon Image"> */}
    <h1>images goes here </h1>
          <div className="faq-submission px-3 ">
            <div className="faq-question">
              <p>Didn't find your answer?</p>
              <p>Submit your question below</p>
            </div>
            <form
              method="post"
              onSubmit={handleSubmit(onSubmit)}
              className="faq-form"
            >
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label="Question"
                    name="question"
                    type="textarea"
                    required
                    inputRef={register}
                  />
                </MDBCol>
              </MDBRow>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FeaturesFaq;
