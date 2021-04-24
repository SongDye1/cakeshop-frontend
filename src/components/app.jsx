import {
  App,
  f7,
  f7ready,
  Link,
  List,
  ListItem,
  Navbar,
  Page,
  PageContent,
  Panel,
  Toolbar,
  View,
  Views,
} from "framework7-react";
import "lodash";
import React from "react";
import { logout } from "../common/api";
import { getToken } from "../common/auth";
import store from "../common/store";
import { getDevice } from "../js/framework7-custom.js";
import routes from "../js/routes";
import i18n from "../lang/i18n";

global.i18next = i18n;

const MyApp = () => {
  // Login screen demo data
  let loggedIn = !!getToken().token;
  const handleLogout = async () => {
    await logout();
    location.replace("/");
  };

  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: "practice", // App name
    theme: "ios", // Automatic theme detection
    id: "com.insomenia.practice", // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,
    // Input settings
    view: {
      iosDynamicNavbar: getDevice().ios,
    },
  };
  return (
    <App {...f7params}>
      {/* Left panel with cover effect*/}
      <Panel left cover>
        <Page>
          <Navbar title="HOLY CAKE" />
          <PageContent>
            <List>
              {!loggedIn && (
                <li>
                  <ul>
                    <ListItem title="로그인" link="/users/sign_in"></ListItem>
                    <ListItem title="회원가입" link="/users/sign_up"></ListItem>
                  </ul>
                </li>
              )}
              {loggedIn && (
                <li>
                  <ul>
                    <ListItem
                      title="로그아웃"
                      link="#"
                      icon="las la-question"
                      panelClose
                      onClick={handleLogout}
                    ></ListItem>
                    <ListItem
                      title="마이페이지"
                      link="/users/mypage"
                    ></ListItem>
                  </ul>
                </li>
              )}
              <div className="list">
                <ul>
                  <li className="accordion-item">
                    <a className="item-content item-link" href="#">
                      <div className="item-inner">
                        <div className="item-title">CAKE</div>
                      </div>
                    </a>
                    <div className="accordion-item-content">
                      <div className="block">
                        <ListItem link="/wholeCake/" title="홀케이크" />
                        <ListItem link="/wholeCake/" title="홀케이크" />
                        <ListItem link="/pieceCake/" title="조각케이크" />
                        <ListItem link="/specialCake" title="스페셜케이크" />
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <a className="item-content item-link" href="#">
                      <div className="item-inner">
                        <div className="item-title">DESSERT</div>
                      </div>
                    </a>
                    <div className="accordion-item-content">
                      <div className="block">
                        <ListItem link="/macaron/" title="마카롱" />
                        <ListItem link="/tart/" title="타르트" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </List>
          </PageContent>
        </Page>
      </Panel>

      {/* Tabbar for switching views-tabs */}
      <Views tabs className="safe-areas">
        <Toolbar tabbar labels bottom>
          <Link
            tabLink="#view-home"
            tabLinkActive
            icon="las la-home"
            text="홈"
          />
          <Link tabLink="#view-items" icon="las la-gift" text="쇼핑" />
          <Link tabLink="#view-users" icon="las la-address-book" text="찜" />
          <Link tabLink="#view-contacts" icon="las la-edit" text="마이페이지" />
          <Link
            tabLink="#view-carts"
            icon="las la-shopping-cart"
            text="장바구니"
          />
        </Toolbar>
        <View
          id="view-home"
          main
          tab
          tabActive
          url="/"
          iosDynamicNavbar={false}
        />
        <View id="view-items" name="items" tab url="/items?is_main=true/" />
        <View id="view-users" name="users" tab url="/users?is_main=true" />
        <View id="view-contacts" name="contacts" tab url="/contacts" />
        <View id="view-carts" name="carts" tab url="/carts" />
      </Views>
    </App>
  );
};
export default MyApp;
