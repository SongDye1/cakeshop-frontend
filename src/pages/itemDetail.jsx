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

  // 각 id별 아이템 불러오기
  useEffect(() => {
    async function itemList() {
      const resultItems = await getItemDetail(f7route.id);
      setItems(resultItems.data);
    }
    itemList();
  }, []);
  // console.log("items", items);

  // 주문하기 버튼 클릭 시 아이템 전달
  const handleClick = (e) => {
    setOrder({
      img: items.img,
      name: items.name,
      price: items.price,
    });
  };

  return (
    <Page name="itemDetail">
      {/* Top Navbar */}
      <Navbar sliding={false} backLink></Navbar>

      {/* Page content */}
      <div>
        <img className="w-full h-96" src={items.img} />
        <p className="text-xl mt-5 mx-2.5">{items.name}</p>
        <p className="text-lg mx-2.5 mb-5 text-red-600">
          {Number(items.price).toLocaleString()}원
        </p>

        <Block strong>
          <Row tag="p">
            {/* <Col tag="span">
              <Button large raised color="black">
                장바구니 담기
              </Button>
            </Col> */}
            <Col tag="span">
              <Button
                className="mx-3"
                large
                raised
                fill
                color="black"
                onClick={(e) => handleClick(e)}
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
        <div>
          <p className="mt-7 text-center font-bold">맛있는 "{items.name}"</p>
          <p className="mb-5 text-center">주문과 동시에 제작되는 상품입니다.</p>
          <img className="w-full" src={items.img} alt="상세페이지 이미지" />
        </div>
      </div>
    </Page>
  );
};
export default ItemDetail;
