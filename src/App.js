import IngredientList from "./Components/IngredientList/IngredientList";
import { IngredientProvider } from "./Components/ingredient-context/IngredientContext";
import SearchBar from "./Components/search-bar/SearchBar";

function App() {
  return (
    <>
      <IngredientProvider>
        <div className="flex items-center justify-center h-screen">
          <div className="block">
            <div className="w-96">
              <SearchBar />
            </div>
            <div>
              <IngredientList />
            </div>
          </div>
        </div>
      </IngredientProvider>
    </>
  );
}

export default App;
