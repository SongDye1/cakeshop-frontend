import { Link, Navbar, NavLeft, Page, Row, Col } from "framework7-react";
import React from "react";

const Macaron = () => {
  return (
    <Page name="macaron">
      {/* Top Navbar */}
      <Navbar sliding={false} backLink>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
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
        </Row>
      </div>
    </Page>
  );
};
export default Macaron;
