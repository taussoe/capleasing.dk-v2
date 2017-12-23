import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Menu from '../components/menu'
import Flexboxgrid from 'flexboxgrid'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Cap Leasing" />
    <Menu />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
