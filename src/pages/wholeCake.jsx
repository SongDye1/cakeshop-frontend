import { Link, Navbar, NavLeft, Page, Row, Col } from "framework7-react";
import React, { useState, useEffect } from "react";
import { getItems } from "../common/api";

const WholeCake = () => {
  const [items, setItems] = useState([]);

  // 아이템 리스트 불러오기
  useEffect(() => {
    async function itemList() {
      const resultItems = await getItems();
      setItems(resultItems.data);
    }
    itemList();
  }, []);
  // console.log(items);

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

        {items.map((data) => (
          <div key={data.id}>
            <Link href={`/itemDetail/${data.id}`}>
              <div className="col card demo-card-header-pic">
                <div className="card-header">
                  <img
                    className="align-items-flex-end w-full h-60"
                    src={data.img}
                  />
                </div>
                <div className="card-content card-content-padding">
                  <p className="text-base font-bold">{data.name}</p>
                  <p className="text-base">{data.price.toLocaleString()}원</p>
                </div>
                <div className="card-footer">
                  <Link href="#" className="link text-red-600">
                    찜
                  </Link>
                  <Link href="#" className="link text-red-600">
                    장바구니
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Page>
  );
};
export default WholeCake;
