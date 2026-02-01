import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Particles({ count = 1500 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [count])

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#818cf8" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function FloatingAstronaut() {
  const mesh = useRef()
  const { scene } = useGLTF('/astronaut.glb')
  const clonedScene = useMemo(() => scene.clone(), [scene])
  
  useFrame((state) => {
    const t = state.clock.elapsedTime
    mesh.current.position.x = Math.sin(t * 0.3) * 3
    mesh.current.position.y = Math.cos(t * 0.4) * 1.5
    mesh.current.position.z = Math.sin(t * 0.2) * 0.5
    // Gentle tilt only, always facing viewer
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.1
    mesh.current.rotation.z = Math.sin(t * 0.5) * 0.15
  })

  return (
    <primitive ref={mesh} object={clonedScene} scale={1.5} rotation={[0, -Math.PI / 2, 0]} />
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 3, 0]} intensity={1} />
        <pointLight position={[0, 0, 5]} intensity={1.5} />
        <Particles />
        <Suspense fallback={null}>
          <FloatingAstronaut />
        </Suspense>
      </Canvas>
    </div>
  )
}
