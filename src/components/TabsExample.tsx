import {
  RcButton,
  RcPaper,
  RcTab,
  RcTabs,
  useForceUpdate,
} from '@ringcentral/juno';
import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';

export interface TabsExampleProps {}

const tabsData = [
  { label: 'Tab 0', value: 'tab-0', 'data-test-automation-id': 'tab-test-0' },
  { label: 'Tab 1', value: 'tab-1', 'data-test-automation-id': 'tab-test-1' },
  { label: 'Tab 2', value: 'tab-2', 'data-test-automation-id': 'tab-test-2' },
  { label: 'Tab 3', value: 'tab-3', 'data-test-automation-id': 'tab-test-3' },
  { label: 'Tab 4', value: 'tab-4', 'data-test-automation-id': 'tab-test-4' },
  {
    label: 'Tab 5',
    value: 'tab-5',
    disabled: true,
    'data-test-automation-id': 'tab-test-5',
  },
  { label: 'Tab 6', value: 'tab-6', 'data-test-automation-id': 'tab-test-6' },
  {
    label: 'Tab 77777777',
    value: 'tab-7',
    'data-test-automation-id': 'tab-test-7',
  },
  { label: 'Tab 8', value: 'tab-8', 'data-test-automation-id': 'tab-test-8' },
  { label: 'Tab 9', value: 'tab-9', 'data-test-automation-id': 'tab-test-9' },
];

const TabsExampleView: FunctionComponent<
  TabsExampleProps & { isChanged: boolean }
> = ({ isChanged }) => {
  console.log(isChanged);
  const [index, setIndex] = useState(0);
  const [value, setValue] = React.useState('tab-0');
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };

  const TabChildren = tabsData.map((tab) => {
    const { label, value, disabled, ...rest } = tab;
    return (
      <RcTab
        key={label}
        label={`${label}${index}${isChanged}`}
        value={value}
        disabled={disabled}
        {...rest}
      />
    );
  });

  return (
    <>
      <RcPaper square>
        <RcTabs value={value} onChange={handleChange} variant="moreMenu">
          {TabChildren}
        </RcTabs>
      </RcPaper>
      <RcPaper square>
        <RcTabs value={value} onChange={handleChange} variant="moreMenu">
          {TabChildren}
        </RcTabs>
      </RcPaper>
      <RcButton
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        click
      </RcButton>
    </>
  );
};

export const TabsExample: FunctionComponent<TabsExampleProps> = ({}) => {
  const [isChanged, setChangeed] = useState(false);

  return (
    <>
      <TabsExampleView isChanged={isChanged} />
      <RcButton
        onClick={() => {
          setChangeed(!isChanged);
        }}
      >
        change tabs props
      </RcButton>
    </>
  );
};
