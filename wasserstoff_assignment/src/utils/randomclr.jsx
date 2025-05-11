const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A78BFA"];

export const getRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];
