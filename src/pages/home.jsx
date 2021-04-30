import {
  Block,
  BlockTitle,
  Button,
  Col,
  Link,
  List,
  ListItem,
  Navbar,
  NavLeft,
  NavTitle,
  Page,
  Row,
} from "framework7-react";
import React, { useState, useEffect } from "react";
import { getItems } from "../common/api";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function itemList() {
      const resultItems = await getItems();
      setItems(resultItems.data);
    }
    itemList();
  }, []);
  // console.log(items);

  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="메인 사진"
        />
      </div>

      {/* WHOLE CAKE */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">HOLY WHOLE CAKE</h2>
        <p className="text-center text-sm">홀리 홀케이크</p>
        <Row className="text-center">
          {items.map((data) => (
            <Col>
              <img className="w-24 h-24" src={data.img} alt="홀케이크 이미지" />
              <div>
                <p className="text-xs">{data.name}</p>
                <p className="text-xs">{data.price.toLocaleString()}원</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* macarone */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">MACARONE</h2>
        <p className="text-center text-sm">마카롱</p>
        <Row className="text-center">
          {items &&
            items.map((data) => (
              <Col>
                <img className="w-24 h-24" src={data.img} alt="마카롱 이미지" />
                <div>
                  <p className="text-xs">{data.name}</p>
                  <p className="text-xs">{data.price.toLocaleString()}원</p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </Page>
  );
};
export default HomePage;
