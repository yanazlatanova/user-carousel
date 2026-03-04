import React from "react"
import type { User } from '../types/user'
import { Html } from "@react-three/drei"

interface Props {
    users: User[]
}

export const CardRing: React.FC<Props> = ({ users }) => {
    if (users.length === 0) return null
    const userCount = users.length

    const ring_length = userCount * 4
    // ring_length = R * 2 * PI
    const R = ring_length / (Math.PI * 2) // Adjust the radius based on the number of users

    return (
        <group>
            {users.map((user, i) => {
                const radians = (i / userCount) * (Math.PI * 2)  // angle in radians not degrees       
                const x = R * Math.cos(radians)
                const z = R * Math.sin(radians)
                const y = 0 // rotate on the XZ plane only

                return (
                    <mesh key={user.id} position={[x, y, z]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color="yellow" />
                        <Html>{user.name}</Html>
                    </mesh>
                );
            })}
        </group>
    )
}