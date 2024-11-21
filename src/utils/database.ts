const colorByType = Object.freeze({
  default: "yellow",
  system: "gray",
  project: "blue",
  view: "green",
  model: "purple",
  agent: "orange",
  data: "blue",
  table: "blue",
});

export const getColorByType = (type?: string) => {
  const color = colorByType[type as keyof typeof colorByType];
  return color || colorByType.default;
};

export const getClassesByType = (type?: string) => {
  const color = getColorByType(type);
  return `text-${color}-600`;
};
