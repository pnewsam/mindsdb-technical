const colorByType = Object.freeze({
  view: "green",
  model: "purple",
  agent: "orange",
});

export const getColorByType = (type: string) => {
  return colorByType[type as keyof typeof colorByType];
};
