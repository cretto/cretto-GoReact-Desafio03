import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ViewportActions } from '../../store/ducks/viewport';
import { Creators as UserActions } from '../../store/ducks/users';

import { Container } from './styles';

import Card from '../Card';

const List = ({ users, removeUser, setLongitudeLatitude }) => (
  <Container>
    {users.map(user => (
      <Card
        {...user}
        key={user.id}
        onClickRemove={id => removeUser(id)}
        onClick={({ longitude, latitude }) => {
          setLongitudeLatitude(longitude, latitude);
        }}
      />
    ))}
  </Container>
);

List.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      login: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
  ).isRequired,
  removeUser: PropTypes.func.isRequired,
  setLongitudeLatitude: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ViewportActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
