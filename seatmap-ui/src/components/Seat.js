import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Seat.css';

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
    var seat_id = `seat_${this.props.id}`;
    var seat_rect_id = `seat_rect_${this.props.id}`;
    var seat_text_id = `seat_text_${this.props.id}`;
    var skills = 'Skills: ';
    this.state.userInfo.skills.forEach(element => {
      skills = skills + element + ",";
    });
    var seat_title = this.state.userInfo.userName + ' - ' + this.state.userInfo.teamName + ' - ' + this.state.userInfo.jobTitle + ' - '
      + skills.substring(0, skills.length - 1);
      
    return (
      <g id={seat_id}>
        <title>{seat_title}</title>
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