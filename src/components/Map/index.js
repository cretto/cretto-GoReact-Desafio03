import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ViewportActions } from '../../store/ducks/viewport';

import { ImageMarker } from './styles';

class Map extends Component {
  static propTypes = {
    onClickLocation: PropTypes.func.isRequired,
    setLongitudeLatitude: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatarUrl: PropTypes.string,
        location: PropTypes.shape({
          longitude: PropTypes.number,
          latitude: PropTypes.number,
        }),
      }),
    ).isRequired,
    viewport: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  };

  constructor(...args) {
    super(...args);
    this.handleViewportChange = this.handleViewportChange.bind(this);
  }

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: null,
      longitude: null,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleViewportChange(viewport) {
    const { setLongitudeLatitude } = this.props;
    const { longitude, latitude } = viewport;
    this.setState({ viewport });
    setLongitudeLatitude(longitude, latitude);
  }

  render() {
    const {
      users,
      onClickLocation,
      viewport: { latitude, longitude },
    } = this.props;
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        latitude={latitude}
        longitude={longitude}
        onClick={onClickLocation}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiaGVucmlxdWVwZXJlaXJhIiwiYSI6ImNqbGw1Y2ljdDB1MXQzcG9hZnhuanZndXYifQ.OFV4G46_QUvDw-fx_G6oXg"
        onViewportChange={this.handleViewportChange}
      >
        {users.map(user => (
          <Marker
            key={user.id}
            latitude={user.location.latitude}
            longitude={user.location.longitude}
            onClick={() => {}}
            captureClick
          >
            <ImageMarker src={user.avatarUrl} alt="Avatar" />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.list,
  viewport: state.viewport,
});

const mapDispatchToProps = dispatch => bindActionCreators(ViewportActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
