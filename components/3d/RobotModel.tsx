"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group } from "three"

export function RobotModel() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Robot Body - Premium Gold */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.8]} />
        <meshStandardMaterial
          color="#d97706"
          metalness={0.9}
          roughness={0.1}
          emissive="#92400e"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Robot Head - Bright Gold */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.95}
          roughness={0.05}
          emissive="#f59e0b"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Eyes - Bright White/Gold */}
      <mesh position={[-0.15, 1.3, 0.35]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#ffffff" emissive="#fbbf24" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.15, 1.3, 0.35]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#ffffff" emissive="#fbbf24" emissiveIntensity={0.8} />
      </mesh>

      {/* Arms - Amber Gold */}
      <mesh position={[-0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.8}
          roughness={0.2}
          emissive="#d97706"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.8}
          roughness={0.2}
          emissive="#d97706"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Legs - Dark Gold */}
      <mesh position={[-0.3, -1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1]} />
        <meshStandardMaterial
          color="#b45309"
          metalness={0.7}
          roughness={0.3}
          emissive="#92400e"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0.3, -1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1]} />
        <meshStandardMaterial
          color="#b45309"
          metalness={0.7}
          roughness={0.3}
          emissive="#92400e"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Chest Detail - Glowing Core */}
      <mesh position={[0, 0.2, 0.41]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} transparent opacity={0.8} />
      </mesh>
    </group>
  )
}
