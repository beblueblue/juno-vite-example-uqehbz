import { RcThemeProvider } from '@ringcentral/juno';
import { CustomPopover } from './components/CustomPopover';
import { CustomSnackbarContent } from './components/CustomSnackbar';
import { CustomSplitButton } from './components/CustomSplitButton';
import { DataCard } from './components/DataCard';
import { FullDialer } from './components/Dialer';
import { TabsExample } from './components/TabsExample';
import { TabListExample } from './components/TabListExample';
import { IconButtonExample } from './components/IconButtonExample';

const App = () => {
  return (
    <RcThemeProvider>
      {/* <TabsExample />
      <CustomSplitButton />
      <DataCard />
      <CustomPopover>
        <FullDialer />
      </CustomPopover>
      <br />
      <br />
      <CustomSnackbarContent />
      <br /> */}
      {/* <TabListExample /> */}
      <IconButtonExample />
    </RcThemeProvider>
  );
};

export default App;
