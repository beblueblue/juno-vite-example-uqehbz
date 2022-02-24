import { palette2, RcMenuItem, RcSplitButton, styled } from '@ringcentral/juno';
import React, { FunctionComponent, useMemo, Fragment } from 'react';

interface CustomSplitButtonProps {
  text?: string;
  highLightText?: string;
}

export const CustomSplitButton: FunctionComponent<CustomSplitButtonProps> = ({
  text = '',
  highLightText = '',
  ...rest
}) => {
  return (
    <RcSplitButton
      MenuProps={{
        keepMounted: true,
      }}
      variant="round"
    >
      <RcMenuItem
        key={'1'}
        title="Text"
        onClick={(e) => console.log('Text', e)}
      >
        Sign in with Outlook
      </RcMenuItem>
      <RcMenuItem
        title="cool"
        useRcTooltip
        key={'2'}
        onClick={(e) => {
          console.log('Task', e);
        }}
      >
        Sign in with Google
      </RcMenuItem>
      <RcMenuItem
        key={'3'}
        title="cool"
        useRcTooltip
        onClick={(e) => {
          console.log('Cool, that stopPropagation, so not close menu', e);
          e.stopPropagation();
        }}
      >
        Sign in with Exchange
      </RcMenuItem>
    </RcSplitButton>
  );
};
