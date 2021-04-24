import { Link, Navbar, NavLeft, Page, Row, Col } from "framework7-react";
import React from "react";

const WholeCake = () => {
  return (
    <Page name="wholeCake">
      {/* Top Navbar */}
      <Navbar sliding={false} backLink>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">WHOLE CAKE</h2>
        <p className="text-center text-sm">홀케이크</p>
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
        </Row>
      </div>
    </Page>
  );
};
export default WholeCake;
