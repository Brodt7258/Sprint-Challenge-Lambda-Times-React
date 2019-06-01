import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        tabs.map(e => <Tab tab={e} key={e} selectTabHandler={selectTabHandler} selectedTab={selectedTab} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
