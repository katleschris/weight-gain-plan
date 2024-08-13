import React from 'react';
import Activity from './Activity';
import Meal from './Meal';
import Workout from './Workout';

const DailySchedule = () => {
  return (
    <div>
      <h2>Daily Schedule</h2>

      <Activity 
        time="5:00 AM" 
        title="Wake Up" 
        description="Hydrate and perform light stretching and breathing exercises." 
      />

      <Meal 
        time="5:30 AM" 
        title="Pre-Workout Meal" 
        items={["Banana with peanut butter", "Protein shake"]} 
      />

      <Workout 
        time="6:00 AM - 7:00 AM" 
        title="Gym Workout" 
        exercises={[
          "Monday, Wednesday, Friday: Compound exercises (squats, deadlifts, bench press, rows)",
          "Tuesday, Thursday: Accessory work (bicep curls, tricep extensions, shoulder press) and core exercises",
          "Saturday: Full-body workout or active recovery",
          "Sunday: Rest day"
        ]}
      />

      <Meal 
        time="7:00 AM" 
        title="Post-Workout Meal" 
        items={["High-protein breakfast (eggs, whole-grain toast, avocado, milk)"]} 
      />

      <Activity 
        time="7:15 AM" 
        title="Get Ready for Work" 
        description="Quick shower, dress up, and get ready for the day." 
      />

      <Activity 
        time="7:30 AM - 8:00 AM" 
        title="Commute to Work" 
        description="" 
      />

      <Activity 
        time="8:00 AM - 12:00 PM" 
        title="Work" 
        description="Focus on critical tasks, take short breaks every hour to stretch and stay hydrated." 
      />

      <Meal 
        time="12:00 PM - 12:30 PM" 
        title="Lunch" 
        items={["Grilled chicken", "Quinoa", "Steamed vegetables", "Nuts or olive oil"]} 
      />

      <Activity 
        time="12:30 PM - 4:00 PM" 
        title="Continue Work" 
        description="Tackle remaining tasks, take a 10-15 minute walk or stretch in the afternoon." 
      />

      <Meal 
        time="4:00 PM - 4:30 PM" 
        title="Afternoon Snack" 
        items={["Greek yogurt with honey and nuts", "Smoothie with fruits, spinach, protein powder"]} 
      />

      <Activity 
        time="4:30 PM - 5:00 PM" 
        title="Commute Home" 
        description="" 
      />

      <Activity 
        time="5:00 PM - 6:00 PM" 
        title="Evening Activity" 
        description="Light walk, stretching, hobbies, or light chores." 
      />

      <Meal 
        time="6:00 PM - 7:00 PM" 
        title="Dinner" 
        items={["Salmon", "Sweet potatoes", "Mixed greens", "Rice"]} 
      />

      <Activity 
        time="7:00 PM - 8:00 PM" 
        title="Relaxation" 
        description="Unwind with light activities, light stretching or yoga." 
      />

      <Activity 
        time="8:00 PM - 9:00 PM" 
        title="Prepare for the Next Day" 
        description="Prepare meals, plan your outfit, review your schedule." 
      />

      <Meal 
        time="9:00 PM" 
        title="Evening Snack" 
        items={["Cottage cheese with fruit", "Handful of almonds"]} 
      />

      <Activity 
        time="9:30 PM" 
        title="Wind Down" 
        description="Turn off electronics, dim the lights, relax with journaling or calming music." 
      />

      <Activity 
        time="10:00 PM" 
        title="Sleep" 
        description="Aim for 7 hours of sleep for muscle recovery and growth." 
      />
    </div>
  );
};

export default DailySchedule;

