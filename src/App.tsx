import { UsersProvider } from "./context/users/index";
import { MainScene } from "./pages/MainScene";

function App() {
  return (
    <UsersProvider>
        <MainScene />
    </UsersProvider>
  )
}

export default App
