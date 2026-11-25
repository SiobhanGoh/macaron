# Model files

The app looks here for the photo recognition model:

- `food.onnx`: the trained model
- `labels.json`: the dish names, in the model's output order

Both are produced by `training/train_food_model.ipynb`. Until they are added, the app works normally and the Photo option says recognition isn't installed yet.
