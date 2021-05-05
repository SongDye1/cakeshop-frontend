import React, { useState, useEffect } from "react";
import {
  Link,
  Navbar,
  NavLeft,
  NavTitle,
  Page,
  Row,
  f7,
  List,
  ListInput,
} from "framework7-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useRecoilValue } from "recoil";
import { orderState } from "../common/recoil";
import { orderItem } from "../common/api";

const OrderSchema = Yup.object().shape({
  receiver_name: Yup.string().required("이름을 입력해 주세요"),
  receiver_phone: Yup.string().required("전화번호를 입력해 주세요"),
  address: Yup.string().required("주소를 입력해 주세요"),
});

const Order = () => {
  const order = useRecoilValue(orderState); // 주문상품 정보 가져오기
  const totalPrice = order.price + 2500;

  return (
    <Page name="order">
      {/* Top Navbar */}
      <Navbar backLink={true} sliding={false}>
        <p className="font-xl font-bold text-center">주문하기</p>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
      </Navbar>

      {/* Page content */}
      {/* 주문 상품 */}
      <div className="pb-8">
        <p className="m-3 text-base font-semibold bg-white">주문 상품</p>
        <div>
          <img className="float-left w-20 h-20 mx-3 mt-1.5" src={order.img} />
          <span className="text-base">{order.name}</span>
          <p className="pt-1 text-base font-semibold">
            {order.price.toLocaleString()}원
          </p>
        </div>
      </div>

      {/* 배송 정보 */}
      <Formik
        initialValues={{
          receiver_name: "",
          receiver_phone: "",
          address: "",
          total_price: totalPrice,
        }}
        validationSchema={OrderSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          f7.dialog.preloader("결제가 진행 중입니다.");
          try {
            await orderItem(values);
            location.replace("/");
            f7.dialog.alert("결제가 완료되었습니다.");
          } catch (error) {
            f7.dialog.alert("개인 정보를 다시 확인해 주세요.");
            f7.dialog.close();
          }
        }}
        validateOnMount={true}
        enableReinitialize
      >
        {({
          handleChange, // 입력 변경 이벤트
          handleBlur, // 입력 여부 확인
          values,
          errors,
          touched,
          isSubmitting, // 양식 상태 제출
          isValid,
        }) => (
          <Form>
            <List noHairlines>
              <div className="p-3 font-semibold bg-white">배송 정보</div>
              <ListInput
                // label="받는 사람"
                type="text"
                name="receiver_name"
                placeholder="이름"
                clearButton
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.receiver_name}
                errorMessageForce={true}
                errorMessage={touched.receiver_name && errors.receiver_name}
              />
              <ListInput
                className="mt-3"
                // label="휴대폰 번호"
                type="number"
                name="receiver_phone"
                placeholder="연락처"
                clearButton
                value={values.receiver_phone}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessageForce={true}
                errorMessage={touched.receiver_phone && errors.receiver_phone}
              />
              <ListInput
                className="mt-3"
                // label="주소"
                type="text"
                name="address"
                placeholder="주소"
                clearButton
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessageForce={true}
                errorMessage={touched.address && errors.address}
              />
              <ListInput />
            </List>

            {/*결제 정보*/}
            <div className="p-3 text-base">
              <p className="mb-3 font-semibold bg-white">최종 결제금액</p>
              <div className="">
                <span className="text-gray-400">상품 가격</span>
                <span className="float-right">
                  {order.price.toLocaleString()}원
                </span>
              </div>
              <div className="pb-3 border-b">
                <span className="text-gray-400">배송비</span>
                <span className="float-right">2,500원</span>
              </div>
              <div className="pt-3 pb-5">
                <span className="">총 결제금액</span>
                <span className="float-right font-bold text-lg text-red-600">
                  {totalPrice.toLocaleString()}원
                </span>
              </div>
            </div>
            <div className="m-3">
              <button
                type="submit"
                className="button button-fill color-black button-large disabled:opacity-50"
                disabled={isSubmitting || !isValid} // 버튼 활성화
              >
                결제하기
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Page>
  );
};
export default Order;
