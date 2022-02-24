import { RcSnackbarContent, styled, palette2 } from '@ringcentral/juno';
import React, { FunctionComponent } from 'react';

const StyledSnackbarContent = styled(RcSnackbarContent)`
  background-color: ${palette2('action', 'primary')};
`;

export type CustomSnackbarContentProps = {};
export const CustomSnackbarContent: FunctionComponent<CustomSnackbarContentProps> =
  ({}) => {
    return <StyledSnackbarContent message="Custom snackbar background color" />;
  };
