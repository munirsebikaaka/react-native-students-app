import { registerRootComponent } from "expo";
import App from "./App";
import { StudentsProvider } from "./contexts/StudentsContext";

function Root() {
  return (
    <StudentsProvider>
      <App />
    </StudentsProvider>
  );
}

registerRootComponent(Root);
