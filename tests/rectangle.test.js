import {getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test ('should properly calculate perimeter' , () => {
    const output = getRectanglePerimeter(2, 5);
    expect(output).toBe(14);
});
test ('should properly calculate area' , () => {
    const output = getRectangleArea(2,5);
    expect(output).toBe(10);
});
test ('console.log the text "Rectangle info"' , () => {
    const logSpy = jest.spyOn(console, 'log');
    const perimeter = getRectanglePerimeter(2,5);
    const area = getRectangleArea(2,5);

    console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
  
    expect(logSpy).toHaveBeenCalledWith("The perimeter of a rectangle is 14 and the area is 10");
  });


