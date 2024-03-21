import "./styles/caixa.css";
import "./styles/global.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/react-query";
import Photos from "./pages/Photos";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-screen font-[futuraBook]">
        <Photos />
      </main>
    </QueryClientProvider>
  );
}

export default App;
