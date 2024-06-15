import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const WavePoints: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = [];
    const colors = [];
    const numPoints = 10000;
    const spread = 50;

    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      positions.push(x, y, z);

      const color = new THREE.Color(0x0077ff);
      colors.push(color.r, color.g, color.b);
    }

    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          itemSize={3}
          count={colors.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        vertexColors
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const ThreeDWave: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
      <color attach="background" args={['#001828']} />
      <WavePoints />
    </Canvas>
  );
};

export default ThreeDWave;
