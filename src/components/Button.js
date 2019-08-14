import React from 'react';

export default ({onClick, value}) => (
    <button className="ui pink basic button" onClick={onClick}>{value}</button>);