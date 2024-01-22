
export class Point {
    private y = 0;
    private x = 0;

    protected constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }


}

export class PointFactory extends Point {

    static newCartesianPoint(x: number, y: number) {
        return new Point(x, y);
    }

    static newPolarPoint(rho: number, theta: number) {
        return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
}
