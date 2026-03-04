import React from "react"
import { useUsers } from "../context/users/index"
import { UserCard }  from "../components/UserCard"


export const UserCardCollection: React.FC = () => {
    const { data, isLoading, isError } = useUsers()

    if (isLoading) {return <p>Loading...</p>}
    if (isError) {return <p>Error loading users. Please try again.</p>}

    return (
        <div>
            {data?.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}