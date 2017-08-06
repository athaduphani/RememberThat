  var typeOfTypes =["Groceries", "Produce", "Grocery"];
  var typeMap = [
    {
      "type": "Electronics",
      // "Map": ["Vegetable", "Fruit","Spices","Nuts","Dairy","Bread","Flour","Juices","Meat"]
      "Map": ["TV", "Computer"]
    },
    {
      "type": "all",
      // "Map": ["Vegetable", "Fruit","Spices","Nuts","Dairy","Bread","Flour","Juices","Meat"]
      "Map": ["Vegetables", "Fruits","Dairy","Meat","Seafood","Soups","Juices"]
    },
    {
      "type": "Grocery",
      "Map": ["Vegetables", "Fruits","Dairy","Meat","Seafood","Soups","Juices"]
    },
    {
      "type": "Groceries",
      "Map": ["Vegetables","Fruits","Dairy","Meat","Seafood","Soups","Juices"]
    },
    {
      "type": "Produce",
      "Map": ["Vegetables", "Fruits","Dairy","Meat","Seafood","Soups","Juices"]
    },
    {
      "type": "Fruits",
      "Map": ["Fruits"]
    },
    {
      "type": "Seafood",
      "Map": ["Seafood"]
    },
    {
      "type": "Soups",
      "Map": ["Soups"]
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
      "type": "Juice",
      "Map": ["Juice"]
    },
    {
      "type": "Meat",
      "Map": ["Meat"]
    },
    {
      "type": "Vegetables",
      "Map": ["Vegetables"]
    },
  ];
  var itemTypeMap =  [
  {
    "item": "anchovies",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 540
  },
  {
    "item": "arctic char",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "bluefish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "carp",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "catfish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "caviar",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 365
  },
  {
    "item": "clam chowder",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "clams",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "cod",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "crab",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "crab meat",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "crayfish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "cream of shrimp soup",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "escargots",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 365
  },
  {
    "item": "fish chowder",
    "type": "Seafood",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "fish stock or broth",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "flounder",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "frog legs",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "gefilte fish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 1460
  },
  {
    "item": "grouper",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "haddock",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "halibut",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "imitation crab meat",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 14
  },
  {
    "item": "lobster",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "lobster tails",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "lox",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "lox package",
    "type": "Seafood",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "mackerel",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "mahi-mahi",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "monkfish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "mullet",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "mussels",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "octopus",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "orange roughy",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "oysters",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "perch",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "pollock",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "rockfish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "sable",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "black cod",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "salmon",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "salmon roe",
    "type": "Seafood",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "salt cod",
    "type": "Seafood",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "sardines",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "scallops",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "sea bass",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "sea trout",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "seafood bisque",
    "type": "Seafood",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "shark steak",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "shrimp",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "skate",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "smelts",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "smoked herring fillets",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "smoked oysters",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "smoked salmon",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "calamari",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "sole",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "squid",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "calamari",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "striped bass",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "sturgeon",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "sushi",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "swordfish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "tilapia",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "trout",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "smoked trout",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "tuna",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "tuna canned",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "turbot",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "whitefish",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "smoked whitefish",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "apples",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "apricots",
    "type": "Fruits",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "avocados",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "bananas",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "blackberries",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "blueberries",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "boysenberries",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "cantaloupe",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "casaba melons",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "cherimoya",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "cherries",
    "type": "Fruits",
    "expiry_start": 4,
    "expiry_end": 7
  },
  {
    "item": "clementines",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "cranberries",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "crenshaw melons",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "currants",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "dates",
    "type": "Fruits",
    "expiry_start": "",
    "expiry_end": 365
  },
  {
    "item": "elderberries",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "feijoa",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "figs",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "fruit cocktail",
    "type": "Fruits",
    "expiry_start": 540,
    "expiry_end": 730
  },
  {
    "item": "fruit salad",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "gooseberries",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "grapefruit",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "grapes",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "guava",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "honeydew melons",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "huckleberries",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "kiwi fruit",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "kumquats",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "lemons",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "limes",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "litchis",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "loose olives",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "mangos",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "nectarines",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "oranges",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "papaya nectar",
    "type": "Fruits",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "papayas",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "passion fruit",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "peaches",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "pear nectar",
    "type": "Fruits",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "pears",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "persimmons",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "pineapples",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "plantains",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "plums",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "pomegranates",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "prickly pears",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 3
  },
  {
    "item": "quinces",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "raisins",
    "type": "Fruits",
    "expiry_start": 180,
    "expiry_end": 365
  },
  {
    "item": "raspberries",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "sapote",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "star fruit",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "strawberries",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 7
  },
  {
    "item": "tamarind paste",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "tangerines",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "ugli fruit",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "watermelon",
    "type": "Fruits",
    "expiry_start": "",
    "expiry_end": 14
  },
  {
    "item": "alfalfa sprouts",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "ancho peppers",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "artichokes",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "canned artichokes",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "arugula",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "asparagus",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "canned asparagus",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "baby carrots",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "bamboo shoots",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "canned bamboo shoots",
    "type": "Vegetables",
    "expiry_start": 1825,
    "expiry_end": 2555
  },
  {
    "item": "banana peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "canned beans",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "beet greens",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "beets",
    "type": "Vegetables",
    "expiry_start": 12,
    "expiry_end": 14
  },
  {
    "item": "canned beets",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "belgian endive",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "bell peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "green peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "yellow peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "red peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "bitter melon",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 7
  },
  {
    "item": "black-eyed peas",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "bok choy",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "broad beans",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "broccoli",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "broccoli raab",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "brussels sprouts",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "gobo root",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "burdock root",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "cabbage",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "cardoon",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "carrot juice",
    "type": "Juice",
    "expiry_start": 2,
    "expiry_end": 7
  },
  {
    "item": "carrots",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "canned carrots",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "cassava",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "yucca",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "manioc",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "cauliflower",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "celery root",
    "type": "Vegetables",
    "expiry_start": 10,
    "expiry_end": 14
  },
  {
    "item": "celery",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "chayote",
    "type": "Vegetables",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "chickpeas",
    "type": "Vegetables",
    "expiry_start": 0,
    "expiry_end": 2
  },
  {
    "item": "chichory green",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "canned chilli peppers",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "coleslaw",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "collards",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "frozen corn",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 360
  },
  {
    "item": "corn cob",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 3
  },
  {
    "item": "cranberry beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "asparagus soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "broccoli soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "celery soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "mushroom soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "onion soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "potato soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "cucumber",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 7
  },
  {
    "item": "dandelion greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "dried vegetables",
    "type": "Vegetables",
    "expiry_start": 180,
    "expiry_end": 365
  },
  {
    "item": "eggplant",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "escarole",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "edamame",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "fennel",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "fiddlehead ferns",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "french onion soup",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "frisee greens",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "garlic",
    "type": "Vegetables",
    "expiry_start": 90,
    "expiry_end": 150
  },
  {
    "item": "canned garlic",
    "type": "Vegetables",
    "expiry_start": 365,
    "expiry_end": 730
  },
  {
    "item": "ginger",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "grape leaves",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "scallions",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "guero peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "habanero peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "hearts of palm",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "hash browns",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "horseradish",
    "type": "Vegetables",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "jalapeno peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "canned jalapeno peppers",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "sunchokes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "jicama",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "kale",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "kohlrabi",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "leeks",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "lettuce",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "lettuce leaf",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "lima beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "mesclun greens",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "minestrone soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "mixed vegetables",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "mung beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "canned mushrooms",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "mushrooms",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "mustard greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "nopales",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "okra",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "onion rings",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "canned onions",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "onions",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "parsnips",
    "type": "Vegetables",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "green peas",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "canned carrots",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "frozen peas",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "picked peppers",
    "type": "Vegetables",
    "expiry_start": 365,
    "expiry_end": 730
  },
  {
    "item": "potatoes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "pumpkin",
    "type": "Vegetables",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "canned pumpkin",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "radicchio",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "radishes",
    "type": "Vegetables",
    "expiry_start": 10,
    "expiry_end": 14
  },
  {
    "item": "rutabages",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "rhubarb",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "salsify",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "sauerkraut",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "seaweed",
    "type": "Vegetables",
    "expiry_start": 60,
    "expiry_end": 240
  },
  {
    "item": "serano peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "shallots",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "sorrel",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "soybeans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "spinach",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "spinch bag",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "squash",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "canned squash",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "sweet potatoes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "swiss chard",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "taro",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "tomatillos",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "tomato bisque",
    "type": "Vegetables",
    "expiry_start": 360,
    "expiry_end": 540
  },
  {
    "item": "tomato paste",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1095
  },
  {
    "item": "tomatoes",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "sun dried tomatoes",
    "type": "Vegetables",
    "expiry_start": 240,
    "expiry_end": 270
  },
  {
    "item": "truffles",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 14
  },
  {
    "item": "canned truffles",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "trunip greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "trunips",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "vegetable broth",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "vegetable soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "yardlong beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "canned yams",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "yams",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "watercress",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "canned water chestnuts",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "water chestnuts",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "veggie burgers",
    "type": "Vegetables",
    "expiry_start": 130,
    "expiry_end": 180
  },
  {
    "item": "abruzzese sausage",
    "type": "Meat",
    "expiry_start": 182,
    "expiry_end": 182
  },
  {
    "item": "bacon bits",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "item": "bacon",
    "type": "Meat",
    "expiry_start": 7,
    "expiry_end": 7
  },
  {
    "item": "beef brisket",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "beef broth",
    "type": "Meat",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "beef burgers",
    "type": "Meat",
    "expiry_start": 182,
    "expiry_end": 182
  },
  {
    "item": "beef heart",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "beef jerky",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "item": "beef kidneys",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "beef liver",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "beef ribs",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "frozen beef roast",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "item": "beef roast",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "beef soup",
    "type": "Meat",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "beef steak",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "beef tougue",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "ground beef",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "beef stew meat",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "bison chops",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "bison roast",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "bison steak",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "ground bison",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "american cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "appenzeller cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "asiago cheese",
    "type": "Dairy",
    "expiry_start": 525,
    "expiry_end": 365
  },
  {
    "item": "beaufort cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "bel paese cheese",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "blue cheese",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "boursault cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "brick cheese",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "brie cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "butter",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "buttermilk",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "camembert cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "cheddar cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "cheese soup",
    "type": "Dairy",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "cheshire cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "chocolate milk / flavored milk",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "colby cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "cottage cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "cream cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "cream, fluid",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "creme fraiche",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "derby cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "dessert topping mix",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 365
  },
  {
    "item": "cream cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 15
  },
  {
    "item": "dubliner cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "edam cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "egg substitutes",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 95
  },
  {
    "item": "eggnog",
    "type": "Dairy",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "emmental cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "farmer cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "feta cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "fontina cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "gloucester cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "goat cheese",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "gorgonzola cheese",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "gouda cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "gruyere cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "half-and-half",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "havarti cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "heavy cream",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "jarlsberg cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "lancashire cheese",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "light cream",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "limburger cheese",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "mascarpone cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 65
  },
  {
    "item": "milk",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "monterey jack cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "mozzarella cheese",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "muenster cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "neufchatel cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 15
  },
  {
    "item": "non-dairy coffee creamer",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "parmesan cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "parmigiano-reggiano cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 365
  },
  {
    "item": "pasteurized processed cheese",
    "type": "Dairy",
    "expiry_start": 175,
    "expiry_end": 210
  },
  {
    "item": "port du salut cheese",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "powdered milk",
    "type": "Dairy",
    "expiry_start": 365,
    "expiry_end": 630
  },
  {
    "item": "provolone cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "ricotta cheese",
    "type": "Dairy",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "romano cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "roquefort cheese",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "sour cream",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 14
  },
  {
    "item": "stilton cheese",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "swiss cheese",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "tilsiter cheese",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "whipped cream",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "yogurt",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 21
  },
  {
    "item": "apple juice",
    "type": "Juice",
    "expiry_start": 432,
    "expiry_end": 720
  },
  {
    "item": "guanabana nectar",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "cranberry juice",
    "type": "Juice",
    "expiry_start": 540,
    "expiry_end": 730
  },
  {
    "item": "apricot nector",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "blackberry juice",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "grape juice",
    "type": "Juice",
    "expiry_start": 540,
    "expiry_end": 730
  },
  {
    "item": "guava nectar",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "lemon juice",
    "type": "Juice",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "lime juice",
    "type": "Juice",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "mango nectar",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "orange juice",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "papaya nectar",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "peach nectar",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "pineapple juice",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "pomegranate juice",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "prune juice",
    "type": "Juice",
    "expiry_start": 540,
    "expiry_end": 730
  },
  {
    "item": "tamarind nectar",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "tangerine juice",
    "type": "Juice",
    "expiry_start": 365,
    "expiry_end": 540
  }
]
module.exports = {
  typeOfTypes:typeOfTypes,
  itemTypeMap: itemTypeMap,
  typeMap: typeMap
}
