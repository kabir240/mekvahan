import React from 'react';
import './home.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";

const Home = (props) => {
    return(
        <div>
            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
            <TabList>
                <Tab tabFor="vertical-tab-one">Tab 1</Tab>
                <Tab tabFor="vertical-tab-two">Tab 2</Tab>
                <Tab tabFor="vertical-tab-three">Tab 3</Tab>
            </TabList>

            <TabPanel tabId="vertical-tab-one">
                <p>Tab 1 content</p>
            </TabPanel>

            <TabPanel tabId="vertical-tab-two">
                <p>Tab content</p>
            </TabPanel>

            <TabPanel tabId="vertical-tab-three">
                <p>Tab 3 content</p>
            </TabPanel>
            </Tabs>
        </div>
    );
}

export default Home;