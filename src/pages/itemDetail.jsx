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
        <img src={items.img} alt="상품 이미지" />
        <p className="text-xl font-bold mt-5 mx-2.5">{items.name}</p>
        <p className="text-lg mx-2.5 mb-5 text-red-600">{items.price}원</p>
      </div>

      <div>
        <p className="text-center text-base p-2 border-t-2 border-b-2">
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
