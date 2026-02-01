import { useRef, Suspense, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { createPortal } from 'react-dom'

function ScrollingAstronaut({ posX, posY }) {
  const mesh = useRef()
  const { scene } = useGLTF('/astronaut.glb')
  const clonedScene = useMemo(() => scene.clone(), [scene])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // Convert percentage to 3D coordinates (-4 to 4 range roughly)
    mesh.current.position.x = ((posX - 50) / 50) * 5
    mesh.current.position.y = ((50 - posY) / 50) * 3 + Math.sin(t * 0.5) * 0.3
    mesh.current.rotation.z = Math.sin(t * 0.3) * 0.1
  })

  return (
    <primitive ref={mesh} object={clonedScene} scale={1.2} rotation={[0, -Math.PI / 2, 0]} />
  )
}

export default function ScrollAstronaut() {
  const [visible, setVisible] = useState(false)
  const [posX, setPosX] = useState(80)
  const [posY, setPosY] = useState(50)
  
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollY = window.scrollY
      const scrollPercent = scrollY / (document.body.scrollHeight - window.innerHeight)
      
      setVisible(scrollY > heroHeight * 0.8)
      
      const xPos = 50 + Math.sin(scrollPercent * Math.PI * 3) * 30
      const yPos = 30 + scrollPercent * 20
      setPosX(Math.max(20, Math.min(80, xPos)))
      setPosY(Math.max(20, Math.min(70, yPos)))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return createPortal(
    <div 
      style={{ 
        position: 'fixed',
        left: 0, 
        top: 0, 
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none'
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <directionalLight position={[-5, 3, 5]} intensity={2} />
        <pointLight position={[0, 0, 5]} intensity={3} />
        <Suspense fallback={null}>
          <ScrollingAstronaut posX={posX} posY={posY} />
        </Suspense>
      </Canvas>
    </div>,
    document.body
  )
}
