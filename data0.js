
  var typeMap = [
    {
      "type": "all",
      "Map": ["Vegetable", "Fruit","Spices","Nuts","Dairy","Bread","Flour","Juices","Meat"]
    },
    {
      "type": "Groceries",
      "Map": ["Vegetable", "Fruit","Spices","Nuts","Dairy","Bread","Flour","Juices","Meat"]
    },
    {
      "type": "Fruit",
      "Map": ["Fruit"]
    },
    {
      "type": "Spices",
      "Map": ["Spices"]
    },
    {
      "type": "Nuts",
      "Map": ["Nuts"]
    },
    {
      "type": "Dairy",
      "Map": ["Dairy"]
    },
    {
      "type": "Bread",
      "Map": ["Bread"]
    },
    {
      "type": "Flour",
      "Map": ["Flour"]
    },
    {
      "type": "Juices",
      "Map": ["Juices"]
    },
    {
      "type": "Meat",
      "Map": ["Meat"]
    },
    {
      "type": "Vegetable",
      "Map": ["Vegetable"]
    },
  ];
  var itemTypeMap =  [
    {
      "item": "Artichoke",
      "type": "Vegetable"
    },
    {
      "item": "Arugula",
      "type": "Vegetable"
    },
    {
      "item": "Asparagus",
      "type": "Vegetable"
    },
    {
      "item": "Aubergine",
      "type": "Vegetable"
    },
    {
      "item": "Eggplant",
      "type": "Vegetable"
    },
    {
      "item": "Amaranth",
      "type": "Vegetable"
    },
    {
      "item": "Legumes",
      "type": "Vegetable"
    },
    {
      "item": "Alfalfa sprouts",
      "type": "Vegetable"
    },
    {
      "item": "Azuki beans",
      "type": "Vegetable"
    },
    {
      "item": "Bean sprouts",
      "type": "Vegetable"
    },
    {
      "item": "Black beans",
      "type": "Vegetable"
    },
    {
      "item": "Black-eyed peas",
      "type": "Vegetable"
    },
    {
      "item": "Borlotti bean",
      "type": "Vegetable"
    },
    {
      "item": "Broad beans",
      "type": "Vegetable"
    },
    {
      "item": "Chickpeas",
      "type": "Vegetable"
    },
    {
      "item": "Green beans",
      "type": "Vegetable"
    },
    {
      "item": "Kidney beans",
      "type": "Vegetable"
    },
    {
      "item": "Lentils",
      "type": "Vegetable"
    },
    {
      "item": "Lima beans",
      "type": "Vegetable"
    },
    {
      "item": "Mung beans",
      "type": "Vegetable"
    },
    {
      "item": "Navy beans",
      "type": "Vegetable"
    },
    {
      "item": "Pinto beans",
      "type": "Vegetable"
    },
    {
      "item": "Runner beans",
      "type": "Vegetable"
    },
    {
      "item": "Split peas",
      "type": "Vegetable"
    },
    {
      "item": "Soy beans",
      "type": "Vegetable"
    },
    {
      "item": "Peas",
      "type": "Vegetable"
    },
    {
      "item": "Mangetout",
      "type": "Vegetable"
    },
    {
      "item": "Beet greens",
      "type": "Vegetable"
    },
    {
      "item": "Bok choy",
      "type": "Vegetable"
    },
    {
      "item": "Broccoflower",
      "type": "Vegetable"
    },
    {
      "item": "Broccoli",
      "type": "Vegetable"
    },
    {
      "item": "Brussels sprouts",
      "type": "Vegetable"
    },
    {
      "item": "Cabbage",
      "type": "Vegetable"
    },
    {
      "item": "Calabrese",
      "type": "Vegetable"
    },
    {
      "item": "Carrots",
      "type": "Vegetable"
    },
    {
      "item": "Cauliflower",
      "type": "Vegetable"
    },
    {
      "item": "Celery",
      "type": "Vegetable"
    },
    {
      "item": "Chard",
      "type": "Vegetable"
    },
    {
      "item": "Collard greens",
      "type": "Vegetable"
    },
    {
      "item": "Corn salad",
      "type": "Vegetable"
    },
    {
      "item": "Endive",
      "type": "Vegetable"
    },
    {
      "item": "Fiddleheads",
      "type": "Vegetable"
    },
    {
      "item": "Frisee",
      "type": "Vegetable"
    },
    {
      "item": "Fennel",
      "type": "Vegetable"
    },
    {
      "item": "Herbs?and spices",
      "type": "Vegetable"
    },
    {
      "item": "Anise",
      "type": "Vegetable"
    },
    {
      "item": "Basil",
      "type": "Vegetable"
    },
    {
      "item": "Caraway",
      "type": "Vegetable"
    },
    {
      "item": "Cilantro?seeds",
      "type": "Vegetable"
    },
    {
      "item": "Chamomile",
      "type": "Vegetable"
    },
    {
      "item": "Dill",
      "type": "Vegetable"
    },
    {
      "item": "Fennel",
      "type": "Vegetable"
    },
    {
      "item": "Lavender",
      "type": "Vegetable"
    },
    {
      "item": "Lemon Grass",
      "type": "Vegetable"
    },
    {
      "item": "Marjoram",
      "type": "Vegetable"
    },
    {
      "item": "Oregano",
      "type": "Vegetable"
    },
    {
      "item": "Parsley",
      "type": "Vegetable"
    },
    {
      "item": "Rosemary",
      "type": "Vegetable"
    },
    {
      "item": "Sage",
      "type": "Vegetable"
    },
    {
      "item": "Thyme",
      "type": "Vegetable"
    },
    {
      "item": "Kale",
      "type": "Vegetable"
    },
    {
      "item": "Kohlrabi",
      "type": "Vegetable"
    },
    {
      "item": "Lettuce?Lactuca sativa",
      "type": "Vegetable"
    },
    {
      "item": "Maize",
      "type": "Vegetable"
    },
    {
      "item": "Mushrooms",
      "type": "Vegetable"
    },
    {
      "item": "Mustard greens",
      "type": "Vegetable"
    },
    {
      "item": "Nettles",
      "type": "Vegetable"
    },
    {
      "item": "New Zealand spinach",
      "type": "Vegetable"
    },
    {
      "item": "Okra",
      "type": "Vegetable"
    },
    {
      "item": "Onion family",
      "type": "Vegetable"
    },
    {
      "item": "Chives",
      "type": "Vegetable"
    },
    {
      "item": "Garlic",
      "type": "Vegetable"
    },
    {
      "item": "Leek Allium porrum",
      "type": "Vegetable"
    },
    {
      "item": "Onion",
      "type": "Vegetable"
    },
    {
      "item": "Shallot",
      "type": "Vegetable"
    },
    {
      "item": "Spring onion",
      "type": "Vegetable"
    },
    {
      "item": "Parsley",
      "type": "Vegetable"
    },
    {
      "item": "Peppers",
      "type": "Vegetable"
    },
    {
      "item": "Green pepper",
      "type": "Vegetable"
    },
    {
      "item": "Chili pepper",
      "type": "Vegetable"
    },
    {
      "item": "Jalapeno",
      "type": "Vegetable"
    },
    {
      "item": "Habanero",
      "type": "Vegetable"
    },
    {
      "item": "Paprika",
      "type": "Vegetable"
    },
    {
      "item": "Tabasco pepper",
      "type": "Vegetable"
    },
    {
      "item": "Cayenne pepper",
      "type": "Vegetable"
    },
    {
      "item": "Radicchio",
      "type": "Vegetable"
    },
    {
      "item": "Rhubarb",
      "type": "Vegetable"
    },
    {
      "item": "Root vegetables",
      "type": "Vegetable"
    },
    {
      "item": "Beetroot",
      "type": "Vegetable"
    },
    {
      "item": "mangel-wurzel",
      "type": "Vegetable"
    },
    {
      "item": "Carrot",
      "type": "Vegetable"
    },
    {
      "item": "Celeriac",
      "type": "Vegetable"
    },
    {
      "item": "Daikon",
      "type": "Vegetable"
    },
    {
      "item": "Ginger",
      "type": "Vegetable"
    },
    {
      "item": "Parsnip",
      "type": "Vegetable"
    },
    {
      "item": "Rutabaga",
      "type": "Vegetable"
    },
    {
      "item": "Turnip",
      "type": "Vegetable"
    },
    {
      "item": "Radish",
      "type": "Vegetable"
    },
    {
      "item": "Swede",
      "type": "Vegetable"
    },
    {
      "item": "Turnip",
      "type": "Vegetable"
    },
    {
      "item": "Wasabi",
      "type": "Vegetable"
    },
    {
      "item": "Horseradish",
      "type": "Vegetable"
    },
    {
      "item": "White radish",
      "type": "Vegetable"
    },
    {
      "item": "Salsify",
      "type": "Vegetable"
    },
    {
      "item": "Skirret",
      "type": "Vegetable"
    },
    {
      "item": "Spinach",
      "type": "Vegetable"
    },
    {
      "item": "Topinambur",
      "type": "Vegetable"
    },
    {
      "item": "Squashes",
      "type": "Vegetable"
    },
    {
      "item": "Acorn squash",
      "type": "Vegetable"
    },
    {
      "item": "Butternut squash",
      "type": "Vegetable"
    },
    {
      "item": "Banana squash",
      "type": "Vegetable"
    },
    {
      "item": "Courgette",
      "type": "Vegetable"
    },
    {
      "item": "Cucumber",
      "type": "Vegetable"
    },
    {
      "item": "Delicata",
      "type": "Vegetable"
    },
    {
      "item": "Gem squash",
      "type": "Vegetable"
    },
    {
      "item": "Hubbard squash",
      "type": "Vegetable"
    },
    {
      "item": "Marrow",
      "type": "Vegetable"
    },
    {
      "item": "Patty pans",
      "type": "Vegetable"
    },
    {
      "item": "Pumpkin",
      "type": "Vegetable"
    },
    {
      "item": "Spaghetti squash",
      "type": "Vegetable"
    },
    {
      "item": "Tat soi",
      "type": "Vegetable"
    },
    {
      "item": "Tomato",
      "type": "Vegetable"
    },
    {
      "item": "Tubers",
      "type": "Vegetable"
    },
    {
      "item": "Jicama",
      "type": "Vegetable"
    },
    {
      "item": "Jerusalem artichoke",
      "type": "Vegetable"
    },
    {
      "item": "Potato",
      "type": "Vegetable"
    },
    {
      "item": "Sunchokes",
      "type": "Vegetable"
    },
    {
      "item": "Sweet potato",
      "type": "Vegetable"
    },
    {
      "item": "Taro",
      "type": "Vegetable"
    },
    {
      "item": "Yam",
      "type": "Vegetable"
    },
    {
      "item": "Turnip greens",
      "type": "Vegetable"
    },
    {
      "item": "Water chestnut",
      "type": "Vegetable"
    },
    {
      "item": "Watercress",
      "type": "Vegetable"
    },
    {
      "item": "Zucchini",
      "type": "Vegetable"
    },
    {
      "item": "Apple",
      "type": "Fruit"
    },
    {
      "item": "Apricot",
      "type": "Fruit"
    },
    {
      "item": "Avocado",
      "type": "Fruit"
    },
    {
      "item": "Banana",
      "type": "Fruit"
    },
    {
      "item": "Bilberry",
      "type": "Fruit"
    },
    {
      "item": "Blackberry",
      "type": "Fruit"
    },
    {
      "item": "Blackcurrant",
      "type": "Fruit"
    },
    {
      "item": "Blueberry",
      "type": "Fruit"
    },
    {
      "item": "Boysenberry",
      "type": "Fruit"
    },
    {
      "item": "Currant",
      "type": "Fruit"
    },
    {
      "item": "Cherry",
      "type": "Fruit"
    },
    {
      "item": "Cherimoya",
      "type": "Fruit"
    },
    {
      "item": "Cloudberry",
      "type": "Fruit"
    },
    {
      "item": "Coconut",
      "type": "Fruit"
    },
    {
      "item": "Cranberry",
      "type": "Fruit"
    },
    {
      "item": "Cucumber",
      "type": "Fruit"
    },
    {
      "item": "Custard apple",
      "type": "Fruit"
    },
    {
      "item": "Damson",
      "type": "Fruit"
    },
    {
      "item": "Date",
      "type": "Fruit"
    },
    {
      "item": "Dragonfruit",
      "type": "Fruit"
    },
    {
      "item": "Durian",
      "type": "Fruit"
    },
    {
      "item": "Elderberry",
      "type": "Fruit"
    },
    {
      "item": "Feijoa",
      "type": "Fruit"
    },
    {
      "item": "Fig",
      "type": "Fruit"
    },
    {
      "item": "Goji berry",
      "type": "Fruit"
    },
    {
      "item": "Gooseberry",
      "type": "Fruit"
    },
    {
      "item": "Grape",
      "type": "Fruit"
    },
    {
      "item": "Raisin",
      "type": "Fruit"
    },
    {
      "item": "Grapefruit",
      "type": "Fruit"
    },
    {
      "item": "Guava",
      "type": "Fruit"
    },
    {
      "item": "Honeyberry",
      "type": "Fruit"
    },
    {
      "item": "Huckleberry",
      "type": "Fruit"
    },
    {
      "item": "Jabuticaba",
      "type": "Fruit"
    },
    {
      "item": "Jackfruit",
      "type": "Fruit"
    },
    {
      "item": "Jambul",
      "type": "Fruit"
    },
    {
      "item": "Jujube",
      "type": "Fruit"
    },
    {
      "item": "Juniper berry",
      "type": "Fruit"
    },
    {
      "item": "Kiwifruit",
      "type": "Fruit"
    },
    {
      "item": "Kumquat",
      "type": "Fruit"
    },
    {
      "item": "Lemon",
      "type": "Fruit"
    },
    {
      "item": "Lime",
      "type": "Fruit"
    },
    {
      "item": "Loquat",
      "type": "Fruit"
    },
    {
      "item": "Longan",
      "type": "Fruit"
    },
    {
      "item": "Lychee",
      "type": "Fruit"
    },
    {
      "item": "Mango",
      "type": "Fruit"
    },
    {
      "item": "Marionberry",
      "type": "Fruit"
    },
    {
      "item": "Melon",
      "type": "Fruit"
    },
    {
      "item": "Cantaloupe",
      "type": "Fruit"
    },
    {
      "item": "Honeydew",
      "type": "Fruit"
    },
    {
      "item": "Watermelon",
      "type": "Fruit"
    },
    {
      "item": "Miracle fruit",
      "type": "Fruit"
    },
    {
      "item": "Mulberry",
      "type": "Fruit"
    },
    {
      "item": "Nectarine",
      "type": "Fruit"
    },
    {
      "item": "Nance",
      "type": "Fruit"
    },
    {
      "item": "Olive",
      "type": "Fruit"
    },
    {
      "item": "Orange",
      "type": "Fruit"
    },
    {
      "item": "Blood orange",
      "type": "Fruit"
    },
    {
      "item": "Clementine",
      "type": "Fruit"
    },
    {
      "item": "Mandarine",
      "type": "Fruit"
    },
    {
      "item": "Tangerine",
      "type": "Fruit"
    },
    {
      "item": "Papaya",
      "type": "Fruit"
    },
    {
      "item": "Passionfruit",
      "type": "Fruit"
    },
    {
      "item": "Peach",
      "type": "Fruit"
    },
    {
      "item": "Pear",
      "type": "Fruit"
    },
    {
      "item": "Persimmon",
      "type": "Fruit"
    },
    {
      "item": "Physalis",
      "type": "Fruit"
    },
    {
      "item": "Plantain",
      "type": "Fruit"
    },
    {
      "item": "Plum",
      "type": "Fruit"
    },
    {
      "item": "Prune",
      "type": "Fruit"
    },
    {
      "item": "Pineapple",
      "type": "Fruit"
    },
    {
      "item": "Plumcot",
      "type": "Fruit"
    },
    {
      "item": "Pomegranate",
      "type": "Fruit"
    },
    {
      "item": "Pomelo",
      "type": "Fruit"
    },
    {
      "item": "Purple mangosteen",
      "type": "Fruit"
    },
    {
      "item": "Quince",
      "type": "Fruit"
    },
    {
      "item": "Raspberry",
      "type": "Fruit"
    },
    {
      "item": "Salmonberry",
      "type": "Fruit"
    },
    {
      "item": "Rambutan",
      "type": "Fruit"
    },
    {
      "item": "Redcurrant",
      "type": "Fruit"
    },
    {
      "item": "Salal berry",
      "type": "Fruit"
    },
    {
      "item": "Salak",
      "type": "Fruit"
    },
    {
      "item": "Satsuma",
      "type": "Fruit"
    },
    {
      "item": "Soursop",
      "type": "Fruit"
    },
    {
      "item": "Star fruit",
      "type": "Fruit"
    },
    {
      "item": "Solanum quitoense",
      "type": "Fruit"
    },
    {
      "item": "Strawberry",
      "type": "Fruit"
    },
    {
      "item": "Tamarillo",
      "type": "Fruit"
    },
    {
      "item": "Tamarind",
      "type": "Fruit"
    },
    {
      "item": "Ugli fruit",
      "type": "Fruit"
    },
    {
      "item": "Yuzu",
      "type": "Fruit"
    },
    {
      "item": "Bear",
      "type": "Meat"
    },
    {
      "item": "Beef",
      "type": "Meat"
    },
    {
      "item": "Beef heart",
      "type": "Meat"
    },
    {
      "item": "Beef liver",
      "type": "Meat"
    },
    {
      "item": "Beef tongue",
      "type": "Meat"
    },
    {
      "item": "Buffalo",
      "type": "Meat"
    },
    {
      "item": "Calf liver",
      "type": "Meat"
    },
    {
      "item": "Caribou",
      "type": "Meat"
    },
    {
      "item": "Goat",
      "type": "Meat"
    },
    {
      "item": "Ham",
      "type": "Meat"
    },
    {
      "item": "Horse",
      "type": "Meat"
    },
    {
      "item": "Kangaroo",
      "type": "Meat"
    },
    {
      "item": "Lamb",
      "type": "Meat"
    },
    {
      "item": "Bison",
      "type": "Meat"
    },
    {
      "item": "Moose",
      "type": "Meat"
    },
    {
      "item": "Mutton",
      "type": "Meat"
    },
    {
      "item": "Opossum",
      "type": "Meat"
    },
    {
      "item": "Pork, Bacon",
      "type": "Meat"
    },
    {
      "item": "Rabbit",
      "type": "Meat"
    },
    {
      "item": "Snake",
      "type": "Meat"
    },
    {
      "item": "Squirrel",
      "type": "Meat"
    },
    {
      "item": "Tripe",
      "type": "Meat"
    },
    {
      "item": "Turtle",
      "type": "Meat"
    },
    {
      "item": "Veal",
      "type": "Meat"
    },
    {
      "item": "Venison",
      "type": "Meat"
    },
    {
      "item": "Chicken",
      "type": "Meat"
    },
    {
      "item": "Chicken Liver",
      "type": "Meat"
    },
    {
      "item": "Duck",
      "type": "Meat"
    },
    {
      "item": "Duck Liver",
      "type": "Meat"
    },
    {
      "item": "Emu",
      "type": "Meat"
    },
    {
      "item": "Gizzards",
      "type": "Meat"
    },
    {
      "item": "Goose",
      "type": "Meat"
    },
    {
      "item": "Goose Liver",
      "type": "Meat"
    },
    {
      "item": "Grouse",
      "type": "Meat"
    },
    {
      "item": "Guinea Hen",
      "type": "Meat"
    },
    {
      "item": "Liver",
      "type": "Meat"
    },
    {
      "item": "Organs",
      "type": "Meat"
    },
    {
      "item": "Ostrich",
      "type": "Meat"
    },
    {
      "item": "Partridge",
      "type": "Meat"
    },
    {
      "item": "Pheasant",
      "type": "Meat"
    },
    {
      "item": "Quail",
      "type": "Meat"
    },
    {
      "item": "Squab",
      "type": "Meat"
    },
    {
      "item": "Turkey",
      "type": "Meat"
    },
    {
      "item": "Abondance Fermlere Herve Mons",
      "type": "Dairy"
    },
    {
      "item": "American Cheese",
      "type": "Dairy"
    },
    {
      "item": "Appenzeller",
      "type": "Dairy"
    },
    {
      "item": "Bergenost",
      "type": "Dairy"
    },
    {
      "item": "Blue cheese",
      "type": "Dairy"
    },
    {
      "item": "Blue Cheese",
      "type": "Dairy"
    },
    {
      "item": "Brick Cheese",
      "type": "Dairy"
    },
    {
      "item": "Brie Cheese",
      "type": "Dairy"
    },
    {
      "item": "Butter",
      "type": "Dairy"
    },
    {
      "item": "Cabot",
      "type": "Dairy"
    },
    {
      "item": "Cahill’s Porter",
      "type": "Dairy"
    },
    {
      "item": "Camembert cheese",
      "type": "Dairy"
    },
    {
      "item": "Campode Montalban",
      "type": "Dairy"
    },
    {
      "item": "Casein",
      "type": "Dairy"
    },
    {
      "item": "Cheddar Cheese",
      "type": "Dairy"
    },
    {
      "item": "Cheshire Cheese",
      "type": "Dairy"
    },
    {
      "item": "Colby Cheese",
      "type": "Dairy"
    },
    {
      "item": "Colby-Jack Cheese",
      "type": "Dairy"
    },
    {
      "item": "Cordobes",
      "type": "Dairy"
    },
    {
      "item": "Cottage Cheese",
      "type": "Dairy"
    },
    {
      "item": "Cottage cheese",
      "type": "Dairy"
    },
    {
      "item": "Cougar Gold Cheddar",
      "type": "Dairy"
    },
    {
      "item": "Cream Cheese",
      "type": "Dairy"
    },
    {
      "item": "Cup Cheese",
      "type": "Dairy"
    },
    {
      "item": "Drunken Goat Cheese",
      "type": "Dairy"
    },
    {
      "item": "Dublinger",
      "type": "Dairy"
    },
    {
      "item": "Edam Cheese",
      "type": "Dairy"
    },
    {
      "item": "Swiss cheese",
      "type": "Dairy"
    },
    {
      "item": "English Derby with Sage",
      "type": "Dairy"
    },
    {
      "item": "Farmer Cheese",
      "type": "Dairy"
    },
    {
      "item": "Feta Cheese",
      "type": "Dairy"
    },
    {
      "item": "Fiscalim Sand Joaquin",
      "type": "Dairy"
    },
    {
      "item": "Ghee",
      "type": "Dairy"
    },
    {
      "item": "Goat Cheese",
      "type": "Dairy"
    },
    {
      "item": "Gorgonzola cheese",
      "type": "Dairy"
    },
    {
      "item": "Gouda Cheese",
      "type": "Dairy"
    },
    {
      "item": "Government Cheese",
      "type": "Dairy"
    },
    {
      "item": "Gran Queso",
      "type": "Dairy"
    },
    {
      "item": "Gruyere Cheese",
      "type": "Dairy"
    },
    {
      "item": "Half & Half",
      "type": "Dairy"
    },
    {
      "item": "Havarti Cheese",
      "type": "Dairy"
    },
    {
      "item": "Herve Mons Pave De Nord",
      "type": "Dairy"
    },
    {
      "item": "Herve Mons Tomme Des Bois Noir",
      "type": "Dairy"
    },
    {
      "item": "Jack",
      "type": "Dairy"
    },
    {
      "item": "Jarlsberg Cheese",
      "type": "Dairy"
    },
    {
      "item": "Kefalotyri Cheese",
      "type": "Dairy"
    },
    {
      "item": "Kefir",
      "type": "Dairy"
    },
    {
      "item": "Kerrygold Invernia",
      "type": "Dairy"
    },
    {
      "item": "Le Gruye’re Switzerland",
      "type": "Dairy"
    },
    {
      "item": "Liederkranz Cheese",
      "type": "Dairy"
    },
    {
      "item": "Limburger Cheese",
      "type": "Dairy"
    },
    {
      "item": "Manchego 1 year",
      "type": "Dairy"
    },
    {
      "item": "Manchego 8 mo. raw milk",
      "type": "Dairy"
    },
    {
      "item": "Manchego Cheese",
      "type": "Dairy"
    },
    {
      "item": "Mascarpone Cheese",
      "type": "Dairy"
    },
    {
      "item": "Buttermilk",
      "type": "Dairy"
    },
    {
      "item": "Skim Milk",
      "type": "Dairy"
    },
    {
      "item": "Whole Milk",
      "type": "Dairy"
    },
    {
      "item": "1% Fat Milk",
      "type": "Dairy"
    },
    {
      "item": "2% Fat Milk",
      "type": "Dairy"
    },
    {
      "item": "Low Fat Milk",
      "type": "Dairy"
    },
    {
      "item": "Montasio",
      "type": "Dairy"
    },
    {
      "item": "Monterey Jack Cheese",
      "type": "Dairy"
    },
    {
      "item": "Mozzarella Cheese",
      "type": "Dairy"
    },
    {
      "item": "Muenster Cheese",
      "type": "Dairy"
    },
    {
      "item": "Naked Goat",
      "type": "Dairy"
    },
    {
      "item": "Neufchatel cheese",
      "type": "Dairy"
    },
    {
      "item": "Paneer Cheese",
      "type": "Dairy"
    },
    {
      "item": "Parmesan Cheese",
      "type": "Dairy"
    },
    {
      "item": "Pastore Sini",
      "type": "Dairy"
    },
    {
      "item": "Pecorino Cheese",
      "type": "Dairy"
    },
    {
      "item": "Pepperjack Cheese",
      "type": "Dairy"
    },
    {
      "item": "Pimento Cheese",
      "type": "Dairy"
    },
    {
      "item": "Pinconning Cheese",
      "type": "Dairy"
    },
    {
      "item": "Plave",
      "type": "Dairy"
    },
    {
      "item": "Port de Salut Cheese",
      "type": "Dairy"
    },
    {
      "item": "Provel Cheese",
      "type": "Dairy"
    },
    {
      "item": "Provolone Cheese",
      "type": "Dairy"
    },
    {
      "item": "Quark cheese",
      "type": "Dairy"
    },
    {
      "item": "Ricotta Cheese",
      "type": "Dairy"
    },
    {
      "item": "Romanian Urda",
      "type": "Dairy"
    },
    {
      "item": "Romano Cheese",
      "type": "Dairy"
    },
    {
      "item": "Roquefort Cheese",
      "type": "Dairy"
    },
    {
      "item": "Salad Dressings",
      "type": "Dairy"
    },
    {
      "item": "Sheep Milk Cheeses",
      "type": "Dairy"
    },
    {
      "item": "Sour Cream",
      "type": "Dairy"
    },
    {
      "item": "Spray Cheese",
      "type": "Dairy"
    },
    {
      "item": "Stilton Cheese",
      "type": "Dairy"
    },
    {
      "item": "String Cheese",
      "type": "Dairy"
    },
    {
      "item": "Swiss cheese",
      "type": "Dairy"
    },
    {
      "item": "Teleme Cheese",
      "type": "Dairy"
    },
    {
      "item": "Tete de Moine",
      "type": "Dairy"
    },
    {
      "item": "Ubriaco Del Plave PO-SI",
      "type": "Dairy"
    },
    {
      "item": "Uniekaas Reserve",
      "type": "Dairy"
    },
    {
      "item": "Uniekaas Robusto",
      "type": "Dairy"
    },
    {
      "item": "Velveeta",
      "type": "Dairy"
    },
    {
      "item": "Whey Protein Powder",
      "type": "Dairy"
    },
    {
      "item": "White Cheeses",
      "type": "Dairy"
    },
    {
      "item": "Yellow Cheeses",
      "type": "Dairy"
    },
    {
      "item": "Yogurt",
      "type": "Dairy"
    },
    {
      "item": "Banana Bread",
      "type": "Bread"
    },
    {
      "item": "Beer Bread",
      "type": "Bread"
    },
    {
      "item": "Brown Rice Bread",
      "type": "Bread"
    },
    {
      "item": "Corn Muffins and Bread",
      "type": "Bread"
    },
    {
      "item": "Crumpets",
      "type": "Bread"
    },
    {
      "item": "English Muffins",
      "type": "Bread"
    },
    {
      "item": "Essene Bread",
      "type": "Bread"
    },
    {
      "item": "Ezekiel Bread",
      "type": "Bread"
    },
    {
      "item": "Fin Crisp",
      "type": "Bread"
    },
    {
      "item": "Flat Bread",
      "type": "Bread"
    },
    {
      "item": "Flax Bread",
      "type": "Bread"
    },
    {
      "item": "French Bread",
      "type": "Bread"
    },
    {
      "item": "Gluten Free Muffins",
      "type": "Bread"
    },
    {
      "item": "Gluten-Free Bread",
      "type": "Bread"
    },
    {
      "item": "High-Protein Bread",
      "type": "Bread"
    },
    {
      "item": "Hushpuppy",
      "type": "Bread"
    },
    {
      "item": "Ideal Flat Bread",
      "type": "Bread"
    },
    {
      "item": "Indian Bread",
      "type": "Bread"
    },
    {
      "item": "Irish Soda Bread",
      "type": "Bread"
    },
    {
      "item": "Johnny Cakes",
      "type": "Bread"
    },
    {
      "item": "Manna Bread",
      "type": "Bread"
    },
    {
      "item": "Matzos, Wheat",
      "type": "Bread"
    },
    {
      "item": "Millet Bread",
      "type": "Bread"
    },
    {
      "item": "Monkey Bread",
      "type": "Bread"
    },
    {
      "item": "Muffins Made With Wheat Flour",
      "type": "Bread"
    },
    {
      "item": "Multi-Grain Bread",
      "type": "Bread"
    },
    {
      "item": "Oat Bran Muffins",
      "type": "Bread"
    },
    {
      "item": "Oat Bread",
      "type": "Bread"
    },
    {
      "item": "Panera Bread",
      "type": "Bread"
    },
    {
      "item": "Pita Bread",
      "type": "Bread"
    },
    {
      "item": "Potato Bread",
      "type": "Bread"
    },
    {
      "item": "Pumpernickel",
      "type": "Bread"
    },
    {
      "item": "Pumpkin Bread",
      "type": "Bread"
    },
    {
      "item": "Rice Bread",
      "type": "Bread"
    },
    {
      "item": "Rice Cakes",
      "type": "Bread"
    },
    {
      "item": "Rye Bread",
      "type": "Bread"
    },
    {
      "item": "Rye Vita",
      "type": "Bread"
    },
    {
      "item": "Sacramental Bread",
      "type": "Bread"
    },
    {
      "item": "Scones",
      "type": "Bread"
    },
    {
      "item": "Soda Bread",
      "type": "Bread"
    },
    {
      "item": "Soda Bread",
      "type": "Bread"
    },
    {
      "item": "Sourdough Wheat Bread",
      "type": "Bread"
    },
    {
      "item": "Soy Flour Bread",
      "type": "Bread"
    },
    {
      "item": "Spelt Bread",
      "type": "Bread"
    },
    {
      "item": "Sweet Potato Muffins",
      "type": "Bread"
    },
    {
      "item": "Tea Cakes",
      "type": "Bread"
    },
    {
      "item": "Tortilla",
      "type": "Bread"
    },
    {
      "item": "Tortilla",
      "type": "Bread"
    },
    {
      "item": "Wasa Bread",
      "type": "Bread"
    },
    {
      "item": "Wheat Bagels",
      "type": "Bread"
    },
    {
      "item": "Wheat Bran Muffins",
      "type": "Bread"
    },
    {
      "item": "Durum Wheat",
      "type": "Bread"
    },
    {
      "item": "Whole Wheat Bread",
      "type": "Bread"
    },
    {
      "item": "Zucchini Bread",
      "type": "Bread"
    },
    {
      "item": "Amaranth",
      "type": "Flour"
    },
    {
      "item": "Artichoke Flour",
      "type": "Flour"
    },
    {
      "item": "Artichoke Pasta",
      "type": "Flour"
    },
    {
      "item": "Barley",
      "type": "Flour"
    },
    {
      "item": "Barley Flour",
      "type": "Flour"
    },
    {
      "item": "Bean Flours",
      "type": "Flour"
    },
    {
      "item": "Oat Bran",
      "type": "Flour"
    },
    {
      "item": "Rice Bran",
      "type": "Flour"
    },
    {
      "item": "Wheat Bran",
      "type": "Flour"
    },
    {
      "item": "Buckwheat",
      "type": "Flour"
    },
    {
      "item": "Carrageenan",
      "type": "Flour"
    },
    {
      "item": "Cassava",
      "type": "Flour"
    },
    {
      "item": "Cattail",
      "type": "Flour"
    },
    {
      "item": "Chia Seed",
      "type": "Flour"
    },
    {
      "item": "Coix Spp.",
      "type": "Flour"
    },
    {
      "item": "Corn",
      "type": "Flour"
    },
    {
      "item": "Cornmeal",
      "type": "Flour"
    },
    {
      "item": "Cous Cous",
      "type": "Flour"
    },
    {
      "item": "Cream of Rice",
      "type": "Flour"
    },
    {
      "item": "Cream of Wheat",
      "type": "Flour"
    },
    {
      "item": "Durum Wheat Flour",
      "type": "Flour"
    },
    {
      "item": "Essene Bread",
      "type": "Flour"
    },
    {
      "item": "Familia",
      "type": "Flour"
    },
    {
      "item": "Farina",
      "type": "Flour"
    },
    {
      "item": "Farro",
      "type": "Flour"
    },
    {
      "item": "Flax Seed",
      "type": "Flour"
    },
    {
      "item": "Flaxseed Bread",
      "type": "Flour"
    },
    {
      "item": "Fonio",
      "type": "Flour"
    },
    {
      "item": "Gluten Flour",
      "type": "Flour"
    },
    {
      "item": "Gluten –Free",
      "type": "Flour"
    },
    {
      "item": "Graham Flour",
      "type": "Flour"
    },
    {
      "item": "Grains",
      "type": "Flour"
    },
    {
      "item": "Grains, Sprouted",
      "type": "Flour"
    },
    {
      "item": "Granola",
      "type": "Flour"
    },
    {
      "item": "Grape Nuts",
      "type": "Flour"
    },
    {
      "item": "Guar Gum",
      "type": "Flour"
    },
    {
      "item": "Hominy",
      "type": "Flour"
    },
    {
      "item": "Job’s Tears",
      "type": "Flour"
    },
    {
      "item": "Kamut",
      "type": "Flour"
    },
    {
      "item": "Kasha",
      "type": "Flour"
    },
    {
      "item": "Kasha Bulgur Wheat Flour",
      "type": "Flour"
    },
    {
      "item": "Kudzu",
      "type": "Flour"
    },
    {
      "item": "Larch Fiber",
      "type": "Flour"
    },
    {
      "item": "Lentil Flour",
      "type": "Flour"
    },
    {
      "item": "Maize",
      "type": "Flour"
    },
    {
      "item": "Malanga",
      "type": "Flour"
    },
    {
      "item": "Manioc",
      "type": "Flour"
    },
    {
      "item": "Manna Bread",
      "type": "Flour"
    },
    {
      "item": "Mastic Gum",
      "type": "Flour"
    },
    {
      "item": "Millet",
      "type": "Flour"
    },
    {
      "item": "Nut Flours",
      "type": "Flour"
    },
    {
      "item": "Oat",
      "type": "Flour"
    },
    {
      "item": "Oat Bran",
      "type": "Flour"
    },
    {
      "item": "Oat Flour",
      "type": "Flour"
    },
    {
      "item": "Oatmeal",
      "type": "Flour"
    },
    {
      "item": "Oats",
      "type": "Flour"
    },
    {
      "item": "Organic",
      "type": "Flour"
    },
    {
      "item": "Palmer’s Grass",
      "type": "Flour"
    },
    {
      "item": "Papadam",
      "type": "Flour"
    },
    {
      "item": "Polenta",
      "type": "Flour"
    },
    {
      "item": "Popcorn",
      "type": "Flour"
    },
    {
      "item": "Quinoa",
      "type": "Flour"
    },
    {
      "item": "Rice",
      "type": "Flour"
    },
    {
      "item": "Rice Bran",
      "type": "Flour"
    },
    {
      "item": "Rice Flour",
      "type": "Flour"
    },
    {
      "item": "Brown Rice Flour",
      "type": "Flour"
    },
    {
      "item": "Basmati Rice",
      "type": "Flour"
    },
    {
      "item": "Brown Rice",
      "type": "Flour"
    },
    {
      "item": "Puffed Rice",
      "type": "Flour"
    },
    {
      "item": "Specialty Rice",
      "type": "Flour"
    },
    {
      "item": "White Rice",
      "type": "Flour"
    },
    {
      "item": "Wild Rice",
      "type": "Flour"
    },
    {
      "item": "Rye",
      "type": "Flour"
    },
    {
      "item": "Rye Crisp",
      "type": "Flour"
    },
    {
      "item": "Rye Flour",
      "type": "Flour"
    },
    {
      "item": "Semolina Pasta",
      "type": "Flour"
    },
    {
      "item": "Seven Grain Cereal",
      "type": "Flour"
    },
    {
      "item": "Soba",
      "type": "Flour"
    },
    {
      "item": "Soba Noodles",
      "type": "Flour"
    },
    {
      "item": "Sorghum",
      "type": "Flour"
    },
    {
      "item": "Sorghum",
      "type": "Flour"
    },
    {
      "item": "Soy Flakes",
      "type": "Flour"
    },
    {
      "item": "Soy Granules",
      "type": "Flour"
    },
    {
      "item": "Soy Protein Isolate",
      "type": "Flour"
    },
    {
      "item": "Soybean Flour",
      "type": "Flour"
    },
    {
      "item": "Spelt",
      "type": "Flour"
    },
    {
      "item": "Spelt Flour",
      "type": "Flour"
    },
    {
      "item": "Spinach Pasta",
      "type": "Flour"
    },
    {
      "item": "Sprouted Wheat Flour",
      "type": "Flour"
    },
    {
      "item": "Tannier",
      "type": "Flour"
    },
    {
      "item": "Tapioca",
      "type": "Flour"
    },
    {
      "item": "Taro",
      "type": "Flour"
    },
    {
      "item": "Teff",
      "type": "Flour"
    },
    {
      "item": "Triticale",
      "type": "Flour"
    },
    {
      "item": "Wheat",
      "type": "Flour"
    },
    {
      "item": "Germ Wheat",
      "type": "Flour"
    },
    {
      "item": "Barn Wheat",
      "type": "Flour"
    },
    {
      "item": "Bulgur Wheat",
      "type": "Flour"
    },
    {
      "item": "Puffed Wheat",
      "type": "Flour"
    },
    {
      "item": "Sprouted Wheat",
      "type": "Flour"
    },
    {
      "item": "Gluten Wheat",
      "type": "Flour"
    },
    {
      "item": "Whole Grain Wheat",
      "type": "Flour"
    },
    {
      "item": "Whole Grain Emmer Wheat",
      "type": "Flour"
    },
    {
      "item": "Whole Grain Kamut Wheat",
      "type": "Flour"
    },
    {
      "item": "Whole Grain Spelt Wheat",
      "type": "Flour"
    },
    {
      "item": "White Flour Wheat",
      "type": "Flour"
    },
    {
      "item": "Whole Wheat Flour",
      "type": "Flour"
    },
    {
      "item": "Wild Rice",
      "type": "Flour"
    },
    {
      "item": "Zoom",
      "type": "Flour"
    },
    {
      "item": "Acai",
      "type": "Juices"
    },
    {
      "item": "Aloe Vera Juice",
      "type": "Juices"
    },
    {
      "item": "Apple Cider",
      "type": "Juices"
    },
    {
      "item": "Apple Juice",
      "type": "Juices"
    },
    {
      "item": "Apple Spiced Cider",
      "type": "Juices"
    },
    {
      "item": "Apricot Nectar",
      "type": "Juices"
    },
    {
      "item": "Bancha",
      "type": "Juices"
    },
    {
      "item": "Barley Grass",
      "type": "Juices"
    },
    {
      "item": "Beer",
      "type": "Juices"
    },
    {
      "item": "Beet",
      "type": "Juices"
    },
    {
      "item": "Black Cherry",
      "type": "Juices"
    },
    {
      "item": "Black Currant",
      "type": "Juices"
    },
    {
      "item": "Black Tea",
      "type": "Juices"
    },
    {
      "item": "Blackberry Juice",
      "type": "Juices"
    },
    {
      "item": "Blueberry",
      "type": "Juices"
    },
    {
      "item": "Blueberry Pomegranate",
      "type": "Juices"
    },
    {
      "item": "Boysenberry",
      "type": "Juices"
    },
    {
      "item": "Cabbage",
      "type": "Juices"
    },
    {
      "item": "Capri Sun",
      "type": "Juices"
    },
    {
      "item": "Carrot",
      "type": "Juices"
    },
    {
      "item": "Celery Juice",
      "type": "Juices"
    },
    {
      "item": "Chamomile Tea",
      "type": "Juices"
    },
    {
      "item": "Cherry Juice",
      "type": "Juices"
    },
    {
      "item": "Cherry, Tart",
      "type": "Juices"
    },
    {
      "item": "Coconut Juice",
      "type": "Juices"
    },
    {
      "item": "Coconut Milk",
      "type": "Juices"
    },
    {
      "item": "Coffee",
      "type": "Juices"
    },
    {
      "item": "Decaf Coffee",
      "type": "Juices"
    },
    {
      "item": "Organic Coffee",
      "type": "Juices"
    },
    {
      "item": "Half Decaf Coffee",
      "type": "Juices"
    },
    {
      "item": "Cranberry",
      "type": "Juices"
    },
    {
      "item": "Cranberry Blueberry",
      "type": "Juices"
    },
    {
      "item": "Cranberry Pomegranate",
      "type": "Juices"
    },
    {
      "item": "Cran-Raspberry",
      "type": "Juices"
    },
    {
      "item": "Cream",
      "type": "Juices"
    },
    {
      "item": "Cucumber",
      "type": "Juices"
    },
    {
      "item": "Cucumber Juice",
      "type": "Juices"
    },
    {
      "item": "Elderflower",
      "type": "Juices"
    },
    {
      "item": "Fruit Punch",
      "type": "Juices"
    },
    {
      "item": "Garlic",
      "type": "Juices"
    },
    {
      "item": "Ginger",
      "type": "Juices"
    },
    {
      "item": "Ginger Root Tea",
      "type": "Juices"
    },
    {
      "item": "Ginger Soother",
      "type": "Juices"
    },
    {
      "item": "Gogi Berry",
      "type": "Juices"
    },
    {
      "item": "Concord Grape",
      "type": "Juices"
    },
    {
      "item": "White Grape",
      "type": "Juices"
    },
    {
      "item": "Pink Grapefruit",
      "type": "Juices"
    },
    {
      "item": "White Grapefruit",
      "type": "Juices"
    },
    {
      "item": "Green Drinks",
      "type": "Juices"
    },
    {
      "item": "Green Pepper",
      "type": "Juices"
    },
    {
      "item": "Green Tea",
      "type": "Juices"
    },
    {
      "item": "Half and Half",
      "type": "Juices"
    },
    {
      "item": "Hibiscus",
      "type": "Juices"
    },
    {
      "item": "Hi-C",
      "type": "Juices"
    },
    {
      "item": "Horseradish",
      "type": "Juices"
    },
    {
      "item": "Jamaican Lemonade Spritzer",
      "type": "Juices"
    },
    {
      "item": "Jerusalem Artichoke",
      "type": "Juices"
    },
    {
      "item": "Kale",
      "type": "Juices"
    },
    {
      "item": "Kiwi Strawberry",
      "type": "Juices"
    },
    {
      "item": "Kombucha Tea",
      "type": "Juices"
    },
    {
      "item": "Kool-Aid",
      "type": "Juices"
    },
    {
      "item": "Kukicha",
      "type": "Juices"
    },
    {
      "item": "Leek",
      "type": "Juices"
    },
    {
      "item": "Lemon Balm Tea",
      "type": "Juices"
    },
    {
      "item": "Lemonade",
      "type": "Juices"
    },
    {
      "item": "Lemon-Ginger",
      "type": "Juices"
    },
    {
      "item": "Lemon-Ginger-Echinacea",
      "type": "Juices"
    },
    {
      "item": "Lemon-Lime Spritzer",
      "type": "Juices"
    },
    {
      "item": "Licorice Root Tea",
      "type": "Juices"
    },
    {
      "item": "Limeade",
      "type": "Juices"
    },
    {
      "item": "Mandarin-Lime Spritzer",
      "type": "Juices"
    },
    {
      "item": "Mango Fandango Spritzer",
      "type": "Juices"
    },
    {
      "item": "Mango Nectar",
      "type": "Juices"
    },
    {
      "item": "Mega Green",
      "type": "Juices"
    },
    {
      "item": "Almond Milk",
      "type": "Juices"
    },
    {
      "item": "Hemp Milk",
      "type": "Juices"
    },
    {
      "item": "Oat Milk",
      "type": "Juices"
    },
    {
      "item": "Morning Blend",
      "type": "Juices"
    },
    {
      "item": "Mustard Greens",
      "type": "Juices"
    },
    {
      "item": "Noni Juice",
      "type": "Juices"
    },
    {
      "item": "Onion",
      "type": "Juices"
    },
    {
      "item": "Orange",
      "type": "Juices"
    },
    {
      "item": "Orange Carrot",
      "type": "Juices"
    },
    {
      "item": "Orange Passion fruit Spritzer",
      "type": "Juices"
    },
    {
      "item": "Papaya Nectar",
      "type": "Juices"
    },
    {
      "item": "Parsley",
      "type": "Juices"
    },
    {
      "item": "Parsnip",
      "type": "Juices"
    },
    {
      "item": "Passion fruit",
      "type": "Juices"
    },
    {
      "item": "Pear Juice",
      "type": "Juices"
    },
    {
      "item": "Peppermint Tea",
      "type": "Juices"
    },
    {
      "item": "Pineapple",
      "type": "Juices"
    },
    {
      "item": "Pineapple Coconut",
      "type": "Juices"
    },
    {
      "item": "Plum",
      "type": "Juices"
    },
    {
      "item": "Pomegranate",
      "type": "Juices"
    },
    {
      "item": "Potassium Broth",
      "type": "Juices"
    },
    {
      "item": "Potato",
      "type": "Juices"
    },
    {
      "item": "Prune",
      "type": "Juices"
    },
    {
      "item": "Pummelo Juice",
      "type": "Juices"
    },
    {
      "item": "Radish",
      "type": "Juices"
    },
    {
      "item": "Razzleberry",
      "type": "Juices"
    },
    {
      "item": "Recharge Sports Beverages",
      "type": "Juices"
    },
    {
      "item": "Rooibos",
      "type": "Juices"
    },
    {
      "item": "Rose Hip Tea",
      "type": "Juices"
    },
    {
      "item": "Sauerkraut",
      "type": "Juices"
    },
    {
      "item": "Seltzer Water",
      "type": "Juices"
    },
    {
      "item": "Sodas",
      "type": "Juices"
    },
    {
      "item": "Sorrel",
      "type": "Juices"
    },
    {
      "item": "Spinach",
      "type": "Juices"
    },
    {
      "item": "Spritzers",
      "type": "Juices"
    },
    {
      "item": "String Bean",
      "type": "Juices"
    },
    {
      "item": "Tang",
      "type": "Juices"
    },
    {
      "item": "Tangerine",
      "type": "Juices"
    },
    {
      "item": "Tangerine Juice",
      "type": "Juices"
    },
    {
      "item": "Tangerine Spritzer",
      "type": "Juices"
    },
    {
      "item": "Tomato",
      "type": "Juices"
    },
    {
      "item": "Tropical Punch",
      "type": "Juices"
    },
    {
      "item": "Turnip",
      "type": "Juices"
    },
    {
      "item": "V-8",
      "type": "Juices"
    },
    {
      "item": "Very Veggie Untomato",
      "type": "Juices"
    },
    {
      "item": "Water with Lemon",
      "type": "Juices"
    },
    {
      "item": "Watercress",
      "type": "Juices"
    },
    {
      "item": "Watermelon Juice",
      "type": "Juices"
    },
    {
      "item": "Wheat Grass",
      "type": "Juices"
    },
    {
      "item": "Red Wine",
      "type": "Juices"
    },
    {
      "item": "White Wine",
      "type": "Juices"
    },
    {
      "item": "Yerba Mate Tea",
      "type": "Juices"
    },
    {
      "item": "Zucchini",
      "type": "Juices"
    },
    {
      "item": "Agar agar",
      "type": "Spices"
    },
    {
      "item": "Allspice",
      "type": "Spices"
    },
    {
      "item": "Anise Seed",
      "type": "Spices"
    },
    {
      "item": "Apple Pie Spice",
      "type": "Spices"
    },
    {
      "item": "Arrowroot",
      "type": "Spices"
    },
    {
      "item": "Bar-B-Que Spice",
      "type": "Spices"
    },
    {
      "item": "Basil",
      "type": "Spices"
    },
    {
      "item": "Bay Leaf",
      "type": "Spices"
    },
    {
      "item": "Cajun Spice",
      "type": "Spices"
    },
    {
      "item": "Caraway Seed",
      "type": "Spices"
    },
    {
      "item": "Cardamom",
      "type": "Spices"
    },
    {
      "item": "Cayenne Pepper",
      "type": "Spices"
    },
    {
      "item": "Celery Salt",
      "type": "Spices"
    },
    {
      "item": "Chinese Five Spice",
      "type": "Spices"
    },
    {
      "item": "Chipolte Pepper",
      "type": "Spices"
    },
    {
      "item": "Chives",
      "type": "Spices"
    },
    {
      "item": "Cilantro",
      "type": "Spices"
    },
    {
      "item": "Cinnamon",
      "type": "Spices"
    },
    {
      "item": "Cloves",
      "type": "Spices"
    },
    {
      "item": "Coriander",
      "type": "Spices"
    },
    {
      "item": "Cream Of Tartar",
      "type": "Spices"
    },
    {
      "item": "Cumin",
      "type": "Spices"
    },
    {
      "item": "Curry",
      "type": "Spices"
    },
    {
      "item": "Dill",
      "type": "Spices"
    },
    {
      "item": "Fajita Seasoning",
      "type": "Spices"
    },
    {
      "item": "Fennel",
      "type": "Spices"
    },
    {
      "item": "Fenugreek",
      "type": "Spices"
    },
    {
      "item": "Garam Masala",
      "type": "Spices"
    },
    {
      "item": "Garlic",
      "type": "Spices"
    },
    {
      "item": "Ginger",
      "type": "Spices"
    },
    {
      "item": "Grains F Paradise",
      "type": "Spices"
    },
    {
      "item": "Gumbo File",
      "type": "Spices"
    },
    {
      "item": "Herbs De Provence",
      "type": "Spices"
    },
    {
      "item": "Hickory Salt",
      "type": "Spices"
    },
    {
      "item": "Horseradish",
      "type": "Spices"
    },
    {
      "item": "Lemon Pepper",
      "type": "Spices"
    },
    {
      "item": "Mace",
      "type": "Spices"
    },
    {
      "item": "Marjoram",
      "type": "Spices"
    },
    {
      "item": "Mustard Seed",
      "type": "Spices"
    },
    {
      "item": "Nutmeg",
      "type": "Spices"
    },
    {
      "item": "Onion",
      "type": "Spices"
    },
    {
      "item": "Oregano",
      "type": "Spices"
    },
    {
      "item": "Oriental Stir Fry Spice",
      "type": "Spices"
    },
    {
      "item": "Paprika",
      "type": "Spices"
    },
    {
      "item": "Parsley",
      "type": "Spices"
    },
    {
      "item": "Pepper",
      "type": "Spices"
    },
    {
      "item": "Pickling Spice",
      "type": "Spices"
    },
    {
      "item": "Pizza Seasoning",
      "type": "Spices"
    },
    {
      "item": "Poppy Seed",
      "type": "Spices"
    },
    {
      "item": "Poultry Seasoning",
      "type": "Spices"
    },
    {
      "item": "Pumpkin Pie Spice",
      "type": "Spices"
    },
    {
      "item": "Rosemary",
      "type": "Spices"
    },
    {
      "item": "Safflower",
      "type": "Spices"
    },
    {
      "item": "Saffron",
      "type": "Spices"
    },
    {
      "item": "Sage",
      "type": "Spices"
    },
    {
      "item": "Salad Herbs",
      "type": "Spices"
    },
    {
      "item": "Salt",
      "type": "Spices"
    },
    {
      "item": "Savory Summer Leaf",
      "type": "Spices"
    },
    {
      "item": "Taco Seasoning",
      "type": "Spices"
    },
    {
      "item": "Tarragon",
      "type": "Spices"
    },
    {
      "item": "Thai Seasoning",
      "type": "Spices"
    },
    {
      "item": "Thyme",
      "type": "Spices"
    },
    {
      "item": "Turmeric",
      "type": "Spices"
    },
    {
      "item": "Vanilla Bean",
      "type": "Spices"
    },
    {
      "item": "Acorn",
      "type": "Nuts"
    },
    {
      "item": "Almond",
      "type": "Nuts"
    },
    {
      "item": "Almond Butter",
      "type": "Nuts"
    },
    {
      "item": "Beech",
      "type": "Nuts"
    },
    {
      "item": "Brazil Nuts",
      "type": "Nuts"
    },
    {
      "item": "Breadnut",
      "type": "Nuts"
    },
    {
      "item": "Candlenut",
      "type": "Nuts"
    },
    {
      "item": "Cashews",
      "type": "Nuts"
    },
    {
      "item": "Chestnuts",
      "type": "Nuts"
    },
    {
      "item": "Chia seed",
      "type": "Nuts"
    },
    {
      "item": "Filbert",
      "type": "Nuts"
    },
    {
      "item": "Flax seed",
      "type": "Nuts"
    },
    {
      "item": "Hazelnut",
      "type": "Nuts"
    },
    {
      "item": "Hemp seed",
      "type": "Nuts"
    },
    {
      "item": "Hickory Nuts",
      "type": "Nuts"
    },
    {
      "item": "Kola nut",
      "type": "Nuts"
    },
    {
      "item": "Litchi Nuts",
      "type": "Nuts"
    },
    {
      "item": "Macadamia",
      "type": "Nuts"
    },
    {
      "item": "Nutello",
      "type": "Nuts"
    },
    {
      "item": "Peanut",
      "type": "Nuts"
    },
    {
      "item": "Peanut Butter",
      "type": "Nuts"
    },
    {
      "item": "Pecans",
      "type": "Nuts"
    },
    {
      "item": "Pignola",
      "type": "Nuts"
    },
    {
      "item": "Pine nut",
      "type": "Nuts"
    },
    {
      "item": "Pinon nuts",
      "type": "Nuts"
    },
    {
      "item": "Pistachio",
      "type": "Nuts"
    },
    {
      "item": "Poppy",
      "type": "Nuts"
    },
    {
      "item": "Pumpkin",
      "type": "Nuts"
    },
    {
      "item": "Sesame",
      "type": "Nuts"
    },
    {
      "item": "Soy Nuts",
      "type": "Nuts"
    },
    {
      "item": "Sunflower",
      "type": "Nuts"
    },
    {
      "item": "Walnut",
      "type": "Nuts"
    }
]
module.exports = {
  itemTypeMap: itemTypeMap,
  typeMap: typeMap
}
