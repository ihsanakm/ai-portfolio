import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

const Shape = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial wireframe />
      </mesh>
    </Float>
  );
};

export default function FloatingShape() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />
      <Shape />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}