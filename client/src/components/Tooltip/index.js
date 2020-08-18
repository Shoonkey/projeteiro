import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// A pretty redundant component built so tippy.js's default CSS can be imported once instead of
// every time its tooltip component is used
function Tooltip(props){
  return <Tippy {...props} />;
};

export default Tooltip;