"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group } from "three"

export function RobotModel() {
  const groupRef = useRef<Group>(null)
  const innerRingsRef = useRef<Group>(null)
  const outerRingsRef = useRef<Group>(null)
  const particlesRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.1
    }
    if (innerRingsRef.current) {
      innerRingsRef.current.rotation.z = state.clock.elapsedTime * 0.8
    }
    if (outerRingsRef.current) {
      outerRingsRef.current.rotation.z = -state.clock.elapsedTime * 0.4
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.6
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer Housing Ring */}
      <mesh>
        <torusGeometry args={[1.2, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.1}
          emissive="#d4af37"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Secondary Housing Ring */}
      <mesh>
        <torusGeometry args={[1.0, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.95}
          roughness={0.05}
          emissive="#d4af37"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner Rotating Rings */}
      <group ref={innerRingsRef}>
        {[...Array(3)].map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
            <torusGeometry args={[0.7 - i * 0.1, 0.03, 12, 100]} />
            <meshStandardMaterial
              color="#d4af37"
              emissive="#d4af37"
              emissiveIntensity={0.6 - i * 0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Outer Rotating Elements */}
      <group ref={outerRingsRef}>
        {[...Array(8)].map((_, i) => {
          const angle = (i * Math.PI) / 4
          return (
            <mesh key={i} position={[Math.cos(angle) * 1.1, 0, Math.sin(angle) * 1.1]} rotation={[0, angle, 0]}>
              <boxGeometry args={[0.08, 0.3, 0.08]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.8}
                roughness={0.2}
                emissive="#b8860b"
                emissiveIntensity={0.4}
              />
            </mesh>
          )
        })}
      </group>

      {/* Central Energy Core */}
      <mesh>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#87ceeb" emissive="#4169e1" emissiveIntensity={1.2} transparent opacity={0.9} />
      </mesh>

      {/* Energy Containment Field */}
      <mesh>
        <sphereGeometry args={[0.45]} />
        <meshStandardMaterial
          color="#87ceeb"
          emissive="#4169e1"
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Discharge Particles */}
      <group ref={particlesRef}>
        {[...Array(12)].map((_, i) => {
          const angle = (i * Math.PI) / 6
          const radius = 0.8 + Math.sin(i * 0.5) * 0.2
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(i * 0.3) * 0.3, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.02]} />
              <meshStandardMaterial
                color="#87ceeb"
                emissive="#4169e1"
                emissiveIntensity={0.8}
                transparent
                opacity={0.9}
              />
            </mesh>
          )
        })}
      </group>

      {/* Power Conduits */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * Math.PI) / 3
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.6, 0, Math.sin(angle) * 0.6]} rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.4]} />
            <meshStandardMaterial
              color="#d4af37"
              emissive="#d4af37"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        )
      })}

      {/* Outer Glow Ring */}
      <mesh>
        <torusGeometry args={[1.4, 0.02, 16, 100]} />
        <meshStandardMaterial color="#87ceeb" emissive="#4169e1" emissiveIntensity={0.4} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}
