// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(obj) {

        this.length = obj.length;
        this.width = obj.width;
        this.height = obj.height;
        return (this.length * this.width * this.height)
        return (this.length * this.width * this.height * this.length * this.width * this.height)

    }
}
let length = 4;
let width = 5;
let height = 5;
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130







// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.