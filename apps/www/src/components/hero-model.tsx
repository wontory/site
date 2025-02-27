import { MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import { useRef } from 'react'
import type { Mesh } from 'three'

function HeroModel() {
  const mesh = useRef<Mesh>(null)
  const { nodes } = useGLTF('/models/logo.glb')
  const { viewport } = useThree()
  const { resolvedTheme } = useTheme()

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.z += 0.02
  })

  const materialProps = {
    thickness: 1,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  }

  return (
    <group scale={viewport.width / 3.5}>
      <Text
        fontSize={0.5}
        font="/fonts/pretendard-semibold.otf"
        position={[0, 0, -1]}
      >
        <color
          attach="color"
          args={resolvedTheme === 'dark' ? [0x020205] : [0xfafafa]}
        />
        wontory.dev
      </Text>
      <mesh ref={mesh} {...nodes.Logo} position={[0, 0, 0.5]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}

export { HeroModel }
