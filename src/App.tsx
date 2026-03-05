import { UsersProvider } from "./context";
import { MainScene } from "./pages/MainScene";

function App() {
  return (
    <UsersProvider>
        <MainScene />
    </UsersProvider>
  )
}

export default App
