'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useTheme } from 'next-themes'

import { HeroModel } from '#components/hero-model'

function HeroScene() {
  const { resolvedTheme } = useTheme()

  return (
    <Canvas>
      <color
        attach="background"
        args={resolvedTheme === 'dark' ? [0xf8fafc] : [0x18181b]}
      />
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <HeroModel />
    </Canvas>
  )
}

export { HeroScene }
