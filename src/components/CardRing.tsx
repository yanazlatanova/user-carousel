import React from "react"

export const CardRing: React.FC = () => {
    return (
        <mesh position={[2, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="purple" />
        </mesh>
    )
}