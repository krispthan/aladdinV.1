import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './footer.scss';
import { render } from '@testing-library/react';

/* eslint-disable-next-line */
export interface IFooterProps {
  navList: IFooterNavItems[];
}
export interface IFooterNavItems {
  id: number;
  title: string;
}
//things to do
//map through the links and

export const Footer: React.FC = () => {
  const footerBackground = {
    backgroundColor: '#3D1A85',
  };
  const socialContacts = [
    { icon: 'facebook-f' },
    { icon: 'twitter' },
    { icon: 'instagram' },
    { icon: 'linkedin-in' },
  ];
  const renderSocialContacts = socialContacts.map((social, index) => {
    return (
      <li key={index}>
        <MDBIcon fab icon={social.icon} />
      </li>
    );
  });

  const footerLinks = [
    { title: 'SERVICES', a: '#', name: 'Resources' },
    { title: 'SERVICES', a: '#', name: 'Resources' },
    { title: 'SERVICES', a: '#', name: 'Resources' },
    { title: 'SERVICES', a: '#', name: 'Resources' },
  ];
  const renderFooterLinks = footerLinks.map((link, index) => {
    return (
      <li key={index} className="list-unstyled pt-2">
        <a href="#!">{link.name}</a>
      </li>
    );
  });
  return (
    <MDBFooter style={footerBackground} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="d-flex">
          <MDBCol className="footer-logo">
            <h5>Aladdin Logo</h5>
          </MDBCol>
          <MDBCol>
            <h6 className="title ml-5">SERVICES</h6>
            <MDBCol>
              <ul>{renderFooterLinks}</ul>
            </MDBCol>
          </MDBCol>
          <MDBCol>
            <h6 className="title ml-5">RESOURCES</h6>
            {/* <ul ul>{renderFooterItems}</ul> */}
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className="social-contacts-col" size="2">
            <ul className="social-contacts">{renderSocialContacts}</ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="copyright-footer text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href="https://www.mdbootstrap.com">Aladdin </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
