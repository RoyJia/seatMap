import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Seat.css';

class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      userInfo: props.userInfo || {fullName: '', shortName: '', team: '', title: '', email: '', phone: '', skills: ['none']},
      width: 60,
      height: 25,
      userInfoCoordinate: {
        x: props.x,
        y: props.y
      },
      isOccupied: props.isOccupied || false
    };
  }

  componentDidMount() {
    let userInfoCoordinate = {
      x: this.props.x + this.state.width/2,
      y: this.props.y + this.state.height/2
    }
    this.setState({userInfoCoordinate: userInfoCoordinate});
  }

  render() {
    let seat_id = `seat_${this.props.id}`;
    let seat_rect_id = `seat_rect_${this.props.id}`;
    let seat_text_id = `seat_text_${this.props.id}`;
    let skills = 'Skills:\t';
    this.state.userInfo.skills.forEach(element => {
      skills = skills + element + ", ";
    });
    const seat_title = "Name:\t" + this.state.userInfo.fullName + '\n' +
      'Team:\t' + this.state.userInfo.team + '\n' +
      'Title:\t' + this.state.userInfo.title + '\n' +
      'Email:\t' + this.state.userInfo.email + '\n' +
      'Phone:\t' + this.state.userInfo.phone + '\n' +
      skills.substring(0, skills.length - 2);

    let title = null;
    if (this.state.isOccupied) {
      title = <title>{seat_title}</title>;
    }

    return (
      <g id={seat_id}>
        {title}
        <rect className="Seat_rect" id={seat_rect_id} width={this.state.width} height={this.state.height} x={this.state.x} y={this.state.y}/>
        <text className="Seat_text" id={seat_text_id} x={this.state.userInfoCoordinate.x} y={this.state.userInfoCoordinate.y}>{this.state.userInfo.shortName}</text>
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