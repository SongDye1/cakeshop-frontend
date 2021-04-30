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
  f7route,
} from "framework7-react";
import React, { useState, useEffect } from "react";
import { getItemDetail } from "../common/api";

const ItemDetail = (f7route) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function itemList() {
      const resultItems = await getItemDetail(f7route.id);
      setItems(resultItems.data);
    }
    itemList();
  }, []);
  console.log(items);

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

        <div className="block block-strong">
          <p className="row pb-6">
            <button className="col button button-large button-raised color-black">
              장바구니 담기
            </button>

            <button className="col button button-large button-raised button-fill color-black">
              구매하기
            </button>
          </p>
        </div>
      </div>

      <div>
        <p className="text-center text-base mb-3 p-2 bg-gray-100">상세정보</p>

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
