import TreeView from "./components/TreeView";
import databases from "./data/databases.json";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 py-10 text-neutral-800 md:py-20">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <TreeView title="Database Explorer" items={databases} />
      </div>
    </div>
  );
}

export default App;
