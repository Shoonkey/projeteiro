import React from 'react';

import { ThemedContainer } from './styles';

function Page({ children, ...props }) {
  return <ThemedContainer {...props}>{children}</ThemedContainer>;
}

export default Page;