import {
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
} from "@fluentui/react-components";
import {
  HomeRegular,
  HomeFilled,
  bundleIcon,
  SettingsFilled,
  SettingsRegular,
  PaymentFilled,
  PaymentRegular,
  HistoryFilled,
  HistoryRegular,
} from "@fluentui/react-icons";
import { useState } from "react";

import "./App.css";
import Home from "./Home";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const SettingIcon = bundleIcon(SettingsFilled, SettingsRegular);
const PayIcon = bundleIcon(PaymentFilled, PaymentRegular);
const HistoryIcon = bundleIcon(HistoryFilled, HistoryRegular);

function App() {
  const [selectedValue, setSelectedValue] = useState<TabValue>("home");

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  return (
    <>
      <div className="main">
        <TabList
          appearance="subtle"
          selectedValue={selectedValue}
          onTabSelect={onTabSelect}
        >
          <Tab value="home" icon={<HomeIcon></HomeIcon>}>
            Home
          </Tab>
          <Tab value="payment" icon={<PayIcon></PayIcon>}>
            Pay
          </Tab>
          <Tab value="history" icon={<HistoryIcon></HistoryIcon>}>
            History
          </Tab>
          <Tab value="setting" icon={<SettingIcon></SettingIcon>}>
            Setting
          </Tab>
        </TabList>

        <br />

        <div className="app">{selectedValue === "home" && <Home></Home>}</div>
      </div>
    </>
  );
}

export default App;
