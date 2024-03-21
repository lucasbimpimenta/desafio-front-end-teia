import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./libs/react-query"
import Photos from "./pages/photos";

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Photos/>
    </QueryClientProvider>
  )
}

export default App
