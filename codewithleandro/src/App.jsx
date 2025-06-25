import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}

export default App;
