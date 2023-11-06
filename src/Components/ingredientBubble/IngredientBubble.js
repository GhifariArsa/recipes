export default function IngredientBubble({ name }) {

    const handleClick = () => {
        console.log(`HELLO CLICK ${name}`)
    }
    
    return (
      <div className="bg-green-200 border rounded-2xl p-1 flex items-center">
        <span className="mr-1">{name}</span>
        <span className="text-gray-400" onClick={handleClick}>x</span>
      </div>
    );
  }
  