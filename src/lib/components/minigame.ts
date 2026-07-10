import * as THREE from "three";

export type GameState = "COUNTDOWN" | "RACING" | "FINISHED";

export interface MinigameState {
  clicks: number[];
  cps: number;
  anxious: boolean;
  gameState: GameState;
  countdownText: string;
  playerRank: number;
}

export class MinigameLogic {
  private canvas: HTMLCanvasElement;
  private state: MinigameState;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private racers: any[] = [];
  private animationId: number = 0;
  private d = 18;
  private lastTime: number;
  private frameCount = 0;
  private countdownTimer = 3.0;
  private finishCounter = 0;
  private startZ = -20;
  private finishZ = 21;

  constructor(canvas: HTMLCanvasElement, state: MinigameState) {
    this.canvas = canvas;
    this.state = state;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#E6D3A3");
    const aspect = window.innerWidth / window.innerHeight;
    const viewD = aspect < 1 ? this.d / aspect : this.d;

    this.camera = new THREE.OrthographicCamera(
      -viewD * aspect,
      viewD * aspect,
      viewD,
      -viewD,
      1,
      1000,
    );
    this.camera.position.set(25, 25, 25);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.setupScene();

    this.lastTime = performance.now();
    this.animate = this.animate.bind(this);
    this.handleResize = this.handleResize.bind(this);

    window.addEventListener("resize", this.handleResize);
    this.animate();
  }

  private setupScene() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    this.scene.add(dirLight);

    const roadGeo = new THREE.PlaneGeometry(12, 60);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.y = -0.01;
    this.scene.add(road);

    const lineGeo = new THREE.PlaneGeometry(12, 0.5);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const startLine = new THREE.Mesh(lineGeo, lineMat);
    startLine.rotation.x = -Math.PI / 2;
    startLine.position.set(0, 0, -20);
    this.scene.add(startLine);

    const finishLine = new THREE.Mesh(lineGeo, lineMat);
    finishLine.rotation.x = -Math.PI / 2;
    finishLine.position.set(0, 0, 20);
    this.scene.add(finishLine);

    const pillarGeo = new THREE.BoxGeometry(1, 4, 1);
    const startPillarMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
    const finishPillarMat = new THREE.MeshStandardMaterial({ color: 0xeab308 });

    const p1 = new THREE.Mesh(pillarGeo, startPillarMat);
    p1.position.set(-6.5, 2, -20);
    this.scene.add(p1);
    const p2 = new THREE.Mesh(pillarGeo, startPillarMat);
    p2.position.set(6.5, 2, -20);
    this.scene.add(p2);

    const p3 = new THREE.Mesh(pillarGeo, finishPillarMat);
    p3.position.set(-6.5, 2, 20);
    this.scene.add(p3);
    const p4 = new THREE.Mesh(pillarGeo, finishPillarMat);
    p4.position.set(6.5, 2, 20);
    this.scene.add(p4);

    const createTree = (x: number, z: number) => {
      const tree = new THREE.Group();
      const trunkGeo = new THREE.BoxGeometry(0.6, 2, 0.6);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1;
      tree.add(trunk);

      const leavesGeo = new THREE.BoxGeometry(2.5, 3, 2.5);
      const leavesMat = new THREE.MeshStandardMaterial({ color: 0x22c55e });
      const leaves = new THREE.Mesh(leavesGeo, leavesMat);
      leaves.position.y = 3.5;
      tree.add(leaves);

      tree.position.set(x, 0, z);
      this.scene.add(tree);
    };

    const placedTrees: { x: number; z: number }[] = [];
    for (let i = 0; i < 60; i++) {
      if (placedTrees.length >= 20) break;

      let x =
        Math.random() > 0.5 ? 12 + Math.random() * 10 : -22 + Math.random() * 8;
      let z = -25 + Math.random() * 50;

      let tooClose = false;
      for (let t of placedTrees) {
        const dx = t.x - x;
        const dz = t.z - z;
        // just ensure trees are far enough
        if (Math.sqrt(dx * dx + dz * dz) < 3.5) {
          tooClose = true;
          break;
        }
      }

      if (!tooClose) {
        placedTrees.push({ x, z });
        createTree(x, z);
      }
    }

    const createCrowdMember = (x: number, z: number) => {
      const group = new THREE.Group();
      const crowdColors = [
        0xf43f5e, 0x8b5cf6, 0x06b6d4, 0xf97316, 0xeab308, 0xec4899,
      ];
      const color = crowdColors[Math.floor(Math.random() * crowdColors.length)];

      const geo = new THREE.BoxGeometry(1, 1, 1);
      const mat = new THREE.MeshStandardMaterial({ color });
      const cube = new THREE.Mesh(geo, mat);
      cube.position.y = 0.5;
      group.add(cube);

      const eyeGeo = new THREE.BoxGeometry(0.1, 0.2, 0.2);
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
      eyeL.position.set(0.51, 0.7, -0.25);
      const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
      eyeR.position.set(0.51, 0.7, 0.25);
      group.add(eyeL);
      group.add(eyeR);

      group.rotation.y = (Math.random() - 0.5) * 0.4;
      group.position.set(x, 0, z);
      this.scene.add(group);
    };

    for (let i = 0; i < 7; i++) {
      let x = -11 + Math.random() * 2;
      let z = -15 + Math.random() * 30;
      createCrowdMember(x, z);
    }

    // Racers
    const colors = [0xef4444, 0x3b82f6, 0x22c55e, 0xeab308];
    const xPositions = [-4.5, -1.5, 1.5, 4.5];

    for (let i = 0; i < 4; i++) {
      const group = new THREE.Group();

      const geo = new THREE.BoxGeometry(1, 1, 1);
      const mat = new THREE.MeshStandardMaterial({ color: colors[i] });
      const cube = new THREE.Mesh(geo, mat);
      cube.position.y = 0.5;
      group.add(cube);

      const eyeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.1);
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
      eyeL.position.set(-0.25, 0.7, 0.51);
      const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
      eyeR.position.set(0.25, 0.7, 0.51);
      group.add(eyeL);
      group.add(eyeR);

      group.position.set(xPositions[i], 0, this.startZ);
      this.scene.add(group);

      const maxTrail = 60;
      const trailGeo = new THREE.BufferGeometry();
      const trailPositions = new Float32Array(maxTrail * 3);
      for (let j = 0; j < maxTrail * 3; j++) {
        trailPositions[j * 3] = xPositions[i];
        trailPositions[j * 3 + 1] = 0.1;
        trailPositions[j * 3 + 2] = this.startZ;
      }
      trailGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(trailPositions, 3),
      );
      const trailMat = new THREE.LineBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.5,
      });
      const trail = new THREE.Line(trailGeo, trailMat);
      this.scene.add(trail);

      this.racers.push({
        group,
        speed: 0,
        targetSpeed: 0,
        trail,
        trailPositions,
        baseX: xPositions[i],
        finished: false,
      });
    }
  }

  public cheer() {
    if (this.state.gameState !== "RACING") return;

    const now = performance.now();
    this.state.clicks.push(now);
    this.state.clicks = this.state.clicks.filter((t) => now - t < 1000);
    this.state.cps = this.state.clicks.length;
  }

  public resetRace() {
    for (let r of this.racers) {
      r.group.position.set(r.baseX, 0, this.startZ);
      r.speed = 0;
      r.targetSpeed = 0;
      r.finished = false;
      for (let j = 0; j < 40; j++) {
        r.trailPositions[j * 3] = r.baseX;
        r.trailPositions[j * 3 + 1] = 0.1;
        r.trailPositions[j * 3 + 2] = this.startZ;
      }
      r.trail.geometry.attributes.position.needsUpdate = true;
    }
    this.state.clicks = [];
    this.state.cps = 0;
    this.state.anxious = false;
    this.countdownTimer = 3.0;
    this.finishCounter = 0;
    this.state.playerRank = 0;
    this.state.gameState = "COUNTDOWN";
  }

  private animate() {
    this.animationId = requestAnimationFrame(this.animate);
    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;
    this.frameCount++;

    if (this.state.gameState === "COUNTDOWN") {
      this.countdownTimer -= dt;
      if (this.countdownTimer > 2) this.state.countdownText = "3";
      else if (this.countdownTimer > 1) this.state.countdownText = "2";
      else if (this.countdownTimer > 0) this.state.countdownText = "1";
      else {
        this.state.countdownText = "GO!";
        if (this.countdownTimer < -0.5) {
          this.state.gameState = "RACING";
        }
      }
    } else if (
      this.state.gameState === "RACING" ||
      this.state.gameState === "FINISHED"
    ) {
      if (this.frameCount % 5 === 0) {
        this.state.clicks = this.state.clicks.filter((t) => now - t < 1000);
        this.state.cps = this.state.clicks.length;
      }

      let allFinished = true;

      if (!this.racers[0].finished) {
        allFinished = false;
        if (this.state.cps < 1) {
          this.racers[0].targetSpeed = 0.5;
          this.state.anxious = false;
          this.racers[0].group.position.x = this.racers[0].baseX;
        } else if (this.state.cps > 1) {
          this.racers[0].targetSpeed = 0.5;
          this.state.anxious = true;
          this.racers[0].group.position.x =
            this.racers[0].baseX + (Math.random() - 0.5) * 0.5;
        } else {
          this.racers[0].targetSpeed = 4;
          this.state.anxious = false;
          this.racers[0].group.position.x = this.racers[0].baseX;
        }
      }

      for (let i = 1; i < 4; i++) {
        if (!this.racers[i].finished) {
          allFinished = false;
          if (Math.random() < 0.02) {
            this.racers[i].targetSpeed = 1.5 + Math.random() * 2.5;
          }
        }
      }

      this.racers.forEach((r, i) => {
        if (!r.finished) {
          r.speed += (r.targetSpeed - r.speed) * dt * 3;
          r.group.position.z += r.speed * dt;

          if (r.group.position.z >= this.finishZ) {
            r.group.position.z = this.finishZ;
            if (!r.finished) {
              r.finished = true;
              this.finishCounter++;
              if (i === 0) {
                this.state.playerRank = this.finishCounter;
                this.state.anxious = false;
              }
            }
            r.speed = 0;
            r.targetSpeed = 0;
          }

          for (let j = r.trailPositions.length - 3; j >= 3; j -= 3) {
            r.trailPositions[j] = r.trailPositions[j - 3];
            r.trailPositions[j + 1] = r.trailPositions[j - 2];
            r.trailPositions[j + 2] = r.trailPositions[j - 1];
          }
          r.trailPositions[0] = r.group.position.x;
          r.trailPositions[1] = 0.1;
          r.trailPositions[2] = r.group.position.z;
          r.trail.geometry.attributes.position.needsUpdate = true;
        }
      });

      if (this.racers[0].finished && this.state.gameState === "RACING") {
        this.state.gameState = "FINISHED";
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    const aspect = width / height;
    const viewD = aspect < 1 ? this.d / aspect : this.d;
    this.camera.left = -viewD * aspect;
    this.camera.right = viewD * aspect;
    this.camera.top = viewD;
    this.camera.bottom = -viewD;
    this.camera.updateProjectionMatrix();
  }

  public dispose() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.handleResize);
    this.renderer.dispose();
  }
}
