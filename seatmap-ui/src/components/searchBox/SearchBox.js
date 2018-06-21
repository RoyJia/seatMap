import React from 'react';
import SearchButton from './SearchButton';
import '../../styles/SearchBox.css'



class SearchBox extends React.Component {

  render() {
    return (
      <div id="omnibox-container">
        <div id="omnibox">
          <div id="omnibox-container">
              <SearchButton type="hamburger" tooltip="Menu" />
              <div id="searchbox" className="searchbox searchbox-shadow searchbox-empty">
                <form id="searchbox_form" onSubmit="return false;">
                  <input id="searchboxinput" className="searchboxinput" placeholder="Search Anyone"/>
                </form>
                <SearchButton type="searchbutton" tooltip="Search" />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox;