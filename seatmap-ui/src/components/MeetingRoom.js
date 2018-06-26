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

    // setup font size
    let textLength = 0, lengthAdjust = 'spacing';
    if(this.state.roomInfo.name.length > this.state.width/10) {
      textLength = 105;
      lengthAdjust = 'spacingAndGlyphs';
    }

    // setup meetingRoom title
    let facilities = "Facilities:\t", title = null;
    this.state.roomInfo.facilities.forEach(element => {
      facilities = facilities + element + ", ";
    });

    const meetingRoom_title = "Name:\t" + this.state.roomInfo.name + '\n' +
      'TEL:\t' + this.state.roomInfo.tel + '\n' +
      'Capability:\t' + this.state.roomInfo.capability + '\n' +
      facilities.substring(0, facilities.length - 2) + '\n' +
      'Description:\t' + this.state.roomInfo.description;

    title = <title>{meetingRoom_title}</title>;

    return (
      <g id={meetingRoom_id}>
        {title}
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
          x={this.state.roomInfoCoordinate.x}
          y={this.state.roomInfoCoordinate.y}
          textLength={textLength}
          lengthAdjust={lengthAdjust}
        >{this.state.roomInfo.name}</text>
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