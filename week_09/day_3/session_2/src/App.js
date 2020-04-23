import React from "react";
import "./App.css";
import Drawer from "./components/Drawer";
import DrawerItem from "./components/DrawerItem";
import ToolBar from "./components/Toolbar";
import SiteName from "./components/SiteName";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <ToolBar>
              <SiteName>
                <DrawerItem label="SITENAME" />
              </SiteName>
              <DrawerItem label="About us" />
              <DrawerItem label="Prices" />
              <DrawerItem label="Other" />
            </ToolBar>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 text-center">
            <Drawer>
              <DrawerItem label="Inbox" icon="/icon/inbox.png" />
              <DrawerItem label="Starred" icon="/icon/star.png" />
              <DrawerItem label="Send email" icon="/icon/send-email.png" />
              <DrawerItem label="Drafts" icon="/icon/draft.png" />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
