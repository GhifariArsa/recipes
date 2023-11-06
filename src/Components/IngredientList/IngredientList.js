import IngredientBubble from "../ingredientBubble/IngredientBubble";

export default function IngredientList() {
  const list = ["eggs", "milk", "flour"];

  return (
    <>
      <div className="flex gap-3">
        {list.map((ingredient, index) => {
          return <IngredientBubble name={ingredient} />;
        })}
      </div>
    </>
  );
}
