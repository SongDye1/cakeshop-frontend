import {
  Link,
  Navbar,
  NavLeft,
  Page,
  Row,
  Block,
  Col,
  Button,
} from "framework7-react";
import React from "react";

const Like = () => {
  return (
    <Page name="like">
      {/* Top Navbar */}
      <Navbar sliding={false}></Navbar>

      {/* Page content */}
      <div>
        <h2 className="mt-6 pb-4 text-center text-xl font-bold border-b">찜</h2>
        <div>
          <p className="mt-4 pt-36 text-center text-base">
            좋아요한 상품이 없습니다.
          </p>
          <Block strong className="mx-6 mt-3">
            <Col>
              <Button
                className="text-base"
                large
                raised
                fill
                color="black"
                onClick={() => location.replace("/")}
              >
                쇼핑 계속하기
              </Button>
            </Col>
          </Block>
        </div>
      </div>
    </Page>
  );
};
export default Like;
