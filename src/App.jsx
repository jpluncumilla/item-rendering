import { useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList";
import ItemList from "./ItemList";
import data from "./data.json";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  console.log(selectedCategories);

  const handleCategoryChange = (isChecked, id) => {
    //set state to checked input
    setSelectedCategories((previousSelection) =>
      isChecked
        ? //if an additional input is checked it needs to be included to current array
          [...previousSelection, id]
        : //if input is unselected create an array to remove its id
          previousSelection.filter((e) => e !== id)
    );
  };

  const filteredItems = data.items.filter((item) =>
    selectedCategories.includes(item.id)
  );

  return (
    <div className='App'>
      <h1>Reingold Assessment</h1>
      <CategoryList
        categories={data.categories}
        onCategoryChange={handleCategoryChange}
        selectedCategories={selectedCategories}
      />
      {selectedCategories.length === 0 && <ItemList items={data.items} />}
      {selectedCategories.length > 0 && <ItemList items={filteredItems} />}
    </div>
  );
}

export default App;
