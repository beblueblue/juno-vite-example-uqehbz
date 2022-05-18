import {
  RcIconButton,
  RcIconButtonProps,
  RcPaper,
  RcGrid,
} from '@ringcentral/juno';
import Computer from '@ringcentral/juno-icon/Computer';
import React from 'react';
import { FunctionComponent } from 'react';

export interface IconButtonExampleProps {}


const IconButtonExampleView: FunctionComponent<
IconButtonExampleProps
> = () => {

  return (
    <>
      <RcPaper square>
      <RcGrid>
        <h2>{'disabled={true} + alwaysEnableTooltip'}</h2>
        <br />
        <br />
        <RcIconButton
          color="neutral.f04"
          symbol={Computer}
          tooltipTitle={'It should have a tooltip'}
          onClick={() => {}}
          variant="outline"
          size="medium"
          disabled={true}
          alwaysEnableTooltip
          aria-label={'It should have a tooltip'}
        />
      </RcGrid>
      <RcGrid>
        <h2>{'disabled={false} + alwaysEnableTooltip'}</h2>
        <br />
        <br />
        <RcIconButton
          color="neutral.f04"
          symbol={Computer}
          tooltipTitle={'It should have a tooltip'}
          onClick={() => {}}
          variant="outline"
          size="medium"
          disabled={false}
          alwaysEnableTooltip
          aria-label={'It should have a tooltip'}
        />
      </RcGrid>
      </RcPaper>
    </>
  );
};

export const IconButtonExample: FunctionComponent<RcIconButtonProps> = ({}) => {

  return (
    <>
      <IconButtonExampleView />
    </>
  );
};
