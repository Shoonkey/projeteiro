import { useRef, cloneElement, useLayoutEffect } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Tooltip({ children, ...props }){

  const ref = useRef();

  useLayoutEffect(() => {
    tippy(ref.current, props);
  });

  return children && cloneElement(children, { ref });
};

export default Tooltip;