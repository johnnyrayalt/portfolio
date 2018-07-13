import React from 'react';
import PropTypes from 'prop-types';

function ContentDisplayProjectsList(props) {
  return(
    <div value={props.value} className='contentDisplayProjectsListContainer'>
      Projects List {props.value}
    </div>
  );
}

ContentDisplayProjectsList.propTypes = {
  value: PropTypes.number
};

export default ContentDisplayProjectsList;
