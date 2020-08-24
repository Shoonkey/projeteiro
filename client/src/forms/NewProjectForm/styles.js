import styled from 'styled-components';

import Form from '../../components/Form';

export const Container = styled(Form)`

  .input-container {

    &:not(:first-child){ margin-top: 1em; }

    label { font-size: 1.3em; }
    input { letter-spacing: 1px; }

  }

`;