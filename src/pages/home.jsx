import {
  Col,
  Link,
  Navbar,
  NavLeft,
  NavTitle,
  Page,
  Row,
} from "framework7-react";
import React, { useState, useEffect } from "react";
import { getItems } from "../common/api";

const HomePage = () => {
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
    <Page name="home">
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" href={false} />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="메인 사진"
        />
      </div>

      {/* WHOLE CAKE */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">
          WHOLE CAKE BEST 3
        </h2>
        <p className="text-center text-sm mb-3">홀리 홀케이크 베스트3</p>

        <div className="my-2 flex flex-row">
          {items &&
            items.slice(0, 3).map((data) => (
              <div key={data.id}>
                <Link href={`/itemDetail/${data.id}`}>
                  <div className="ml-5">
                    <img
                      className="w-24 h-24"
                      src={data.img}
                      alt="홀케이크 이미지"
                    />
                    <div className="w-24 flex-col text-center">
                      <p className="text-xs">{data.name}</p>
                      <p className="text-xs text-red-500">
                        {data.price.toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* macarone */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">MACARON BEST 3</h2>
        <p className="text-center text-sm mb-3">마카롱 베스트3</p>

        <div className="my-2 flex flex-row">
          {items &&
            items.slice(5, 8).map((data) => (
              <div key={data.id}>
                <Link href={`/itemDetail/${data.id}`}>
                  <div className="ml-5">
                    <img
                      className="w-24 h-24"
                      src={data.img}
                      alt="마카롱 이미지"
                    />
                    <div className="w-24 flex-col text-center">
                      <p className="text-xs">{data.name}</p>
                      <p className="text-xs text-red-500">
                        {data.price.toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Page>
  );
};
export default HomePage;
