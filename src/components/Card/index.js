import React from 'react';
import PropTypes from 'prop-types';

import { Container, Info, Action } from './styles';

const Card = ({
  id, name, login, avatarUrl, onClickRemove, onClick, location,
}) => (
  <Container>
    <Info>
      <img src={avatarUrl} alt="avatar" />
      <div>
        <strong>{name}</strong>
        {login}
      </div>
    </Info>
    <Action>
      <button type="button" onClick={() => onClickRemove(id)}>
        <i className="fa fa-times remove-button" />
      </button>
      <button type="button" onClick={() => onClick(location)}>
        <i className="fa fa-angle-right detail-button" />
      </button>
    </Action>
  </Container>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  location: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
  }).isRequired,
  onClickRemove: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  avatarUrl: '',
  name: '',
};

export default Card;
