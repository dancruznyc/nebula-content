class Professional {
  constructor(name, field, education, experience) {
    this.name = name;
    this.field = field;
    this.education = education;
    this.experience = experience;
  }
}

class Chef extends Professional {
  constructor(name, field, education, experience, style, type) {
    super(name, field, education, experience);
    this.style = style;
    this.type = type;
  }
  chopIngredients(ingredients) {
    const choppedFood = `chopped ${ingredients}`;
    return choppedFood;
  }
  cookFood(choppedFood) {
    const cookedFood = `cooked ${choppedFood}`;
    return cookedFood;
  }
}

class VeganChef extends Chef {
  constructor(name, field, education, experience, style, type, specialty) {
    super(name, field, education, experience, style, type);
    this.specialty = specialty;
  }
}

const daniel = new VeganChef(
  "Daniel Delacruz",
  "Chef",
  "Duke University",
  6,
  "Jamaican",
  "Head Chef",
  "Tofu Drumsticks"
);
console.log(daniel);
console.log(daniel.cookFood(daniel.chopIngredients("cucumbers")));
