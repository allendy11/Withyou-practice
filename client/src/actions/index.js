export const ADD_CANVAS = "ADD_CANVAS"; // 빈 캔버스 추가
export const COPY_CANVAS = "COPY_CANVAS"; // 현재 캔버스 복사
export const REMOVE_CANVAS = "REMOVE_CANVAS"; // 현재 캔버스 삭제
// export const SET_CANVAS = "SET_CANVAS"; // 유저가 만든 캔버스 불러오기 !필요없는듯

// export const SET_TEMPLATES = "SET_TEMPLATES";
// export const ADD_TEMPLATE = "ADD_TEMPLATE";
// export const PUT_TEMPLATE = "PUT_TEMPLATE";

export const SET_ELEMENTS = "SET_ELEMENTS"; // 서버에 있는 엘리먼트 불러오기
export const ADD_ELEMENT = "ADD_ELEMENT"; // 관리자 권한으로 엘리먼트 추가하기
export const PUT_ELEMENT = "PUT_ELEMENT"; // 유저가 원하는 엘리먼트 캔버스에 추가
export const UPDATE_ELEMENT = "UPDATE_ELEMENT"; // 유저가 엘리먼트 스타일 변경

export const NOTIFY = "NOTIFY";

export const fetchData = (api, action) => (dispatch) => {
  return fetch(api)
    .then((res) => res.json())
    .then((data) => {
      dispatch(action(data));
    })
    .catch((err) => console.log(err));
};
export const addCanvas = (canvasId) => {
  return {
    type: ADD_CANVAS,
    payload: {
      id: canvasId,
      style: {},
      elements: [],
    },
  };
};
export const copyCanvas = (canvasId, canvas) => {
  return {
    type: COPY_CANVAS,
    payload: {
      ...canvas,
      id: canvasId,
    },
  };
};
export const removeCanvas = (canvasId) => {
  return {
    type: REMOVE_CANVAS,
    payload: {
      id: canvasId,
    },
  };
};

// export const setTemplates = (templates) => {
//   return {
//     type: SET_TEMPLATES,
//     payload: {
//       templates,
//     },
//   };
// };
// export const addTemplate = (template) => {
//   return {
//     type: ADD_TEMPLATE,
//     payload: {
//       template,
//     },
//   };
// };
// export const putTemplate = (templateId) => {
//   return {
//     type: PUT_TEMPLATE,
//     payload: {
//       templateId,
//     },
//   };
// };
export const setElements = (elements) => {
  return {
    type: SET_ELEMENTS,
    payload: {
      elements,
    },
  };
};
export const addElement = (element) => {
  return {
    type: ADD_ELEMENT,
    payload: {
      element,
    },
  };
};
export const putElement = (canvasId, element) => {
  return {
    type: PUT_ELEMENT,
    payload: {
      canvasId,
      element,
    },
  };
};
export const updateElement = (canvasId, elementId, style) => {
  return {
    type: UPDATE_ELEMENT,
    payload: {
      canvasId,
      elementId,
      style,
    },
  };
};
