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
          </g>
        </svg>
      </div>
    );
  }
}

export default Dimensions()(FullMap);