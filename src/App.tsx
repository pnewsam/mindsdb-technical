import DatabasesTreeView from "./components/DatabasesTreeView";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 text-gray-800 md:py-20">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <DatabasesTreeView />
      </div>
    </div>
  );
}

export default App;
