import { atom } from "recoil"; // recoil 추가

// atom = 하나의 상태 (컴포넌트가 구독할 수 있는 React state?)

export const orderState = atom({
  key: "orderState", // 해당 atom의 고유 key
  default: { img: "", name: "", price: 0 }, // 기본 값
});
