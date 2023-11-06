import { useIngredients } from "../ingredient-context/IngredientContext";

export default function SearchBar() {

  const {setIngredients} = useIngredients();

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <div className="container text-center">
        <form>
          <input type="text" className="shadow appearance-none rounded border min-w-full" placeholder="Add your ingredients"></input>
        </form>
      </div>
    </>
  );
}
