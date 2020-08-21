import React from 'react';

import { Container } from './styles';

function Page({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default Page;