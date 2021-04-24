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
import React from "react";

const HomePage = () => {
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
          <Col>
            <img
              className="w-24 h-24"
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="홀케이크1"
            />
            <div>
              <p className="text-xs">초코화이트 케이크</p>
              <p className="text-xs">45,000원</p>
            </div>
          </Col>
          <Col>
            <img
              className="w-24 h-24"
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="홀케이크2"
            />
            <div>
              <p className="text-xs">초코화이트 케이크</p>
              <p className="text-xs">55,000원</p>
            </div>
          </Col>
          <Col>
            <img
              className="w-24 h-24"
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="홀케이크3"
            />
            <div>
              <p className="text-xs">초코화이트 케이크</p>
              <p className="text-xs">45,000원</p>
            </div>
          </Col>
        </Row>
      </div>

      {/* macarone */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">MACARONE</h2>
        <p className="text-center text-sm">마카롱</p>
        <Row className="text-center">
          <Col>
            <img
              className="w-24 h-24"
              src="https://images.unsplash.com/photo-1572978841367-5312191301b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Fyb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="마카롱1"
            />
            <div>
              <p className="text-xs">홀리 프렌치 마카롱</p>
              <p className="text-xs">2,800원</p>
            </div>
          </Col>
          <Col>
            <img
              className="w-24 h-24"
              src="https://images.unsplash.com/photo-1572978841367-5312191301b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Fyb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="마카롱2"
            />
            <div>
              <p className="text-xs">홀리 프렌치 마카롱</p>
              <p className="text-xs">3,200원</p>
            </div>
          </Col>
          <Col>
            <img
              className="w-24 h-24"
              src="https://images.unsplash.com/photo-1572978841367-5312191301b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Fyb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="마카롱3"
            />
            <div>
              <p className="text-xs">홀리 프렌치 마카롱</p>
              <p className="text-xs">2,700원</p>
            </div>
          </Col>
        </Row>
      </div>
    </Page>
  );
};
export default HomePage;
