{
  //! calculate area of rectangle or circle with type guard

  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };

  const calculateShapeArea = (
    value: Circle | Rectangle
  ): number | undefined => {
    if ("radius" in value) {
      return Math.ceil(value.radius * value.radius * 3.1416 * 100) / 100;
    } else if ("width" in value) {
      return value.height * value.width;
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  // console.log(circleArea);
  // console.log(rectangleArea);

  //
}
