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
    this.seatColor = this.seatColor.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let userInfoCoordinate = {
      x: this.props.x + this.state.width/2,
      y: this.props.y + this.state.height/2
    }
    this.setState({userInfoCoordinate: userInfoCoordinate});
  }

  seatColor() {
    switch(this.state.userInfo.team) {
    case "Everest Deprecation": return "#ffde00";
    case "Quality Engineering": return "#ffba54";
    case "PE": return "#ffffcc";
    case "OP": return "#ff0000";
    case "GRO": return "#ff8053";
    case "Hotels.com": return "#ff9bd4";
    case "Platform": return "#d3cdff";
    case "FESI": return "#ff5bc2";
    case "LPAS and LIS DB": return "#ffd1a1";
    case "Package and UDP": return "#ff858c";
    case "Performance Testing": return "#b98d8d";
    case "EPC Content": return "#99ccff";
    case "EPC Review": return "#95ffd6";
    case "LIS BNOS": return "#6a8aff";
    case "LIS MIPS": return "#58b3ff";
    case "LIS V2": return "#948fff";
    case "EWS/Dev&Testing_Autobots": return "#adff95";
    case "EWS/Dev&Testing_BizOps": return "#33ff00";
    case "EWS/Dev&Testing_DreamWeaver": return "#99ff04";
    case "EWS/Dev&Testing_EasternPirates": return "#43c9a1";
    case "LPS": return "#25b800";
    default: return "#cccccc"
    }
  }

  // handleClick() {
  //   // alert(this.state.userInfo.fullName);
  //   this.setState(prevState => ({
  //     width: prevState.width+20
  //   }));
  // }

  render() {
    let seat_id = `seat_${this.props.id}`,
      seat_rect_id = `seat_rect_${this.props.id}`,
      seat_text_id = `seat_text_${this.props.id}`;

    // setup font size
    let textLength = 0, lengthAdjust = 'spacing';
    if(this.state.userInfo.shortName.length > 7) {
      textLength = 55;
      lengthAdjust = 'spacingAndGlyphs';
    }

    // setup seat title
    let skills = 'Skills:\t', title = null;
    this.state.userInfo.skills.forEach(element => {
      skills = skills + element + ", ";
    });

    const seat_title = "Name:\t" + this.state.userInfo.fullName + '\n' +
      'Team:\t' + this.state.userInfo.team + '\n' +
      'Title:\t' + this.state.userInfo.title + '\n' +
      'Email:\t' + this.state.userInfo.email + '\n' +
      'Phone:\t' + this.state.userInfo.phone + '\n' +
      skills.substring(0, skills.length - 2);

    // title only if seat occupied
    if (this.state.isOccupied) {
      title = <title>{seat_title}</title>;
    }

    return (
      <g id={seat_id}>
        {title}
        <rect
          className="Seat_rect"
          id={seat_rect_id}
          fill={this.seatColor()}
          width={this.state.width}
          height={this.state.height}
          x={this.state.x}
          y={this.state.y}/>
        <text
          className="Seat_text"
          id={seat_text_id}
          x={this.state.userInfoCoordinate.x}
          y={this.state.userInfoCoordinate.y}
          textLength={textLength}
          lengthAdjust={lengthAdjust}
        >{this.state.userInfo.shortName}</text>
      </g>
    )
  }
}

Seat.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  userInfo: PropTypes.object,
  isOccupied: PropTypes.bool
}

export default Seat;