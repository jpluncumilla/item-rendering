import React from "react";

const CategoryList = ({ categories, onCategoryChange, selectedCategories }) => {
  const handleChange = (event, id) => {
    onCategoryChange(event.target.checked, id);
  };

  const render = (categories) => {
    return categories.map((category) => (
      <div key={category.id}>
        <input
          type='checkbox'
          checked={selectedCategories.includes(category.id)}
          onChange={(e) => handleChange(e, category.id)}
        />
        {category.display}
        {category.categories && <div>{render(category.categories)}</div>}
      </div>
    ));
  };
  return <div>{render(categories)}</div>;
};

export default CategoryList;

// const handleCategoryChange = (isChecked, id) => {
//     //set state to checked input
//     setSelectedCategories((previousSelection) =>
//       isChecked
//         ? //if an additional input is checked it needs to be included to current array
//           [...previousSelection, id]
//         : //if input is unselected create an array to remove its id
//           previousSelection.filter((e) => e !== id)
//     );
//   };
