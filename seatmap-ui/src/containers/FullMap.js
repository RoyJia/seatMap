import React from 'react';
import Seat from '../components/Seat';
import SearchBox from '../components/searchBox/SearchBox';
import data from '../data.json';
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
              data.map((item) => {
                return <Seat key={item.seat.id} {...item.seat}/>;
              })
            }

            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="100" y="300" width="200" height="60" id="svg_132" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="100" y="480" width="300" height="160" id="svg_133" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1500" y="280" width="100" height="40" id="svg_134" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1500" y="320" width="100" height="40" id="svg_135" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1500" y="360" width="100" height="40" id="svg_136" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1500" y="400" width="100" height="40" id="svg_137" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1500" y="440" width="100" height="40" id="svg_138" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1250" y="440" width="200" height="40" id="svg_139" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1100" y="560" width="150" height="40" id="svg_140" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1100" y="600" width="150" height="40" id="svg_141" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1100" y="640" width="150" height="40" id="svg_142" rx="15"/>
            <rect fill="#fff" stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="1100" y="680" width="150" height="120" id="svg_143" rx="15"/>
            <rect stroke="#000" fill="#fff" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="550" y="80" width="150" height="100" id="svg_178" rx="15"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default Dimensions()(FullMap);