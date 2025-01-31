'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { HeroModel } from '#components/hero-model'

function HeroScene() {
  return (
    <Canvas className="bg-primary">
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <HeroModel />
    </Canvas>
  )
}

export { HeroScene }
