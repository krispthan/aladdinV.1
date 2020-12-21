import './navigation.scss';
import React, { Component } from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import { AppRoute, SequencerRoute } from '@aladdin/domain-models';
import { withRouter } from 'react-router-dom';

/****Things to do refactor after authentication is complete *****/
export interface INavigationProps {
  navRoute?: INavLinkList[];
  location?: string;
}
export interface ILocation {
  pathname: string;
  search: string;
  hash: string;
}
interface INavLinkList {
  uid: string;
  route: string;
  title: string;
}
export const MainNavComponent = withRouter((props) => (
  <MainNavigation {...props} />
));
class MainNavigation extends Component<any> {
  constructor(props: INavigationProps) {
    super(props);
    this.state = {
      activeTabClassName: 'dashboard',
      collapsible: false,
    };
  }

  getInitialState = () => {
    return { activeTabClassName: 'dashboard' };
  };

  setActiveMenuItem = (uid: string): void => {
    this.setState({ activateMenuItemUId: uid });
  };

  handleCollapsible = () => {
    this.setState({
      collapsible: true,
    });
  };

  render() {
    console.log(this.props.location);
    const navItem = [
      { uId: 'dashboard', title: 'Dashboard', route: `/${AppRoute.sequencer}` },
      { uId: 'about', title: 'About', route: `/${AppRoute.about}` },
      { uId: 'contact', title: 'Contact Us', route: `/${AppRoute.contacts}` },
      { uId: 'faq', title: 'FAQ', route: `/${AppRoute.faq}` },
      { uId: 'resources', title: 'Resources', route: `/${AppRoute.resources}` },
    ];
    const renderNavList = navItem.map((navItem) => {
      console.log(
        'what is this location?',
        this.props.location.pathname.indexOf(navItem.uId)
      );
      return (
        <MDBNavItem key={navItem.uId}>
          <MDBNavLink
            to={navItem.route}
            active={this.props.location.pathname === navItem.route}
            onClick={() => this.setActiveMenuItem(navItem.uId)}
          >
            {navItem.title}
          </MDBNavLink>
        </MDBNavItem>
      );
    });

    const navBackground = { backgroundColor: '#3D1A85' };
    return (
      <MDBNavbar style={navBackground} dark expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <strong>Aladdin Logo </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.handleCollapsible} />
        <MDBCollapse navbar>
          <MDBNavbarNav left>{renderNavList}</MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    <Link to={`/${AppRoute.settings}/`}>Settings</Link>
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <Link to={`/${AppRoute.registration}/`}>Registration</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to={`/${AppRoute.login}/`}>Login</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
