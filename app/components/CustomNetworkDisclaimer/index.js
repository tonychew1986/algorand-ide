/**
 *
 * CustomNetworkDisclaimer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import DisclaimerStyles from './DisclaimerStyles';

function CustomNetworkDisclaimer(props) {
  const {
    enablePureStake
  } = props;
  
  return (
    <DisclaimerStyles className={(enablePureStake == true) ? "" : "hide"}>
      <div>
        Custom network is selected. Switch back to default network in settings.
      </div>
    </DisclaimerStyles>
  );
}

CustomNetworkDisclaimer.propTypes = {};

export default CustomNetworkDisclaimer;
