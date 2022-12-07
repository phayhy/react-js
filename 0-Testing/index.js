/*const arr1 = ["Abc", "B", "c", "d"];
const str = "aBc";

//console.log(str.toLowerCase());

for (let i = 0; i<arr1.length; i++){

    newArr1 = arr1.map((e)=>e).slice(i, i+1).toString();
    console.log(newArr1.toLowerCase());
    
    if (newArr1.toLowerCase().includes(str.toLowerCase())){
        console.log(i);
    }
}
*/
state = {
  searchFoodName: "Chicken",
  searchIngredient: "Udon",
  foodItems: [
    {
      _id: 101,
      name: "Chicken Udon Soup",
      price: 11.99,
      ingredients: ["chicken stock", "udon", "chicken breast"],
    },
    {
      _id: 203,
      name: "Salmon Teriyaki Don",
      price: 9.9,
      ingredients: ["salmon", "rice", "soya sauce"],
    },
    {
      _id: 401,
      name: "Raw Salmon Slices",
      price: 15.99,
      ingredients: ["salmon"],
    },
    {
      _id: 402,
      name: "Chicken Miso Ramen",
      price: 15.99,
      ingredients: ["chicken", "miso", "ramen"],
    },
  ],
};

let result = [];
for (let items of state.foodItems) {
  if (
    state.searchFoodName === "" ||
    items.name.toLowerCase().includes(state.searchFoodName.toLowerCase())
  ) {
    //console.log(items.ingredients);
    result.push(eachIngredient);
    }
  console.log(result);
}

for (let i = 0; i < items.ingredients.length; i++) {
    //extract each ingredient within one food item ingredients array and convert to string
    eachIngredient = items.ingredients
      .map((e) => e)  //copy ingredients array 4 times
      .splice(i, 1)   //extract each ingredient at different index from the 4 copied arrays
      .toString();    //convert to string
    //console.log(eachIngredient);
    if (
      state.searchIngredient === "" ||
      eachIngredient.toLowerCase().includes(state.searchIngredient.toLowerCase())
    ) {
        return true;
    }
}