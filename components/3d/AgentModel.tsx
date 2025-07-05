"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group } from "three"

interface AgentModelProps {
  modelPath: string
}

export function AgentModel({ modelPath }: AgentModelProps) {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  const getModelByPath = (path: string) => {
    switch (path) {
      case "/models/nexus-ai.glb":
        return (
          <group>
            {/* Robot Body - Black with Gold Accents */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1, 1.5, 0.8]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.9}
                roughness={0.1}
                emissive="#d4af37"
                emissiveIntensity={0.1}
              />
            </mesh>

            {/* Robot Head - Black with Gold Glow */}
            <mesh position={[0, 1.2, 0]}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial
                color="#0a0a0a"
                metalness={0.95}
                roughness={0.05}
                emissive="#d4af37"
                emissiveIntensity={0.2}
              />
            </mesh>

            {/* Eyes - Bright Gold */}
            <mesh position={[-0.15, 1.3, 0.35]}>
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[0.15, 1.3, 0.35]}>
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.8} />
            </mesh>

            {/* Arms - Black with Gold Trim */}
            <mesh position={[-0.8, 0.3, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 1]} />
              <meshStandardMaterial
                color="#2a2a2a"
                metalness={0.8}
                roughness={0.2}
                emissive="#d4af37"
                emissiveIntensity={0.05}
              />
            </mesh>
            <mesh position={[0.8, 0.3, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 1]} />
              <meshStandardMaterial
                color="#2a2a2a"
                metalness={0.8}
                roughness={0.2}
                emissive="#d4af37"
                emissiveIntensity={0.05}
              />
            </mesh>

            {/* Legs - Black */}
            <mesh position={[-0.3, -1.2, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 1]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.7}
                roughness={0.3}
                emissive="#d4af37"
                emissiveIntensity={0.02}
              />
            </mesh>
            <mesh position={[0.3, -1.2, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 1]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.7}
                roughness={0.3}
                emissive="#d4af37"
                emissiveIntensity={0.02}
              />
            </mesh>

            {/* Chest Core - Glowing Gold */}
            <mesh position={[0, 0.2, 0.41]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial
                color="#d4af37"
                emissive="#d4af37"
                emissiveIntensity={0.6}
                transparent
                opacity={0.9}
              />
            </mesh>

            {/* Gold Accent Lines */}
            <mesh position={[0, 0.5, 0.41]} scale={[0.8, 0.05, 0.05]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.4} />
            </mesh>
            <mesh position={[0, -0.2, 0.41]} scale={[0.6, 0.05, 0.05]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.4} />
            </mesh>

            {/* Shoulder Pads - Gold */}
            <mesh position={[-0.6, 0.8, 0]}>
              <boxGeometry args={[0.2, 0.3, 0.2]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.9}
                roughness={0.1}
                emissive="#d4af37"
                emissiveIntensity={0.2}
              />
            </mesh>
            <mesh position={[0.6, 0.8, 0]}>
              <boxGeometry args={[0.2, 0.3, 0.2]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.9}
                roughness={0.1}
                emissive="#d4af37"
                emissiveIntensity={0.2}
              />
            </mesh>
          </group>
        )

      case "/models/quantum-assistant.glb":
        return (
          <group>
            <mesh>
              <icosahedronGeometry args={[0.7]} />
              <meshStandardMaterial
                color="#8b5cf6"
                metalness={0.9}
                roughness={0.1}
                emissive="#7c3aed"
                emissiveIntensity={0.2}
              />
            </mesh>
            {[...Array(6)].map((_, i) => (
              <mesh
                key={i}
                position={[
                  Math.cos((i * Math.PI) / 3) * 1.2,
                  Math.sin((i * Math.PI) / 3) * 0.3,
                  Math.sin((i * Math.PI) / 3) * 1.2,
                ]}
              >
                <sphereGeometry args={[0.1]} />
                <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
              </mesh>
            ))}
          </group>
        )

      case "/models/cyber-guardian.glb":
        return (
          <group>
            <mesh>
              <dodecahedronGeometry args={[0.8]} />
              <meshStandardMaterial
                color="#ef4444"
                metalness={0.8}
                roughness={0.2}
                emissive="#dc2626"
                emissiveIntensity={0.2}
              />
            </mesh>
            <mesh position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
              <dodecahedronGeometry args={[0.6]} />
              <meshStandardMaterial
                color="#f97316"
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.3}
                wireframe
              />
            </mesh>
          </group>
        )

      default:
        return (
          <group>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#10b981"
                metalness={0.7}
                roughness={0.3}
                emissive="#059669"
                emissiveIntensity={0.1}
              />
            </mesh>
          </group>
        )
    }
  }

  return <group ref={groupRef}>{getModelByPath(modelPath)}</group>
}
