import React from 'react';
import Exception from '../Exception';

// 404页面
function NoMatch(props) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
      }}
    >
      {/* <img src={img404} alt="404 Not Found" style={{marginTop: '100px', width: '60%'}}/> */}
      <Exception type="404" />
    </div>
  );
}

export default NoMatch;
