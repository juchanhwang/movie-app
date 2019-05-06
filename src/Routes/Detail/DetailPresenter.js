import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetialPresenter = ({ result, loading, error }) =>
  null;

DetialPresenter.propTypes = {
  result: PropTypes.object, 
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default () => "DetailPresenter";