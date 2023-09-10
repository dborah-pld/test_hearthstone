import { GlobalContextProvider } from "./context/globalContext";
import { HeroPage, HomePage } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classe/:className" element={<HeroPage />} />
          </Routes>
        </GlobalContextProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
