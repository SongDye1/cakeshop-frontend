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
  // console.log(items.slice(0, 5));

  return (
    <Page name="wholeCake">
      {/* Top Navbar */}
      <Navbar sliding={false} backLink></Navbar>

      {/* Page content */}
      <div>
        <h2 className="mt-8 text-center text-2xl">HOLY WHOLE CAKE</h2>
        <p className="text-center text-sm mt-1">홀리 홀케이크</p>

        {items &&
          items.slice(0, 5).map((data) => (
            <div key={data.id}>
              <Link href={`/itemDetail/${data.id}`}>
                <div className="col card demo-card-header-pic">
                  <div className="card-header">
                    <img className="w-full h-64" src={data.img} />
                  </div>
                  <div className="card-content card-content-padding">
                    <p className="text-base font-bold">{data.name}</p>
                    <p className="text-base">{data.price.toLocaleString()}원</p>
                  </div>
                  {/* <div className="card-footer">
                  <Link href="#" className="link text-red-600">
                    찜
                  </Link>
                  <Link href="#" className="link text-red-600">
                    장바구니
                  </Link>
                </div> */}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Page>
  );
};
export default WholeCake;
