import { Link, Navbar, NavLeft, Page, Row, Col } from "framework7-react";
import React, { useState, useEffect } from "react";
import { getItems } from "../common/api"; //getLikes로 수정하기

const Like = () => {
  const [likes, setlikes] = useState([]);

  useEffect(() => {
    async function likeList() {
      const resultLikes = await getItems();
      setlikes(resultLikes.data);
    }
    likeList();
  }, []);

  return (
    <Page name="like">
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      <div>
        <h2 className="pt-4 text-center text-xl font-bold">Like</h2>
        <p className="text-center text-sm">찜 목록</p>

        {likes.map((like) => (
          <div key={like.id}>
            <Link href={`/itemDetail/${like.id}`}>
              <div className="col card demo-card-header-pic">
                <div className="card-header">
                  <img
                    className="align-items-flex-end w-full h-60"
                    src={like.img}
                  />
                </div>
                <div className="card-content card-content-padding">
                  <p className="text-base font-bold">{like.name}</p>
                  <p className="text-base">{like.price.toLocaleString()}원</p>
                </div>
                <div className="card-footer">
                  <Link href="#" className="link text-red-600">
                    찜
                  </Link>
                  <Link href="#" className="link text-red-600">
                    삭제
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
export default Like;
