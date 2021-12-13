export const initialState = {
  // templates: [],
  elements: [
    {
      id: 0,
      url: "",
    },
  ],
  canvas: [
    {
      canvasId: 0,
      canvasStyle: {},
      elements: [
        {
          elementId: 0,
          style: {
            top: "",
            left: "",
            width: "",
            height: "",
            rotate: "",
            zIndex: "",
          },
        },
      ],
    },
    {
      canvasId: 1,
    },
    {
      canvasId: 2,
    },
  ],
  currentCanvas: {
    canvasId: 0,
  },
  currentElement: {
    elementId: 0,
  },
  // initialStyle: {},
};
