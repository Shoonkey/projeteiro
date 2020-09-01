import { useEffect, useRef, cloneElement } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Tooltip({ reference, children, ...props }){

  const ref = useRef();

  useEffect(() => {
    let elementRef = reference ? reference.current : ref.current;
    if (elementRef)
      tippy(elementRef, props);
  });

  if (reference)
    return null;

  return children && cloneElement(children, { ref });

};

export default Tooltip;