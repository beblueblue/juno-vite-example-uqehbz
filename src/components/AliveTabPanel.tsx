
import React, { forwardRef } from 'react';
import { styled, useTabContext, getPanelId, getTabId } from '@ringcentral/juno';

type AliveTabPanelProps = {
  value: string;
  children: React.ReactNode;
} & React.ComponentProps<'div'>;
const AliveTabPanelRoot = styled.div`
  min-height: 0px;
`;

// RcTabPanel based on MuiTabPanel that will unmount children when component is hidden
// cc https://github.com/mui/material-ui/blob/ba2fce43a735f6085e68c2d76ab746a098488862/packages/mui-lab/src/TabPanel/TabPanel.js#L56
// AliveTabPanel do not unmount children
const AliveTabPanel = forwardRef<any, AliveTabPanelProps>(
  (inProps: AliveTabPanelProps, ref) => {
    const { children, value, ...other } = inProps;

    const context = useTabContext();
    if (context === null) {
      throw new TypeError('No RcTabContext provided');
    }
    const id = getPanelId(context, value);
    const tabId = getTabId(context, value);

    return (
      <AliveTabPanelRoot
        aria-labelledby={tabId}
        hidden={value !== context.value}
        id={id}
        ref={ref}
        role="tabpanel"
        {...other}
      >
        {children}
      </AliveTabPanelRoot>
    );
  },
);

AliveTabPanel.displayName = 'AliveTabPanel';

export { AliveTabPanel };
