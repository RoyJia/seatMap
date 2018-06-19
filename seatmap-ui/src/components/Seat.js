import React from 'react';
import PropTypes from 'prop-types';

class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      userInfo: props.userInfo || {userName: '', shortName: '', teamName: '', jobTitle: '', skills: ['none']},
      width: 50,
      height: 25,
      userInfoCoordinate: {
        x: props.x,
        y: props.y
      }
    };
  }

  componentDidMount() {
    var userInfoCoordinate = {
      x: this.props.x + this.state.width/2,
      y: this.props.y + this.state.height/2
    }
    this.setState({userInfoCoordinate: userInfoCoordinate});
  }

  render() {
    var id = `seat_${this.props.id}`;
    return (
      <g id={id} >
        <rect width={this.state.width} height={this.state.height} x={this.state.x} y={this.state.y} strokeWidth="1.5" stroke="#000000" fill="#49DD8E"/>
        <text id={'text_' + id} x={this.state.userInfoCoordinate.x} y={this.state.userInfoCoordinate.y}  fill="#333" textAnchor="middle" dominantBaseline="central">{this.state.userInfo.shortName}</text>
      </g>
    )
  }
}

Seat.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  userInfo: PropTypes.object
}

export default Seat;