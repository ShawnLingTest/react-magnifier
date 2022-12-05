export const clamp = (value: number, min: number, max: number) => {
  if (min < max) {
    return value < min ? min : value > max ? max : value;
  }
  return value < max ? max : value > min ? min : value;
};
