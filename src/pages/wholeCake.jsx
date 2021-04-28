import { Link, Navbar, NavLeft, Page, Row, Col } from "framework7-react";
import React, { useState, useEffect } from "react";

const WholeCake = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items", {})
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);
  console.log(items);

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
        <Row>
          {items.map((itemList) => (
            <Col width="50">
              <img
                className="w-24 h-24"
                src={itemList.img}
                alt="홀케이크 이미지"
              />
              <div>
                <p className="text-xs">{itemList.name}</p>
                <p className="text-xs">{itemList.price.toLocaleString()}원</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Page>
  );
};
export default WholeCake;
