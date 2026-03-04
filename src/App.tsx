import { UsersProvider } from "./context/users/index";
import { UserCardCollection } from "./pages/UserCardCollection";

function App() {
  return (
    <UsersProvider>
      <h1>User Carousel</h1>
      <UserCardCollection />
    </UsersProvider>
  )
}

export default App
