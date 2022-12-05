export type EmelentSize = {
  width: number;
  height: number;
};

export const getSmallToLargeRatio = (
  smallImage: EmelentSize,
  largeImage: EmelentSize
) => {
  return {
    x: largeImage.width / smallImage.width,
    y: largeImage.height / smallImage.height,
  };
};
