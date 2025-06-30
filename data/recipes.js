export const RECIPES = [
  {
    id: '1',
    title: 'Spaghetti Bolognese',
    image: require('../assets/spaghetti.jpg'),
    category: 'Main Course',
    ingredients: [
      '400g spaghetti',
    '1 tbsp olive oil',
    '1 onion, finely chopped',
    '2 garlic cloves, minced',
    '500g ground beef',
    '2 tbsp tomato paste',
    '400g canned crushed tomatoes',
    '1 tsp dried oregano',
    'Salt and pepper to taste',
    'Fresh basil and parmesan for garnish'
    ],
    instructions: `1. Boil spaghetti in salted water according to package directions.
2. Heat olive oil in a pan over medium heat. Sauté onion and garlic until soft.
3. Add ground beef and cook until browned.
4. Stir in tomato paste and cook for 2 minutes.
5. Add crushed tomatoes and oregano. Simmer for 15–20 minutes.
6. Season with salt and pepper. Serve over spaghetti with basil and parmesan.`,
    prepTime: '35 mins',
  },
  {
    id: '2',
    title: 'Pancakes',
    image: require('../assets/pancakes.jpg'),
    category: 'Breakfast',
    ingredients: [
      '1½ cups all-purpose flour',
    '3½ tsp baking powder',
    '1 tbsp white sugar',
    '¼ tsp salt',
    '1¼ cups milk',
    '1 egg',
    '3 tbsp melted butter',
    'Butter and syrup for serving'
  ],
    instructions: `1. In a large bowl, sift together the flour, baking powder, sugar, and salt.
2. Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.
3. Heat a lightly oiled frying pan over medium-high heat.
4. Pour or scoop the batter onto the pan, using about 1/4 cup for each pancake.
5. Brown on both sides and serve hot with butter and syrup.` ,
    prepTime: '20 mins',
  },

  {
  id: '3',
  title: 'Chocolate Lava Cake',
  category: 'Desserts',
  image: require('../assets/lava-cake.jpg'),
  ingredients: [
    '1/2 cup unsalted butter',
    '170g dark chocolate',
    '1 cup powdered sugar',
    '2 whole eggs + 2 egg yolks',
    '6 tbsp all-purpose flour',
    'Butter and cocoa powder (for ramekins)',
    'Vanilla ice cream for serving'
  ],
  instructions: `1. Preheat oven to 220°C (425°F). Grease ramekins with butter and dust with cocoa powder.
2. Melt butter and chocolate together until smooth.
3. Whisk in powdered sugar, eggs, and yolks.
4. Stir in flour until just combined.
5. Divide into ramekins and bake for 12 minutes.
6. Invert onto plates and serve immediately with vanilla ice cream.`,
  prepTime: '25 mins'
},

{
  id: '4',
  title: 'Strawberry Banana Smoothie',
  category: 'Drinks',
  image: require('../assets/smoothie.jpg'),
  ingredients: [
    '1 banana',
    '1 cup frozen strawberries',
    '1/2 cup plain yogurt',
    '1/2 cup milk (or almond milk)',
    '1 tbsp honey (optional)',
    'Ice cubes (optional)'
  ],
  instructions: `1. Add banana, frozen strawberries, yogurt, and milk to a blender.
2. Blend until smooth. Add honey or ice if desired.
3. Pour into a glass and serve immediately.`,
  prepTime: '5 mins'
},

{
  id: '5',
  title: 'Caprese Salad',
  category: 'Appetizers',
  image: require('../assets/caprese.jpg'),
  ingredients: [
    '2 large ripe tomatoes, sliced',
    '200g fresh mozzarella, sliced',
    'Fresh basil leaves',
    '2 tbsp extra virgin olive oil',
    '1 tbsp balsamic glaze',
    'Salt and pepper to taste'
  ],
  instructions: `1. Alternate layers of sliced tomato and mozzarella on a plate.
2. Tuck fresh basil leaves between layers.
3. Drizzle with olive oil and balsamic glaze.
4. Season with salt and pepper. Serve immediately.`,
  prepTime: '10 mins'
},

{
  id: '6',
  title: 'Classic Beef Burger',
  category: 'Main Course',
  image: require('../assets/beef-burger.jpg'),
  ingredients: [
    '500g ground beef',
    'Salt and black pepper to taste',
    '4 burger buns',
    'Lettuce leaves',
    'Tomato slices',
    'Cheddar cheese slices',
    'Onion rings',
    'Ketchup, mustard, mayo'
  ],
  instructions: `1. Shape beef into 4 patties, season with salt and pepper.
2. Grill or pan-fry for 4–5 mins per side.
3. Toast buns lightly.
4. Assemble: bottom bun, patty, cheese, lettuce, tomato, onion, and sauces.
5. Serve immediately with fries or salad.`,
  prepTime: '25 mins'
}
,
{
  id: '7',
  title: 'Chocolate Chip Cookies',
  category: 'Desserts',
  image: require('../assets/choco-cookies.jpg'),
  ingredients: [
    '1 cup butter, softened',
    '1 cup white sugar',
    '1 cup brown sugar',
    '2 eggs',
    '2 tsp vanilla extract',
    '3 cups flour',
    '1 tsp baking soda',
    '1/2 tsp salt',
    '2 cups chocolate chips'
  ],
  instructions: `1. Preheat oven to 180°C (350°F). Line a baking tray with parchment paper.
2. Cream together butter and sugars until smooth.
3. Beat in eggs and vanilla. Gradually mix in flour, baking soda, and salt.
4. Stir in chocolate chips.
5. Drop spoonfuls onto tray and bake for 10–12 minutes until golden.`,
  prepTime: '30 mins'
},

{
  id: '8',
  title: 'Lemon Mint Cooler',
  category: 'Drinks',
  image: require('../assets/lemon-mint.jpg'),
  ingredients: [
    '2 lemons, juiced',
    '1 tbsp sugar',
    '1 cup cold water',
    'Fresh mint leaves',
    'Ice cubes',
    'Lemon slices for garnish'
  ],
  instructions: `1. In a glass, mix lemon juice and sugar until dissolved.
2. Add cold water and stir well.
3. Add mint leaves and ice cubes.
4. Garnish with lemon slices and serve chilled.`,
  prepTime: '5 mins'
},

{
  id: '9',
  title: 'Avocado Toast with Egg',
  category: 'Breakfast',
  image: require('../assets/avocado-toast.jpg'),
  ingredients: [
    '2 slices whole grain bread',
    '1 ripe avocado',
    '1 tsp lemon juice',
    '1/4 tsp salt',
    '1/4 tsp black pepper',
    '2 eggs (poached or fried)',
    'Chili flakes (optional)'
  ],
  instructions: `1. Toast the bread slices until golden.
2. Mash the avocado with lemon juice, salt, and pepper.
3. Spread mashed avocado onto each slice of toast.
4. Top with a freshly poached or fried egg.
5. Sprinkle chili flakes if desired. Serve immediately.`,
  prepTime: '15 mins'
},
{
  id: '10',
  title: 'Mozzarella Sticks',
  category: 'Appetizers',
  image: require('../assets/mozzarella-sticks.jpg'),
  ingredients: [
    '12 mozzarella sticks',
    '1/2 cup flour',
    '2 eggs, beaten',
    '1 cup breadcrumbs',
    '1/2 tsp garlic powder',
    '1/2 tsp Italian seasoning',
    'Oil for frying',
    'Marinara sauce for dipping'
  ],
  instructions: `1. Coat mozzarella sticks in flour, dip in egg, then breadcrumbs.
2. Repeat for a thicker crust.
3. Freeze for 30 minutes.
4. Heat oil and fry until golden brown (2–3 mins).
5. Drain and serve with marinara sauce.`,
  prepTime: '40 mins (includes freezing)'
}
,

{
  id: '11',
  title: 'Chicken Alfredo Pasta',
  category: 'Main Course',
  image: require('../assets/chicken-alfredo.jpg'),
  ingredients: [
    '200g fettuccine pasta',
    '2 chicken breasts, sliced',
    '2 tbsp butter',
    '2 cloves garlic, minced',
    '1 cup heavy cream',
    '1/2 cup grated Parmesan',
    'Salt and pepper to taste',
    'Chopped parsley (for garnish)'
  ],
  instructions: `1. Cook pasta until al dente, then drain.
2. In a pan, cook chicken with salt and pepper until browned.
3. Remove chicken, then melt butter and sauté garlic.
4. Add cream and bring to a simmer.
5. Stir in Parmesan until melted.
6. Return chicken and pasta to pan, toss to coat.
7. Serve garnished with parsley.`,
  prepTime: '30 mins'
},

{
  id: '12',
  title: 'Blueberry Oatmeal',
  category: 'Breakfast',
  image: require('../assets/blueberry-oatmeal.jpg'),
  ingredients: [
    '1/2 cup rolled oats',
    '1 cup milk or water',
    '1/2 cup fresh or frozen blueberries',
    '1 tbsp maple syrup or honey',
    '1/4 tsp cinnamon',
    'Pinch of salt',
    'Nuts or chia seeds (optional)'
  ],
  instructions: `1. In a small saucepan, combine oats, milk, salt, and cinnamon.
2. Cook over medium heat, stirring often, until thick (5–7 mins).
3. Stir in blueberries and cook for 2 more minutes.
4. Pour into a bowl and drizzle with honey or maple syrup.
5. Top with nuts or chia seeds if desired.`,
  prepTime: '10 mins'
}
,

{
  id: '13',
  title: 'Strawberry Cheesecake',
  category: 'Desserts',
  image: require('../assets/strawberry-cheesecake.jpg'),
  ingredients: [
    '1 cup graham cracker crumbs',
    '2 tbsp melted butter',
    '200g cream cheese',
    '1/2 cup powdered sugar',
    '1/2 tsp vanilla extract',
    '1/2 cup whipped cream',
    '1 cup strawberries, chopped'
  ],
  instructions: `1. Mix graham cracker crumbs with melted butter and press into the bottom of small cups.
2. Beat cream cheese, powdered sugar, and vanilla until smooth.
3. Fold in whipped cream until fluffy.
4. Spoon cream mixture over crust and top with strawberries.
5. Chill for 1 hour before serving.`,
  prepTime: '20 mins + 1hr chill'
},

{
  id: '14',
  title: 'Iced Mocha Latte',
  category: 'Drinks',
  image: require('../assets/iced-mocha.jpg'),
  ingredients: [
    '1 shot espresso or 1/4 cup strong coffee',
    '1 tbsp chocolate syrup',
    '1/2 cup milk',
    'Ice cubes',
    'Whipped cream (optional)'
  ],
  instructions: `1. In a shaker or glass, combine espresso and chocolate syrup.
2. Add milk and stir or shake well.
3. Fill a glass with ice and pour mixture over it.
4. Top with whipped cream if desired.`,
  prepTime: '5 mins'
},

{
  id: '15',
  title: 'Bruschetta',
  category: 'Appetizers',
  image: require('../assets/bruschetta.jpg'),
  ingredients: [
    '1 baguette, sliced',
    '2 tbsp olive oil',
    '2 garlic cloves, halved',
    '2 large tomatoes, diced',
    'Fresh basil, chopped',
    'Salt and pepper to taste',
    'Balsamic glaze (optional)'
  ],
  instructions: `1. Toast baguette slices until golden.
2. Rub with cut garlic and drizzle with olive oil.
3. In a bowl, combine diced tomatoes, basil, salt, and pepper.
4. Spoon tomato mixture onto toasted bread.
5. Drizzle with balsamic glaze if desired. Serve immediately.`,
  prepTime: '15 mins'
}
,

];
