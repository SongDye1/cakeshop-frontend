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
import { getItemDetail } from "../common/api";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useRecoilValue } from "recoil";
import { orderState } from "../common/recoil";

const OrderSchema = Yup.object().shape({
  name: Yup.string().required("필수 입력사항 입니다"),
  address: Yup.string().required("필수 입력사항 입니다"),
  // email: Yup.string().email().required("필수 입력사항 입니다"),
  // password: Yup.string()
  //   .min(4, "길이가 너무 짧습니다")
  //   .max(50, "길이가 너무 깁니다")
  //   .required("필수 입력사항 입니다"),
  // password_confirmation: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
  //   .required("필수 입력사항 입니다"),
});

const Order = (f7route) => {
  const [items, setItems] = useState([]);
  const order = useRecoilValue(orderState);

  // useEffect(() => {
  //   async function itemList() {
  //     const resultItems = await getItemDetail(f7route.id);
  //     setItems(resultItems.data);
  //   }
  //   itemList();
  // }, []);
  // console.log(items);

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
        <img className="w-28 h-28" src={order.img} />
        <span className="text-lg">{order.name}</span>
        <span className="text-lg">{order.price}원</span>
      </div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          address: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // await sleep(400);
          setSubmitting(false);
          f7.dialog.preloader("잠시만 기다려주세요...");
          try {
            (await signup({ user: values })).data;
            // toast.get().setToastText("로그인 되었습니다.").openToast();
            f7.dialog.preloader("로그인 되었습니다.");
            location.replace("/");
          } catch (error) {
            f7.dialog.alert(error?.response?.data || error?.message);
            // f7.dialog.close();
            // toast.get().setToastText(error?.response?.data || error?.message).openToast();
          }
        }}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isSubmitting,
          isValid,
        }) => (
          // 개인정보
          <Form>
            <List noHairlinesMd>
              <div className="p-3 font-semibold bg-white">개인 정보</div>
              <ListInput
                label="받는 사람"
                type="text"
                name="name"
                placeholder="이름을 입력해주세요"
                clearButton
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                errorMessageForce={true}
                errorMessage={touched.name && errors.name}
              />
              <ListInput
                label="휴대폰 번호"
                type="number"
                name="number"
                placeholder="연락처를 입력해주세요"
                clearButton
                value={values.number}
                onChange={handleChange}
                // errorMessageForce={true}
                // errorMessage={touched.password && errors.password}
              />
              <ListInput
                label="주소"
                type="address"
                name="address"
                placeholder="주소를 입력해주세요"
                clearButton
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                errorMessageForce={true}
                // errorMessage={
                //   touched.password_confirmation && errors.password_confirmation
                // }
              />
            </List>

            {/*결제금액 */}
            <div>
              <p className="p-3 text-base font-semibold bg-white">
                총 결제 금액
              </p>
              <p className="text-lg pb-4">{items.price}원</p>
            </div>

            <div className="p-4">
              <button
                type="submit"
                className="button button-fill color-black button-large disabled:opacity-50"
                disabled={isSubmitting || !isValid}
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
