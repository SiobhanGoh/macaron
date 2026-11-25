# Macaron

A free, offline calorie tracker built for Malaysian food.

**Open the app:** https://siobhangoh.github.io/macaron/

On a phone, open the link, then choose **Add to Home Screen** from the browser menu. After the first visit it works with no internet.

## What it does

- **Step-by-step setup** with drag rulers for age, height and weight, ending in a daily calorie target.
- **A built-in list of 458 local dishes, drinks, dim sum, pastries, tong sui, trending treats, desserts and snacks**, from nasi lemak to Yakult, bubble tea, har gow, croissants, bingsu and frozen yogurt, filterable by kind, with calories, protein, carbs, fat, fibre, sugar, sodium and saturated fat.
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
- **Eating style per meal.** Choose at home, eating out or either, separately for breakfast, lunch and dinner.
- **Several exercise goals at once**, including a stronger-knees goal that adds small, low-load knee moves with picture guides.
- **A calmer Plan page.** Two cards, Meals and Exercise, open their own focused views.
- **A calmer Progress page.** Overview, Food and Body tabs, and a calendar that shows this week until you open the month.
- **A look back at yesterday.** On the first open of a new day the app reviews the day before. If you ate very little it asks how you feel and can switch today to a gentle day of light, comforting food and rest.
- **Notes tailored to each meal.** Light-hearted nudges after carb-heavy, sugary, salty, oily or low-protein meals, and end-of-day notes on fibre, fruit and veg, and protein.
- **Light or dark, chosen on the first screen.**
- **Scan button in the middle.** Tap to open the camera and name the dish; hold for search, labels and more.
- **Korean BBQ builder.** Count each piece off the grill, your banchan refills, rice and sauces.
- **Hot pot builder.** Pick one or two broths, tap each item you ate (fish tofu, lettuce, beef slices…) and your sauce bowl.
- **Protein drinks.** Whey shakes, Herbalife, Ensure, Anlene, Dutch Lady +Protein and Barebells, from their own labels.
- **My supplements.** Your own daily checklist, ticked off on Today. The app never suggests supplements.
- **Scan a nutrition label.** Snap the table on a packet and the numbers fill in by themselves, offline, for English and BM labels.
- **Exercise videos.** Each move links to a how-to video, and each workout offers free follow-along videos.
- **Six languages.** English, Bahasa Melayu, 简体中文, 繁體中文, 한국어 and 日本語. Chosen on the first screen (it starts with your phone's language) and changeable any time in Me. Food names stay in their usual local spelling.
- **Rough price bands** on suggested dishes.
- **A drawing for every dish.** All 1,446 items have their own illustration, built from a small set of parts.
- **After-meal and after-workout tips**, a cool-down guide, and optional daily reminders you can add to your phone's Calendar.
- **Build my own.** Yogurt bowls, oats, subs, toast, rice plates, salads and kopitiam drinks: choose every part and amount, and watch the dish assemble as the calories add up.
- **Equipment-aware workouts.** Tell it what you have at home or which gym machines are available, with a drawing of each, and the plan only uses those.
- **Light and dark mode**, or match your phone.
- **Log several foods at once** from the food list, and skip a meal with one tap.
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
- `ocr/`: the offline label reader (Tesseract.js, Apache 2.0), loaded only when you scan a label
- `i18n/`: translations for each language, loaded only when that language is picked
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
