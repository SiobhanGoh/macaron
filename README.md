# Macaron

A free, offline calorie tracker built for Malaysian food.

**Open the app:** https://siobhangoh.github.io/macaron/

On a phone, open the link, then choose **Add to Home Screen** from the browser menu. After the first visit it works with no internet.

## What it does

- **Step-by-step setup** with drag rulers for age, height and weight, ending in a daily calorie target.
- **A built-in list of 259 local dishes and drinks** with calories, protein, carbs, fat, fibre, sugar, sodium and saturated fat.
- **7-day meal plans** that name the place, the dish and how to order it, plus simple home recipes and short workouts.
- **"What do you feel like eating today?"** Pick a mood and get three plans to choose from.
- **Local picks** around Bandar Sunway, Subang Jaya, Petaling Jaya, Damansara and Kuala Lumpur, with optional location to favour places near you.
- **Never suggest again.** One tap on any dish removes it from every plan and suggestion, and the list sits in your profile.
- **Gentle workouts** for sore knees or beginners (no jumping, deep squats, lunges or stairs), with a moving picture, form tips and common mistakes for each exercise.
- **Nine colour moods** on a cream base: pink, lilac, lavender, aquamarine, turquoise, lemon, peach, sky blue and mint.
- **Gentle check-ins.** Skip a meal with one tap; after two skipped meals the app suggests something small instead. Extra workouts are welcome once, then it asks you to rest.
- **Preference chips** at sign-up and under Edit profile: sweet tooth, snacker, no pork, no beef, no seafood, less spicy, lactose-free, vegetarian, vegan and more.
- **Workout goal and difficulty.** Pick a goal in plain words or let the app choose, then switch between easy, medium and hard on the workout card.
- **Body measurements** (waist, hips, chest, thigh, upper arm) with change since your first entry.
- **Backups.** Save a backup file to Files or iCloud Drive and restore from it on any phone.
- **A short tour** for first-time users, pointing out the plan, progress and profile tabs.
- **Rough price bands** on suggested dishes.
- **Learns your taste** from what you pick, log, pass on and swap.
- **Order help.** Choose where you are eating and see the best picks for the calories you have left.
- **Sweet swaps** for when you want dessert with less sugar.
- **A profile card** with your details and one Edit profile button, plus rankings of your top places, foods, cuisines and treats.
- **Plan my week**, a page-by-page set of questions that builds the weekly plan.
- **Check-in calendar** showing the days you opened the app and the days you logged food.
- **XP, levels and badges** for checking in, logging food and water, weighing in and finishing workouts.
- **Water, weight, streaks, weekly review**, and an estimate of your real daily burn from your own data.
- **Photo recognition on the phone**, once the model in `model/` has been trained.

## How it works

Everything runs in the browser. Nothing is sent to a server, and your data stays on your device.

- `index.html`: the whole app, including the food list and the planning rules
- `sw.js`, `manifest.webmanifest`: offline support and home-screen install
- `ort/`: ONNX Runtime Web, used to run the photo model on the device
- `model/`: the trained photo model goes here
- `training/train_food_model.ipynb`: trains the photo model on Kaggle or Colab

## Numbers and limits

- Calorie targets use the Mifflin-St Jeor equation, and never go below 1,200 kcal for women or 1,500 kcal for men.
- Sugar, sodium and saturated fat limits follow WHO guidance used by Malaysia's Ministry of Health. Fruit, vegetable and water goals follow the Malaysian Food Pyramid 2020.
- Food values are estimates for typical servings. Real plates vary, especially in oil and portion size.
- This is a personal tracking tool, not medical advice.

## Credits

- UI motion timings adapted from [Motion Prompt](https://showheyohtaki.github.io/motion-prompt/) by Shohei Ohtaki (MIT).
- [ONNX Runtime Web](https://onnxruntime.ai/) (MIT).
- Training data: [lowyisan/malaysian_food_images](https://huggingface.co/datasets/lowyisan/malaysian_food_images) and [Food-101](https://huggingface.co/datasets/ethz/food101).
