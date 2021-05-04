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
  receiver_name: Yup.string().required("필수 입력사항 입니다"),
  receiver_phone: Yup.string().required("필수 입력사항 입니다"),
  address: Yup.string().required("필수 입력사항 입니다"),
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
      <div>
        <p className="p-3 text-base font-semibold bg-white">주문 상품</p>
        <img className="w-24 h-24" src={order.img} />
        <span className="text-sm">상품명: {order.name}</span>
        <p className="text-sm">상품가격: {order.price.toLocaleString()}원</p>
      </div>

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
            <List noHairlinesMd>
              <div className="p-3 font-semibold bg-white">개인 정보</div>
              <ListInput
                label="받는 사람"
                type="text"
                name="receiver_name"
                placeholder="이름을 입력해주세요"
                clearButton
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.receiver_name}
                errorMessageForce={true}
                errorMessage={touched.receiver_name && errors.receiver_name}
              />
              <ListInput
                label="휴대폰 번호"
                type="number"
                name="receiver_phone"
                placeholder="연락처를 입력해주세요"
                clearButton
                value={values.receiver_phone}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessageForce={true}
                errorMessage={touched.receiver_phone && errors.receiver_phone}
              />
              <ListInput
                label="주소"
                type="address"
                name="address"
                placeholder="주소를 입력해주세요"
                clearButton
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessageForce={true}
                errorMessage={touched.address && errors.address}
              />
            </List>

            {/*결제정보 */}
            <div>
              <p className="p-3 text-base font-semibold bg-white">결제 정보</p>
              <p className="text-base">배송비: 2,500원</p>
              <p className="text-base pb-4">
                총 결제금액: {totalPrice.toLocaleString()}원
              </p>
            </div>
            <div className="p-4">
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
