import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CardRing } from '../components/CardRing'

export const MainScene: React.FC = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>

            <CardRing />
        </Canvas>
    )
}