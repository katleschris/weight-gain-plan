import React from 'react';
import MealOption from './MealOption';

const MealPlan = () => {
  const meals = {
    preWorkout: [
      {
        title: "Option 1",
        items: ["Banana with 2 tablespoons of peanut butter", "A slice of whole-grain toast"]
      },
      {
        title: "Option 2",
        items: ["A small bowl of oatmeal with honey and a handful of berries", "A glass of orange juice"]
      },
      {
        title: "Option 3",
        items: ["A protein smoothie with a banana, almond milk, and a scoop of whey protein", "A handful of mixed nuts"]
      }
    ],
    postWorkout: [
      {
        title: "Option 1",
        items: ["3 scrambled eggs with spinach and a slice of whole-grain toast", "A glass of milk"]
      },
      {
        title: "Option 2",
        items: ["Greek yogurt with honey, granola, and a handful of mixed berries", "A hard-boiled egg on the side"]
      },
      {
        title: "Option 3",
        items: ["A turkey and avocado wrap on a whole-grain tortilla", "A glass of fresh fruit juice"]
      }
    ],
    lunch: [
      {
        title: "Option 1",
        items: ["Grilled chicken breast with quinoa and steamed broccoli", "A side of mixed greens with olive oil dressing"]
      },
      {
        title: "Option 2",
        items: ["Baked salmon with sweet potatoes and sautéed spinach", "A small side salad with tomatoes and cucumbers"]
      },
      {
        title: "Option 3",
        items: ["Beef stir-fry with mixed vegetables over brown rice", "A side of steamed edamame"]
      }
    ],
    afternoonSnack: [
      {
        title: "Option 1",
        items: ["Greek yogurt with honey and a handful of walnuts", "An apple or a banana"]
      },
      {
        title: "Option 2",
        items: ["A protein smoothie with mixed fruits, spinach, and a scoop of protein powder", "A handful of almonds or cashews"]
      },
      {
        title: "Option 3",
        items: ["Whole-grain crackers with hummus", "A small bowl of mixed berries"]
      }
    ],
    dinner: [
      {
        title: "Option 1",
        items: ["Grilled steak with roasted potatoes and green beans", "A side of mixed greens with balsamic vinaigrette"]
      },
      {
        title: "Option 2",
        items: ["Baked chicken thighs with brown rice and sautéed zucchini", "A side of roasted carrots"]
      },
      {
        title: "Option 3",
        items: ["Spaghetti with lean ground beef and marinara sauce", "A side of steamed broccoli and a small mixed salad"]
      }
    ],
    eveningSnack: [
      {
        title: "Option 1",
        items: ["Cottage cheese with sliced pineapple or peach", "A small handful of almonds"]
      },
      {
        title: "Option 2",
        items: ["A slice of whole-grain toast with almond butter", "A small banana"]
      },
      {
        title: "Option 3",
        items: ["A small bowl of oatmeal with a drizzle of honey and a sprinkle of cinnamon", "A few slices of apple on the side"]
      }
    ]
  };

  return (
    <div>
      <h2>Comprehensive Meal Plan</h2>

      <div className="meal-row">
        <h3>Pre-Workout Meal (5:30 AM)</h3>
        <div className="meal-options-row">
          {meals.preWorkout.map((option, index) => (
            <MealOption key={index} title={option.title} items={option.items} />
          ))}
        </div>
      </div>

      <div className="meal-row">
        <h3>Post-Workout Meal (7:00 AM)</h3>
        <div className="meal-options-row">
          {meals.postWorkout.map((option, index) => (
            <MealOption key={index} title={option.title} items={option.items} />
          ))}
        </div>
      </div>

      <div className="meal-row">
        <h3>Lunch (12:00 PM)</h3>
        <div className="meal-options-row">
          {meals.lunch.map((option, index) => (
            <MealOption key={index} title={option.title} items={option.items} />
          ))}
        </div>
      </div>

      <div className="meal-row">
        <h3>Afternoon Snack (4:00 PM)</h3>
        <div className="meal-options-row">
          {meals.afternoonSnack.map((option, index) => (
            <MealOption key={index} title={option.title} items={option.items} />
          ))}
        </div>
      </div>

      <div className="meal-row">
        <h3>Dinner (6:00 PM)</h3>
        <div className="meal-options-row">
          {meals.dinner.map((option, index) => (
            <MealOption key={index} title={option.title} items={option.items} />
          ))}
        </div>
      </div>

      <div className="meal-row">
        <h3>Evening Snack (9:00 PM)</h3>
        <div className="meal-options-row">
          {meals.eveningSnack.map((option, index) => (
            <MealOption key={index} title={option.title} items={option.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
