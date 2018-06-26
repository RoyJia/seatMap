import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MeetingRoom.css';

class MeetingRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      roomInfo: props.roomInfo || {name: '', tel: '', capability: '', facilities: ['none'], description: ''},
      roomInfoCoordinate: {
        x: props.x,
        y: props.y
      },
      isOccupied: props.isOccupied || false
    }
  }

  componentDidMount() {
    let roomInfoCoordinate = {
      x: this.props.x + this.state.width/2,
      y: this.props.y + this.state.height/2
    }
    this.setState({roomInfoCoordinate: roomInfoCoordinate});
  }

  render() {
    let meetingRoom_id = `meetingRoom_${this.props.id}`,
      meetingRoom_rect_id = `meetingRoom_rect_${this.props.id}`,
      meetingRoom_text_id = `meetingRoom_text_${this.props.id}`;

    let facilities = "Facilities:\t";
    this.state.roomInfo.facilities.forEach(element => {
      facilities = facilities + element + ", ";
    });

    let textX = this.state.roomInfoCoordinate.x;

    return (
      <g id={meetingRoom_id}>
        <rect
          className="MeetingRoom_rect"
          id={meetingRoom_rect_id}
          width={this.state.width}
          height={this.state.height}
          x={this.state.x}
          y={this.state.y}/>
        <text
          className="MeetingRoom_text"
          id={meetingRoom_text_id}
          x={textX}
          y={this.state.roomInfoCoordinate.y}
        >
          <tspan x={textX} dy="1em">{`RoomName: ${this.state.roomInfo.name}`}</tspan>
          <tspan x={textX} dy="1em">{`TEL: ${this.state.roomInfo.tel}`}</tspan>
          <tspan x={textX} dy="1em">{`Capability: ${this.state.roomInfo.capability}`}</tspan>
          <tspan x={textX} dy="1em">{facilities.substring(0, facilities.length - 2)}</tspan>
          <tspan x={textX} dy="1em">{`Description: ${this.state.roomInfo.description}`}</tspan>
        </text>
      </g>
    )
  }
}

MeetingRoom.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  roomInfo: PropTypes.object,
  isOccupied: PropTypes.bool
}

export default MeetingRoom;