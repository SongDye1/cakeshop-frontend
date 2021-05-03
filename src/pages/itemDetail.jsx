import React, { useState, useEffect } from "react";
import {
  Link,
  Navbar,
  NavLeft,
  NavTitle,
  Page,
  Row,
  f7route,
  Stepper,
  BlockTitle,
  Block,
  Col,
  Button,
} from "framework7-react";

import { getItemDetail } from "../common/api";
import { orderState } from "../common/recoil";
import { useRecoilState } from "recoil";

const ItemDetail = (f7route) => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useRecoilState(orderState);

  // 아이템 불러오기
  useEffect(() => {
    async function itemList() {
      const resultItems = await getItemDetail(f7route.id);
      setItems(resultItems.data);
    }
    itemList();
  }, []);
  console.log("items", items);

  // 주문하기 버튼 클릭
  const orderClick = (e) => {
    setOrder({ img: items.img, name: items.name, price: items.price });
    console.log("orderclick", order);
  };

  return (
    <Page name="itemDetail">
      {/* Top Navbar */}
      <Navbar sliding={false} backLink>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      <div>
        <img className="w-full h-96" src={items.img} />
        <p className="text-xl  mt-5 mx-2.5 font-bold">{items.name}</p>
        <p className="text-lg mx-2.5 mb-5 text-red-600">{items.price}원</p>

        <Block strong>
          <Row tag="p">
            <Col tag="span">
              <Button large raised color="black">
                장바구니 담기
              </Button>
            </Col>
            <Col tag="span">
              <Button
                large
                raised
                fill
                color="black"
                onClick={(e) => orderClick(e)}
                href="/order/"
              >
                주문하기
              </Button>
            </Col>
          </Row>
        </Block>
      </div>

      <div>
        <p className="text-center text-base mt-6 mb-2 p-2 bg-gray-100">
          상세정보
        </p>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBjaG9jb2xhdGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
          alt="상세페이지"
        />
      </div>
    </Page>
  );
};
export default ItemDetail;
