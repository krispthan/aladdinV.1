import './features-resources.scss';
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import { MDBContainer } from 'mdbreact';

/* eslint-disable-next-line */

export const FeaturesResources: React.FC = (props) => {
  const resourcesContent = [
    {
      title: 'What Is Epigenetics?',
      content:
        'Some quick example text to build on the card title and make up the...',
    },
    {
      title: 'Learn More About Bisulfite Conversion',
      content:
        'Some quick example text to build on the card title and make up the...',
    },
    {
      title: 'Excel Resources',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt consequatur dignissimos omnis enim, quibusdam incidunt, vero excepturi eos illum quaerat non alias minima, saepe repellendus ad neque veritatis asperiores!',
    },
  ];
  const renderResourcesContent = resourcesContent.map((resource, index) => {
    return (
      <MDBCol md="4">
        <MDBCard className="resources-card mb-2">
          <MDBCardBody>
            <MDBCardTitle>{resource.title}</MDBCardTitle>
            <MDBCardText>{resource.content}</MDBCardText>
            <a href="#">Learn More</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  });
  return (
    <MDBContainer className="resources-container">
      <h1>Resources</h1>
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={false}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              {renderResourcesContent}
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default FeaturesResources;
