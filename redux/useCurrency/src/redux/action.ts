export const SET_TEXT = "SET_TEXT"; // 액션 타입정의

export interface SetTextAction {
  // 타입과 데이터인 payload 지정
  type: string;
  payload: string;
}

export const setText = (text: string): SetTextAction => ({
  type: SET_TEXT, // 액션의 타입
  payload: text, // 액션의 페이로드 데이터
});

// 이렇게 정의된 액션과 액션 생성자 함수는 Redux액션을 생성하고 처리하는데 사용
