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

const Cart = () => {
  return (
    <Page name="cart">
      {/* Top Navbar */}
      <Navbar sliding={false}></Navbar>

      {/* Page content */}
      <div>
        <h2 className="mt-6 pb-4 text-center text-xl font-bold border-b">
          장바구니
        </h2>
        <div>
          <p className="mt-4 pt-36 text-center text-base">
            장바구니에 담긴 상품이 없습니다.
          </p>
          <Block strong className="mx-6 mt-3">
            <Col>
              <Button
                className="text-base"
                large
                raised
                fill
                color="black"
                href="/wholeCake/"
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
export default Cart;
