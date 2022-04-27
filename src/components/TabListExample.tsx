import {
  RcPaper,
  RcTab,
  RcTabList,
  RcTabContext,
} from '@ringcentral/juno';
import React, { useMemo } from 'react';
import { FunctionComponent } from 'react';
import { AliveTabPanel} from './AliveTabPanel';

export interface TabsExampleProps {}

type tabData = {
  label: string;
  value: string;
  tabs?: tabData[];
}

const tabsDataA = [
  { label: 'Tab A 1', value: 'tab-A-1', },
  { label: 'Tab A 2', value: 'tab-A-2', },
  { label: 'Tab A 3', value: 'tab-A-3', },
  { label: 'Tab A 4', value: 'tab-A-4', },
  { label: 'Tab A 5', value: 'tab-A-5', },
  { label: 'Tab A 6', value: 'tab-A-6', },
  { label: 'Tab A 7', value: 'tab-A-7', },
  { label: 'Tab A 8', value: 'tab-A-8', },
]

const tabsDataB = [
  { label: 'Tab B 1', value: 'tab-B-1', },
  { label: 'Tab B 2', value: 'tab-B-2', },
  { label: 'Tab B 3', value: 'tab-B-3', },
  { label: 'Tab B 4', value: 'tab-B-4', },
  { label: 'Tab B 5', value: 'tab-B-5', },
  { label: 'Tab B 6', value: 'tab-B-6', },
  { label: 'Tab B 7', value: 'tab-B-7', },
  { label: 'Tab B 8', value: 'tab-B-8', },
]

const sectionData = [
  { label: 'Section 1', value: 'tab-1', tabs: tabsDataA },
  { label: 'Section 2', value: 'tab-2', tabs: tabsDataB },
];

const TabsExampleView: FunctionComponent<
  TabsExampleProps
> = () => {
  const [value, setValue] = React.useState('tab-1');
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };

  const getChildren = (data: tabData[]) => data.map((tab: tabData) => {
    const { label, value, ...rest } = tab;
    return (
      <RcTab
        key={value}
        label={label}
        value={value}
        {...rest}
      />
    );
  });

  const TabPanels = useMemo(() => sectionData.map((section) => {
    const { tabs, value } = section;
    return (
      <AliveTabPanel
        key={value}
        value={value}
      >
        <RcTabContext value={tabs[0].value}>
          <RcTabList
            variant="moreMenu"
            onChange={handleChange}
          >
            {getChildren(tabs)}
          </RcTabList>
        </RcTabContext>
      </AliveTabPanel>
    );
  }), [sectionData]);

  return (
    <>
      <RcPaper square>
        <RcTabContext value={value}>
          <RcTabList
            variant="moreMenu"
            onChange={handleChange}
          >
            {getChildren(sectionData)}
          </RcTabList>
          {TabPanels}
        </RcTabContext>
      </RcPaper>
    </>
  );
};

export const TabListExample: FunctionComponent<TabsExampleProps> = ({}) => {

  return (
    <>
      <TabsExampleView />
    </>
  );
};
