import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Spinner = ({ spinnerProps }) => {
  const { height = 40, width = 40, borderThickness = '3px', borderTopThickness = '1px', borderColor = '#37474F', animationDuration = 1 } = spinnerProps || {};

  return (
    <div className="yeci-spinner-loading-overlay">
      <div className="loading-spinner" style={{ 
        border: `${borderThickness} dashed ${borderColor}`,
        borderRadius: '50%',
        borderTop: `${borderTopThickness} dashed transparent`,
        width: `${width}px`,
        height: `${height}px`,
        animation: `spin ${animationDuration}s linear infinite`,
      }}>
        {/* loading spinner */}
      </div>
    </div>
  );
};

Spinner.propTypes = {
  spinnerProps: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    borderColor: PropTypes.string,
    animationDuration: PropTypes.number,
  }),
};

export default Spinner;