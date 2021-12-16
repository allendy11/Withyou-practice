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
  adminTemplates: [],
  adminElements: [
    { id: 0, src: "sample_0.png" },
    { id: 1, src: "sample_1.png" },
    { id: 2, src: "sample_2.png" },
    { id: 3, src: "sample_3.png" },
    { id: 4, src: "sample_4.png" },
    { id: 5, src: "sample_5.png" },
    { id: 6, src: "sample_6.png" },
    { id: 7, src: "sample_7.png" },
  ],
};
