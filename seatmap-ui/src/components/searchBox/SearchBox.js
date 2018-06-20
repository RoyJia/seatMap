import React from 'react';
import SearchButton from './SearchButton';
import '../../styles/SearchBox.css'



class SearchBox extends React.Component {

  render() {
    return (
      <div id="omnibox-container">
        <div id="omnibox" className="vasquette-margin-enabled noprint">
          <div id="omnibox-singlebox" style={{textAlign: "left"}}>
            <div className="omnibox-singlebox-root omnibox-active">
              <SearchButton type="hamburger" tooltip="Menu" />
              <div id="searchbox" role="search" className="searchbox searchbox-shadow noprint directions-button-shown searchbox-empty">
                <form id="searchbox_form" onSubmit="return false;" className="initial-searchbox-wrapper">
                  <div className="gstl_50 sbib_a">
                    <div className="sbib_d" id="sb_chc50" dir="ltr"></div>
                    <div className="gsst_b sbib_c" id="gs_st50" dir="ltr"></div>
                    <div className="sbib_b" id="sb_ifc50" dir="ltr">
                      <div id="gs_lc50" style={{position: "relative"}}>
                        <input autoFocus="autofocus" value="" autoComplete="off" id="searchboxinput" name="q" className="tactile-searchbox-input" placeholder="Search Anyone" />
                        <input className="tactile-searchbox-input" disabled="" autoComplete="off" autoCapitalize="off" aria-hidden="true" id="gs_htif50" dir="ltr" />
                      </div>
                    </div>
                  </div>
                </form>
                <SearchButton type="searchbutton" tooltip="Search" />
                <a className="gsst_a" href="javascript:void(0)" style={{visibility: "hidden"}} role="button"
                   tooltip="Clear search" aria-label="Clear search" guidedhelpid="clear_search">
                  <span className="sbcb_a" id="sb_cb50" aria-label="Clear search"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox;