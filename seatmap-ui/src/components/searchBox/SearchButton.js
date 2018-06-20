import React from 'react';

class SearchButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowTooltip: false,
      type: props.type,
      tooltip: props.tooltip
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMourseOut = this.handleMourseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({isShowTooltip: !this.state.isShowTooltip});
  }

  handleMourseOut() {
    this.setState({isShowTooltip: !this.state.isShowTooltip});
  }

  render() {
    let buttonId = `searchbox-${this.state.type}`;
    let searchButtonClassName = `${buttonId} ${this.state.isShowTooltip ? "show-tooltip" : ""}`;
    let containerClassName = `searchbox-${this.state.type}-container`;
    return (
      <div className={containerClassName} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMourseOut}>
        <button id={buttonId} className={searchButtonClassName}></button>
        <span className="omnibox-tooltip">{this.state.tooltip}</span>
      </div>
    );
  }
}

export default SearchButton;