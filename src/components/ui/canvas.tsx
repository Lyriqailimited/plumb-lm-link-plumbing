class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  value: number;

  constructor(opts: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
    this.phase = opts.phase || 0;
    this.offset = opts.offset || 0;
    this.frequency = opts.frequency || 0.001;
    this.amplitude = opts.amplitude || 1;
    this.value = 0;
  }

  update() {
    this.phase += this.frequency;
    this.value = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.value;
  }
}

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class Line {
  spring: number;
  friction: number;
  nodes: NodePoint[];

  constructor(opts: { spring: number }) {
    this.spring = opts.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const node: NodePoint = { x: pos.x, y: pos.y, vx: 0, vy: 0 };
      this.nodes.push(node);
    }
  }

  update() {
    let spring = this.spring;
    let t = this.nodes[0];
    t.vx += (pos.x - t.x) * spring;
    t.vy += (pos.y - t.y) * spring;
    for (let i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];
      if (i > 0) {
        const n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * spring;
        t.vy += (n.y - t.y) * spring;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      spring *= E.tension;
    }
  }

  draw() {
    let e: NodePoint;
    let t: NodePoint;
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    let a = 1;
    const o = this.nodes.length - 2;
    for (; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[a];
    t = this.nodes[a + 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  }
}

interface CanvasCtx extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

let ctx: CanvasCtx;
let f: Oscillator;
const pos = { x: 0, y: 0 };
let lines: Line[] = [];
const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function onMousemove(e: MouseEvent | TouchEvent) {
  function o() {
    lines = [];
    for (let i = 0; i < E.trails; i++)
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
  function c(ev: MouseEvent | TouchEvent) {
    if ("touches" in ev) {
      pos.x = ev.touches[0].pageX;
      pos.y = ev.touches[0].pageY;
    } else {
      pos.x = ev.clientX;
      pos.y = ev.clientY;
    }
    ev.preventDefault();
  }
  function l(ev: TouchEvent) {
    if (ev.touches.length === 1) {
      pos.x = ev.touches[0].pageX;
      pos.y = ev.touches[0].pageY;
    }
  }
  document.removeEventListener("mousemove", onMousemove as EventListener);
  document.removeEventListener("touchstart", onMousemove as EventListener);
  document.addEventListener("mousemove", c as EventListener);
  document.addEventListener("touchmove", c as EventListener);
  document.addEventListener("touchstart", l as EventListener);
  c(e);
  o();
  render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
    ctx.lineWidth = 10;
    for (let t = 0; t < E.trails; t++) {
      const line = lines[t];
      line.update();
      line.draw();
    }
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

export const renderCanvas = function () {
  ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d")! as CanvasCtx;
  ctx.running = true;
  ctx.frame = 1;
  f = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener("mousemove", onMousemove as EventListener);
  document.addEventListener("touchstart", onMousemove as EventListener);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = true;
  });
  resizeCanvas();
};
