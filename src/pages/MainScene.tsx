import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CardRing } from '../components/CardRing'
import { useUsers } from '../context/users'

export const MainScene: React.FC = () => {
    const { data } = useUsers()
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

            <CardRing users={data ?? []} />
        </Canvas>
    )
}