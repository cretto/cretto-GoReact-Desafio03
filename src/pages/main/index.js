import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import Modal from '../../components/Modal';
import Map from '../../components/Map';
import List from '../../components/List';

class Main extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    showModal: false,
    currLocation: {
      latitude: null,
      longitude: null,
    },
  };

  handleOpenModal = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.setState({ showModal: true, currLocation: { latitude, longitude } });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleSaveModal = (user) => {
    const { currLocation } = this.state;
    const { addUserRequest } = this.props;
    addUserRequest(user, { ...currLocation });
    this.setState({ showModal: false, currLocation: { latitude: null, longitude: null } });
  };

  render() {
    const { showModal } = this.state;
    return (
      <Fragment>
        {showModal && <Modal onCancel={this.handleCloseModal} onSave={this.handleSaveModal} />}
        <Map onClickLocation={this.handleOpenModal} />
        <List />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
