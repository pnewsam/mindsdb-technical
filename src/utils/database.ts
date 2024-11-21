const colorByType = Object.freeze({
  view: "green",
  model: "purple",
  agent: "orange",
  default: "neutral",
  project: "blue",
  system: "blue",
});

export const getColorByType = (type?: string) => {
  const color = colorByType[type as keyof typeof colorByType];
  return color || colorByType.default;
};

export const getClassesByType = (type?: string) => {
  const color = colorByType[type as keyof typeof colorByType];
  return `text-${color}-600`;
};
