"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group, Mesh } from "three"

interface AgentModelProps {
  modelPath?: string
  color?: string
}

export function AgentModel({ modelPath = "default", color = "#4169e1" }: AgentModelProps) {
  const groupRef = useRef<Group>(null)
  const innerRef = useRef<Group>(null)
  const orbitRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = state.clock.elapsedTime * 0.5
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y = -state.clock.elapsedTime * 0.8
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  const getModelByPath = (path: string) => {
    const modelType = path.includes("nexus-ai")
      ? "nexus-ai"
      : path.includes("quantum-assistant")
        ? "quantum-assistant"
        : path.includes("cyber-guardian")
          ? "cyber-guardian"
          : path.includes("data-analyst")
            ? "data-analyst"
            : path.includes("creative-ai")
              ? "creative-ai"
              : path.includes("automation-bot") || path.includes("automation")
                ? "automation-bot"
                : "default"

    switch (modelType) {
      case "nexus-ai":
        return (
          <group>
            {/* Advanced Humanoid AI - Sleek Black & Gold Design */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.8, 1.2, 0.6]} />
              <meshStandardMaterial
                color="#0f0f0f"
                metalness={0.95}
                roughness={0.05}
                emissive="#d4af37"
                emissiveIntensity={0.1}
              />
            </mesh>

            <mesh position={[0, 1.0, 0]}>
              <boxGeometry args={[0.5, 0.6, 0.5]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.9}
                roughness={0.1}
                emissive="#d4af37"
                emissiveIntensity={0.2}
              />
            </mesh>

            <mesh position={[0, 1.0, 0.26]}>
              <boxGeometry args={[0.45, 0.3, 0.02]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.1}
                roughness={0.05}
                emissive="#d4af37"
                emissiveIntensity={0.8}
                transparent
                opacity={0.9}
              />
            </mesh>

            <mesh position={[-0.12, 1.05, 0.27]}>
              <sphereGeometry args={[0.04]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={1.2} />
            </mesh>
            <mesh position={[0.12, 1.05, 0.27]}>
              <sphereGeometry args={[0.04]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={1.2} />
            </mesh>

            <mesh position={[-0.6, 0.7, 0]}>
              <boxGeometry args={[0.25, 0.4, 0.25]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.9}
                roughness={0.1}
                emissive="#b8860b"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh position={[0.6, 0.7, 0]}>
              <boxGeometry args={[0.25, 0.4, 0.25]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.9}
                roughness={0.1}
                emissive="#b8860b"
                emissiveIntensity={0.3}
              />
            </mesh>

            <mesh position={[-0.7, 0.2, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.8]} />
              <meshStandardMaterial
                color="#2a2a2a"
                metalness={0.8}
                roughness={0.2}
                emissive="#d4af37"
                emissiveIntensity={0.05}
              />
            </mesh>
            <mesh position={[0.7, 0.2, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.8]} />
              <meshStandardMaterial
                color="#2a2a2a"
                metalness={0.8}
                roughness={0.2}
                emissive="#d4af37"
                emissiveIntensity={0.05}
              />
            </mesh>

            <mesh position={[-0.7, -0.3, 0]}>
              <sphereGeometry args={[0.12]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.9}
                roughness={0.1}
                emissive="#d4af37"
                emissiveIntensity={0.4}
              />
            </mesh>
            <mesh position={[0.7, -0.3, 0]}>
              <sphereGeometry args={[0.12]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.9}
                roughness={0.1}
                emissive="#d4af37"
                emissiveIntensity={0.4}
              />
            </mesh>

            <mesh position={[-0.25, -1.0, 0]}>
              <cylinderGeometry args={[0.12, 0.12, 0.8]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.7}
                roughness={0.3}
                emissive="#d4af37"
                emissiveIntensity={0.02}
              />
            </mesh>
            <mesh position={[0.25, -1.0, 0]}>
              <cylinderGeometry args={[0.12, 0.12, 0.8]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.7}
                roughness={0.3}
                emissive="#d4af37"
                emissiveIntensity={0.02}
              />
            </mesh>

            <mesh position={[0, 0.3, 0.31]}>
              <cylinderGeometry args={[0.15, 0.15, 0.05]} />
              <meshStandardMaterial
                color="#d4af37"
                emissive="#d4af37"
                emissiveIntensity={0.8}
                transparent
                opacity={0.9}
              />
            </mesh>

            <mesh position={[0, 0.6, 0.31]} scale={[0.6, 0.03, 0.03]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.6} />
            </mesh>
            <mesh position={[0, 0.0, 0.31]} scale={[0.4, 0.03, 0.03]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.6} />
            </mesh>
          </group>
        )

      case "quantum-assistant":
        return (
          <group>
            <group ref={innerRef}>
              <mesh>
                <icosahedronGeometry args={[0.6]} />
                <meshStandardMaterial
                  color="#8b5cf6"
                  metalness={0.3}
                  roughness={0.1}
                  emissive="#7c3aed"
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.8}
                />
              </mesh>

              <mesh>
                <sphereGeometry args={[0.4]} />
                <meshStandardMaterial
                  color="#a855f7"
                  emissive="#9333ea"
                  emissiveIntensity={1.0}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            </group>

            <group ref={orbitRef}>
              {[...Array(8)].map((_, i) => {
                const angle = (i * Math.PI) / 4
                const radius = 1.2 + Math.sin(i) * 0.3
                return (
                  <mesh
                    key={i}
                    position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 0.4, Math.sin(angle) * radius]}
                  >
                    <sphereGeometry args={[0.08]} />
                    <meshStandardMaterial
                      color="#c084fc"
                      emissive="#a855f7"
                      emissiveIntensity={0.8}
                      transparent
                      opacity={0.9}
                    />
                  </mesh>
                )
              })}
            </group>

            {[...Array(3)].map((_, i) => (
              <mesh key={i} rotation={[(Math.PI / 3) * i, (Math.PI / 4) * i, 0]}>
                <torusGeometry args={[1.0 + i * 0.2, 0.02, 16, 100]} />
                <meshStandardMaterial
                  color="#ddd6fe"
                  emissive="#8b5cf6"
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            ))}

            {[...Array(6)].map((_, i) => {
              const angle = (i * Math.PI) / 3
              return (
                <mesh key={i} position={[Math.cos(angle) * 0.8, 0, Math.sin(angle) * 0.8]} rotation={[0, angle, 0]}>
                  <boxGeometry args={[0.02, 0.6, 0.02]} />
                  <meshStandardMaterial color="#e879f9" emissive="#d946ef" emissiveIntensity={0.7} />
                </mesh>
              )
            })}
          </group>
        )

      case "cyber-guardian":
        return (
          <group>
            <mesh>
              <dodecahedronGeometry args={[0.7]} />
              <meshStandardMaterial
                color="#dc2626"
                metalness={0.8}
                roughness={0.1}
                emissive="#b91c1c"
                emissiveIntensity={0.4}
              />
            </mesh>

            <mesh>
              <octahedronGeometry args={[0.5]} />
              <meshStandardMaterial
                color="#f87171"
                emissive="#ef4444"
                emissiveIntensity={0.8}
                transparent
                opacity={0.7}
              />
            </mesh>

            <group ref={orbitRef}>
              {[...Array(3)].map((_, i) => (
                <mesh key={i} rotation={[0, 0, (Math.PI / 3) * i]} position={[0, 0, 0]}>
                  <torusGeometry args={[1.2 + i * 0.3, 0.05, 8, 32]} />
                  <meshStandardMaterial
                    color="#fca5a5"
                    emissive="#f87171"
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              ))}
            </group>

            {[...Array(6)].map((_, i) => {
              const angle = (i * Math.PI) / 3
              return (
                <mesh key={i} position={[Math.cos(angle) * 1.4, Math.sin(angle) * 0.3, Math.sin(angle) * 1.4]}>
                  <boxGeometry args={[0.15, 0.15, 0.15]} />
                  <meshStandardMaterial color="#fee2e2" emissive="#fca5a5" emissiveIntensity={0.5} />
                </mesh>
              )
            })}

            {[...Array(4)].map((_, i) => {
              const angle = (i * Math.PI) / 2
              return (
                <mesh key={i} position={[Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8]}>
                  <cylinderGeometry args={[0.05, 0.05, 0.3]} />
                  <meshStandardMaterial color="#dc2626" emissive="#ef4444" emissiveIntensity={1.0} />
                </mesh>
              )
            })}

            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[1.5, 1.5, 0.02]} />
              <meshStandardMaterial
                color="#fecaca"
                emissive="#f87171"
                emissiveIntensity={0.3}
                transparent
                opacity={0.4}
              />
            </mesh>
          </group>
        )

      case "data-analyst":
        return (
          <group>
            <mesh>
              <octahedronGeometry args={[0.6]} />
              <meshStandardMaterial
                color="#0891b2"
                metalness={0.7}
                roughness={0.2}
                emissive="#0e7490"
                emissiveIntensity={0.4}
              />
            </mesh>

            <group ref={innerRef}>
              {[...Array(4)].map((_, i) => (
                <mesh key={i} rotation={[(Math.PI / 4) * i, (Math.PI / 6) * i, 0]}>
                  <torusGeometry args={[0.9 + i * 0.1, 0.03, 16, 100]} />
                  <meshStandardMaterial
                    color="#67e8f9"
                    emissive="#22d3ee"
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              ))}
            </group>

            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI) / 4
              const radius = 1.3
              return (
                <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(i * 0.5) * 0.4, Math.sin(angle) * radius]}>
                  <boxGeometry args={[0.12, 0.12, 0.12]} />
                  <meshStandardMaterial color="#a5f3fc" emissive="#67e8f9" emissiveIntensity={0.7} />
                </mesh>
              )
            })}

            {[...Array(6)].map((_, i) => {
              const angle = (i * Math.PI) / 3
              return (
                <mesh key={i} position={[Math.cos(angle) * 0.8, 0, Math.sin(angle) * 0.8]} rotation={[0, angle, 0]}>
                  <boxGeometry args={[0.03, 1.2, 0.03]} />
                  <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#0891b2"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              )
            })}

            {[...Array(4)].map((_, i) => {
              const angle = (i * Math.PI) / 2
              return (
                <mesh
                  key={i}
                  position={[Math.cos(angle) * 1.6, 0, Math.sin(angle) * 1.6]}
                  rotation={[0, angle + Math.PI / 2, 0]}
                >
                  <boxGeometry args={[0.4, 0.6, 0.02]} />
                  <meshStandardMaterial
                    color="#cffafe"
                    emissive="#22d3ee"
                    emissiveIntensity={0.4}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
              )
            })}
          </group>
        )

      case "creative-ai":
        return (
          <group>
            <group ref={innerRef}>
              <mesh>
                <tetrahedronGeometry args={[0.8]} />
                <meshStandardMaterial
                  color="#f59e0b"
                  metalness={0.6}
                  roughness={0.2}
                  emissive="#d97706"
                  emissiveIntensity={0.4}
                />
              </mesh>

              <mesh>
                <sphereGeometry args={[0.5]} />
                <meshStandardMaterial
                  color="#fbbf24"
                  emissive="#f59e0b"
                  emissiveIntensity={0.8}
                  transparent
                  opacity={0.7}
                />
              </mesh>
            </group>

            {[...Array(3)].map((_, i) => {
              const points = []
              for (let j = 0; j <= 50; j++) {
                const angle = (j / 50) * Math.PI * 4 + (i * Math.PI * 2) / 3
                const radius = 0.8 + j * 0.02
                const height = (j / 50) * 2 - 1
                points.push([Math.cos(angle) * radius, height, Math.sin(angle) * radius])
              }

              return (
                <group key={i}>
                  {points.map((point, idx) => (
                    <mesh key={idx} position={point}>
                      <sphereGeometry args={[0.03]} />
                      <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={0.6} />
                    </mesh>
                  ))}
                </group>
              )
            })}

            {[...Array(6)].map((_, i) => {
              const angle = (i * Math.PI) / 3
              const toolTypes = [
                { scale: [0.05, 0.4, 0.05], color: "#fbbf24" },
                { scale: [0.3, 0.05, 0.05], color: "#f59e0b" },
                { scale: [0.08, 0.08, 0.3], color: "#d97706" },
              ]
              const tool = toolTypes[i % 3]

              return (
                <mesh
                  key={i}
                  position={[Math.cos(angle) * 1.4, Math.sin(i * 0.3) * 0.3, Math.sin(angle) * 1.4]}
                  rotation={[Math.sin(i), angle, Math.cos(i)]}
                  scale={tool.scale}
                >
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color={tool.color} emissive={tool.color} emissiveIntensity={0.5} />
                </mesh>
              )
            })}

            {[...Array(12)].map((_, i) => {
              const angle = (i * Math.PI) / 6
              const radius = 1.8 + Math.sin(i) * 0.4
              return (
                <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(i * 0.7) * 0.8, Math.sin(angle) * radius]}>
                  <sphereGeometry args={[0.06]} />
                  <meshStandardMaterial
                    color="#fef3c7"
                    emissive="#fbbf24"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.9}
                  />
                </mesh>
              )
            })}
          </group>
        )

      case "automation-bot":
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <coneGeometry args={[1.5, 2.5, 3]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.9}
                roughness={0.1}
                wireframe={true}
                transparent={true}
                opacity={0.9}
              />
            </mesh>

            <mesh position={[0, 0, 0]}>
              <coneGeometry args={[1.52, 2.52, 3]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
                wireframe={true}
                transparent={true}
                opacity={0.8}
                emissive="#FFD700"
                emissiveIntensity={0.3}
              />
            </mesh>

            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.9, 0.04, 16, 100]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={0.9}
                roughness={0.1}
                emissive="#FFD700"
                emissiveIntensity={0.5}
              />
            </mesh>

            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.88, 0.02, 16, 100]} />
              <meshStandardMaterial
                color="#FFF700"
                emissive="#FFD700"
                emissiveIntensity={0.8}
                transparent
                opacity={0.7}
              />
            </mesh>

            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.025, 0.025, 2.5, 8]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={0.9}
                roughness={0.1}
                emissive="#FFD700"
                emissiveIntensity={0.6}
              />
            </mesh>

            <mesh position={[0, 1.25, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={1}
                roughness={0}
                emissive="#FFD700"
                emissiveIntensity={0.8}
              />
            </mesh>
            <mesh position={[0, -1.25, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={1}
                roughness={0}
                emissive="#FFD700"
                emissiveIntensity={0.8}
              />
            </mesh>

            <mesh position={[0.8, 0, 0]}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.8}
                roughness={0.2}
                emissive="#FFD700"
                emissiveIntensity={0.4}
              />
            </mesh>
            <mesh position={[-0.8, 0, 0]}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.8}
                roughness={0.2}
                emissive="#FFD700"
                emissiveIntensity={0.4}
              />
            </mesh>
            <mesh position={[0, 0, 0.8]}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.8}
                roughness={0.2}
                emissive="#FFD700"
                emissiveIntensity={0.4}
              />
            </mesh>
            <mesh position={[0, 0, -0.8]}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.8}
                roughness={0.2}
                emissive="#FFD700"
                emissiveIntensity={0.4}
              />
            </mesh>

            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI) / 4
              const radius = 1.6
              return (
                <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(i * 0.7) * 0.5, Math.sin(angle) * radius]}>
                  <sphereGeometry args={[0.04]} />
                  <meshStandardMaterial
                    color="#FFD700"
                    emissive="#FFD700"
                    emissiveIntensity={0.9}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              )
            })}

            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.15]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.9}
                roughness={0.1}
                emissive="#FFD700"
                emissiveIntensity={0.7}
                transparent
                opacity={0.9}
              />
            </mesh>
          </group>
        )

      default:
        return (
          <mesh ref={meshRef} scale={1.2}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.7}
              metalness={0.3}
              roughness={0.2}
            />
          </mesh>
        )
    }
  }

  return <group ref={groupRef}>{getModelByPath(modelPath)}</group>
}
