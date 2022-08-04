import { Point } from "../typings";
import { getTPoint } from "./bezierUtils";

class DrawHelper {
  protected _ctx: CanvasRenderingContext2D | undefined;

  constructor(ctx?: CanvasRenderingContext2D) {
    this._ctx = ctx;
  }

  public get ctx(): CanvasRenderingContext2D | undefined {
    return this._ctx;
  }
  public set ctx(ctx: CanvasRenderingContext2D | undefined) {
    this._ctx = ctx;
  }

  public clear(): void {
    if (!this._ctx) return;
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
  }

  public drawRect(x: number, y: number, w: number, h: number): void {
    if (!this._ctx) return;
    this._ctx.strokeRect(x, y, w, h);
  }

  public drawPoint({ x, y }: Point, color?: string): void {
    if (!this._ctx) return;
    this._ctx.beginPath();
    this._ctx.moveTo(x, y);
    this._ctx.arc(x, y, 5, 0, Math.PI * 2);
    this._ctx.fillStyle = color || "#666";
    this._ctx.fill();
  }

  public drawPaths(points: Point[], color?: string): void {
    if (!this._ctx) return;
    this._ctx.lineWidth = 2;
    this._ctx.strokeStyle = color || "red";
    this._ctx.beginPath();
    points.forEach(({ x, y }, index) => {
      if (index === 0) {
        this._ctx?.moveTo(x, y);
      } else {
        this._ctx?.lineTo(x, y);
      }
    });
    this._ctx.stroke();
  }

  public drawBezier(points: Point[], unitT: number): void {
    if (!this._ctx || points.length <= 2) return;
    let timer: NodeJS.Timer | undefined = undefined;
    let offset = 0;
    const Unit_Offset = 0.001;
    const finalPaths: Point[] = [];

    const bezier = (pathPoints: Point[]) => {
      if (pathPoints.length < 2) {
        finalPaths.push(pathPoints[0]);
        this.drawPoint(pathPoints[0], "#458fff");
        this.drawPaths(finalPaths);
        return;
      }
      this.drawPaths(pathPoints, "green");

      const tPoints = [] as Point[];
      for (let i = 0; i < pathPoints.length - 1; i++) {
        tPoints.push(
          getTPoint(pathPoints[i], pathPoints[i + 1], unitT + offset)
        );
      }
      bezier(tPoints);
    };

    timer && clearInterval(timer);
    timer = setInterval(() => {
      offset += Unit_Offset;
      window.requestAnimationFrame(() => {
        this.clear();
        bezier(points);
      });

      if (offset >= 1) {
        timer && clearInterval(timer);
      }
    }, 1);
  }
}

export default DrawHelper;
