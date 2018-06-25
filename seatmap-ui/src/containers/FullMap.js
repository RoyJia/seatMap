import React from 'react';
import Seat from '../components/Seat';
import MeetingRoom from '../components/MeetingRoom';
import SearchBox from '../components/searchBox/SearchBox';
import seatData from '../data.json';
import meetingRoomData from '../meetingRoom.json';
import * as d3 from 'd3';
import Dimensions from 'react-dimensions';

class FullMap extends React.Component {

  componentDidMount() {
    const contentWrap = d3.select('#contentWrap');
    const svg = d3.select('svg');
    // contentWrap.attr('pointer-events', 'none');

    const zoomed = () => {
      const {k, x, y} = d3.event.transform;
      contentWrap.attr('transform', `translate(${x}, ${y}) scale(${k})`);
    }

    const zoom = d3.zoom()
      .scaleExtent([1, 5])
      // .translateExtent([[-100, -100], [this.state.svgViewportWidth-500, this.state.svgViewportHeight-500]])
      .on('zoom', zoomed);

    svg.append('rect')
      .attr('class', 'mouse-capture')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', '100vw')
      .attr('height', '100vh')
      .style('fill', 'white')
      .lower() // put it below the map
      .call(zoom);
  }

  render () {
    return (
      <div>
        <SearchBox/>

        <svg
          width="100vw" height="100vh"
          // viewBox={[0, 0, this.state.svgViewportWidth, this.state.svgViewportHeight].join(' ')}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="contentWrap">
            {
              seatData.map((item) => {
                return <Seat key={item.seat.id} {...item.seat}/>;
              })
            }

            {
              meetingRoomData.map((item) => {
                return <MeetingRoom key={item.meetingRoom.id} {...item.meetingRoom}/>
              })
            }

            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="70" y="300" width="210" height="60" id="svg_132" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="70" y="480" width="300" height="160" id="svg_133" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1510" y="265" width="150" height="50" id="svg_134" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1510" y="315" width="150" height="50" id="svg_135" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1510" y="365" width="150" height="50" id="svg_136" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1510" y="415" width="150" height="50" id="svg_137" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1510" y="465" width="150" height="50" id="svg_138" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1270" y="465" width="210" height="50" id="svg_139" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1120" y="560" width="150" height="40" id="svg_140" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1120" y="600" width="150" height="40" id="svg_141" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1120" y="640" width="150" height="40" id="svg_142" rx="15"/>*/}
            {/*<rect fill="#fff" stroke="#000" strokeWidth="1" x="1120" y="680" width="150" height="120" id="svg_143" rx="15"/>*/}
            {/*<rect stroke="#000" fill="#fff" strokeWidth="1" x="520" y="80" width="150" height="100" id="svg_178" rx="15"/>*/}
          </g>
        </svg>
      </div>
    );
  }
}

export default Dimensions()(FullMap);