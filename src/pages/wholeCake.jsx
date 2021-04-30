import { Link, Navbar, NavLeft, Page, Row, Col } from "framework7-react";
import React, { useState, useEffect } from "react";
import { getItems } from "../common/api";

const WholeCake = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function itemList() {
      const resultItems = await getItems();
      setItems(resultItems.data);
    }
    itemList();
  }, []);

  return (
    <Page name="wholeCake">
      {/* Top Navbar */}
      {/* 뒤로가기 아이콘 */}
      <Navbar sliding={false} backLink>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">WHOLE CAKE</h2>
        <p className="text-center text-sm">홀케이크</p>
        <Row>
          {items.map((data) => (
            <Col key={data.id}>
              <Link href={`/itemDetail/${data.id}`}>
                <img
                  className="w-24 h-24"
                  src={data.img}
                  alt="홀케이크 이미지"
                />
                <div>
                  <p className="text-xs">{data.name}</p>
                  <p className="text-xs">{data.price.toLocaleString()}원</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Page>
  );
};
export default WholeCake;
