// Classes-- Chef, Utencil, Meal, Ingredients
// Chef can chop and cook Meals using utencils(knife, pan)
//

class Chef {
  constructor(name, experience, style, type) {
    this.name = name;
    this.experience = experience;
    this.style = style;
    this.type = type;
  }
  chopIngredients(meal, utencil) {
    if (utencil.canCut === true) {
      for (let i = 0; i < meal.ingredients.length; i++) {
        if (meal.ingredients[i].needsChopping === true) {
          meal.ingredients[i].isChopped = true;
        }
      }
      const choppedFood = `${meal.name} is ready to be cooked`;
      return choppedFood;
    } else return "You need a utencil that can cut";
  }
  cookFood(choppedFood, utencil) {
    if (utencil.canHeat === true) {
      for (let i = 0; i < choppedFood.ingredients.length; i++) {
        choppedFood.ingredients[i].isCooked = true;
        const cookedFood = `cooked ${choppedFood.name}`;
        return cookedFood;
      }
    }
  }
  eatFood(cookedFood) {
    if (cookedFood.isCooked) {
      return "Yum";
    } else return "This food isn't cooked";
  }
}

class Utencil {
  constructor(canCut, canHeat) {
    this.canCut = canCut;
    this.canHeat = canHeat;
  }
}

class Meal {
  constructor(name, ingredients, style) {
    this.name = name;
    this.ingredients = ingredients;
    this.style = style;
  }
  displayIngredients() {
    for (let i = 0; i < this.ingredients.length; i++) {
      console.log(this.ingredients[i]);
    }
  }
  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredient) {
    const i = this.ingredients.indexof(ingredient);
    if (i > -1) {
      this.ingredients.splice(i, 1);
    }
  }
}

class Ingredient {
  constructor(name, type, needsChopping) {
    this.name = name;
    this.type = type;
    this.needsChopping = needsChopping;
    this.isChopped = false;
    this.isCooked = false;
  }
}

const daniel = new Chef("Daniel", 4, "Italian", "Head Chef");

// Untencils
const knife = new Utencil(true, false);
const fryingPan = new Utencil(false, true);

// Ingredients
const onions = new Ingredient("onions", "vegetable", true);
const salt = new Ingredient("salt", "seasoning", false);
const greenPeppers = new Ingredient("green peppers", "vegetable", true);
const steak = new Ingredient("steak", "meat", true);
const blackPepper = new Ingredient("black pepper", "seasoning", false);

//Meal
const pepperSteak = new Meal(
  "pepper steak",
  [steak, onions, greenPeppers, salt, blackPepper],
  "italian"
);

console.log(daniel);
console.log(knife);
console.log(fryingPan);
console.log(pepperSteak);
pepperSteak.displayIngredients();
console.log(daniel.chopIngredients(pepperSteak, fryingPan));
console.log(daniel.chopIngredients(pepperSteak, knife));
console.log(daniel.cookFood(pepperSteak, fryingPan));
// console.log(pepperSteak);
