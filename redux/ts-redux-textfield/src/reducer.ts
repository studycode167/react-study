import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 앱 상태를 정의하는 인터페이스
interface AppState {
  text: string;
}

// 초기 상태 정의
const initialState: AppState = {
  text: "",
};

// redux slice를 생성
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // 리듀서 함수 정의
    setText: (state, action: PayloadAction<string>) => {
      // action payload로 전달된 문자열을 사용해 상태 업데이트
      state.text = action.payload;
    },
  },
});

// 생성된 액션 및 리듀서를 내보냄
export const { setText } = appSlice.actions;
export default appSlice.reducer;
