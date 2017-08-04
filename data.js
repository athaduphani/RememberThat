
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
    "name": "ANCHOVIES",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 540
  },
  {
    "name": "ARCTIC CHAR",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "BLUEFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CARP",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CATFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CAVIAR",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 365
  },
  {
    "name": "CLAM CHOWDER",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Clams",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "COD",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CRAB",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CRAB MEAT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CRAYFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CREAM OF SHRIMP SOUP",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "ESCARGOTS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 365
  },
  {
    "name": "FISH CHOWDER",
    "type": "Seafood",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "FISH STOCK OR BROTH",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "FLOUNDER",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "FROG LEGS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "GEFILTE FISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 1460
  },
  {
    "name": "GROUPER",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "HADDOCK",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "HALIBUT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "IMITATION CRAB MEAT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 14
  },
  {
    "name": "LOBSTER",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "LOBSTER TAILS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "LOX",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "LOX PACKAGE",
    "type": "Seafood",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "MACKEREL",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "MAHI-MAHI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "MONKFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "MULLET",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "MUSSELS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "OCTOPUS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "ORANGE ROUGHY",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "OYSTERS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "PERCH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "POLLOCK",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "ROCKFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SABLE",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "BLACK COD",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "SALMON",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SALMON ROE",
    "type": "Seafood",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "SALT COD",
    "type": "Seafood",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "SARDINES",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "SCALLOPS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SEA BASS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SEA TROUT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SEAFOOD BISQUE",
    "type": "Seafood",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "SHARK STEAK",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SHRIMP",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SKATE",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SMELTS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SMOKED HERRING FILLETS",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "SMOKED OYSTERS",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "SMOKED SALMON",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "CALAMARI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SOLE",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SQUID",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CALAMARI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "STRIPED BASS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "STURGEON",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "SUSHI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SWORDFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "TILAPIA",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "TROUT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SMOKED TROUT",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "TUNA",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "TUNA CANNED",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "TURBOT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "WHITEFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "SMOKED WHITEFISH",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "name": "APPLES",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "name": "APRICOTS",
    "type": "Fruits",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "name": "AVOCADOS",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "BANANAS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "BLACKBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "BLUEBERRIES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "BOYSENBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "CANTALOUPE",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "CASABA MELONS",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "name": "CHERIMOYA",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CHERRIES",
    "type": "Fruits",
    "expiry_start": 4,
    "expiry_end": 7
  },
  {
    "name": "CLEMENTINES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "CRANBERRIES",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "CRENSHAW MELONS",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "name": "CURRANTS",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "DATES",
    "type": "Fruits",
    "expiry_start": "",
    "expiry_end": 365
  },
  {
    "name": "ELDERBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "FEIJOA",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "FIGS",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "FRUIT COCKTAIL",
    "type": "Fruits",
    "expiry_start": 540,
    "expiry_end": 730
  },
  {
    "name": "FRUIT SALAD",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "GOOSEBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "GRAPEFRUIT",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "GRAPES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "GUAVA",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "name": "HONEYDEW MELONS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "HUCKLEBERRIES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "KIWI FRUIT",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "KUMQUATS",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "LEMONS",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "LIMES",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "LITCHIS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "LOOSE OLIVES",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "name": "MANGOS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "NECTARINES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "ORANGES",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "PAPAYA NECTAR",
    "type": "Fruits",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "name": "PAPAYAS",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "PASSION FRUIT",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "PEACHES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "PEAR NECTAR",
    "type": "Fruits",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "name": "PEARS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "PERSIMMONS",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "PINEAPPLES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "PLANTAINS",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "PLUMS",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "POMEGRANATES",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "name": "PRICKLY PEARS",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 3
  },
  {
    "name": "QUINCES",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "RAISINS",
    "type": "Fruits",
    "expiry_start": 180,
    "expiry_end": 365
  },
  {
    "name": "RASPBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "SAPOTE",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "STAR FRUIT",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "STRAWBERRIES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 7
  },
  {
    "name": "TAMARIND PASTE",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "TANGERINES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "UGLI FRUIT",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "WATERMELON",
    "type": "Fruits",
    "expiry_start": "",
    "expiry_end": 14
  },
  {
    "name": "ALFALFA SPROUTS",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "ANCHO PEPPERS",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "ARTICHOKES",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Canned ARTICHOKES",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "ARUGULA",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "ASPARAGUS",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Canned ASPARAGUS",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "BABY CARROTS",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "BAMBOO SHOOTS",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Canned BAMBOO SHOOTS",
    "type": "Vegetables",
    "expiry_start": 1825,
    "expiry_end": 2555
  },
  {
    "name": "BANANA PEPPERS",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "BEANS",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Canned Beans",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "BEET GREENS",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "BEETS",
    "type": "Vegetables",
    "expiry_start": 12,
    "expiry_end": 14
  },
  {
    "name": "Canned Beets",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "BELGIAN ENDIVE",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "name": "Bell Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Green Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Yellow Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Red Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "BITTER MELON",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 7
  },
  {
    "name": "BLACK-EYED PEAS",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "BOK CHOY",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "name": "BROAD BEANS",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "BROCCOLI",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "BROCCOLI RAAB",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "BRUSSELS SPROUTS",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "GOBO ROOT",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "BURDOCK ROOT",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "CABBAGE",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "CARDOON",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CARROT JUICE",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 7
  },
  {
    "name": "CARROTS",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "Canned Carrots",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "CASSAVA",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "YUCCA",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "MANIOC",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "CAULIFLOWER",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "CELERY ROOT",
    "type": "Vegetables",
    "expiry_start": 10,
    "expiry_end": 14
  },
  {
    "name": "CELERY",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Chayote",
    "type": "Vegetables",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "Chickpeas",
    "type": "Vegetables",
    "expiry_start": 0,
    "expiry_end": 2
  },
  {
    "name": "Chichory Green",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Canned Chilli Peppers",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Coleslaw",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "collards",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "name": "Frozen Corn",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 360
  },
  {
    "name": "Corn Cob",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 3
  },
  {
    "name": "Cranberry Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "name": "Asparagus Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Broccoli Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Celery Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Mushroom Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Onion Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Potato Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Cucumber",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 7
  },
  {
    "name": "Dandelion Greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Dried Vegetables",
    "type": "Vegetables",
    "expiry_start": 180,
    "expiry_end": 365
  },
  {
    "name": "Eggplant",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Escarole",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Edamame",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "Fennel",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "name": "Fiddlehead Ferns",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "French Onion Soup",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Frisee Greens",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Garlic",
    "type": "Vegetables",
    "expiry_start": 90,
    "expiry_end": 150
  },
  {
    "name": "Canned Garlic",
    "type": "Vegetables",
    "expiry_start": 365,
    "expiry_end": 730
  },
  {
    "name": "Ginger",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "Grape Leaves",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Scallions",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "name": "Guero peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "habanero peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "HEARTS OF PALM",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "HASH BROWNS",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "Horseradish",
    "type": "Vegetables",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "name": "Jalapeno peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Canned Jalapeno peppers",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Sunchokes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Jicama",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Kale",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Kohlrabi",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "name": "Leeks",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Lettuce",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "name": "Lettuce Leaf",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Lima Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Mesclun Greens",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "MINESTRONE SOUP",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Mixed Vegetables",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Mung Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Canned Mushrooms",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "Mushrooms",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Mustard Greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Nopales",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Okra",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Onion Rings",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "Canned onions",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Onions",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Parsnips",
    "type": "Vegetables",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "name": "Green Peas",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Canned Carrots",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Frozen Peas",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "name": "Picked Peppers",
    "type": "Vegetables",
    "expiry_start": 365,
    "expiry_end": 730
  },
  {
    "name": "Potatoes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Pumpkin",
    "type": "Vegetables",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "name": "Canned Pumpkin",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Radicchio",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Radishes",
    "type": "Vegetables",
    "expiry_start": 10,
    "expiry_end": 14
  },
  {
    "name": "Rutabages",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "Rhubarb",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Salsify",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "SAUERKRAUT",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Seaweed",
    "type": "Vegetables",
    "expiry_start": 60,
    "expiry_end": 240
  },
  {
    "name": "Serano Peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Shallots",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Sorrel",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Soybeans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Spinach",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Spinch bag",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "name": "Squash",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Canned Squash",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Sweet Potatoes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "name": "Swiss Chard",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Taro",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Tomatillos",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "Tomato Bisque",
    "type": "Vegetables",
    "expiry_start": 360,
    "expiry_end": 540
  },
  {
    "name": "Tomato paste",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1095
  },
  {
    "name": "Tomatoes",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "name": "Sun Dried Tomatoes",
    "type": "Vegetables",
    "expiry_start": 240,
    "expiry_end": 270
  },
  {
    "name": "Truffles",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 14
  },
  {
    "name": "Canned Truffles",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "name": "Trunip Greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Trunips",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "name": "Vegetable Broth",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Vegetable Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Yardlong Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Canned Yams",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Yams",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Watercress",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "name": "Canned Water Chestnuts",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Water Chestnuts",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "Veggie Burgers",
    "type": "Vegetables",
    "expiry_start": 130,
    "expiry_end": 180
  },
  {
    "name": "Abruzzese sausage",
    "type": "Meat",
    "expiry_start": 182,
    "expiry_end": 182
  },
  {
    "name": "Bacon bits",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "name": "Bacon",
    "type": "Meat",
    "expiry_start": 7,
    "expiry_end": 7
  },
  {
    "name": "Beef brisket",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Beef broth",
    "type": "Meat",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Beef burgers",
    "type": "Meat",
    "expiry_start": 182,
    "expiry_end": 182
  },
  {
    "name": "Beef heart",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Beef Jerky",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "name": "Beef Kidneys",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Beef liver",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Beef ribs",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Frozen Beef roast",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "name": "Beef roast",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Beef soup",
    "type": "Meat",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "Beef steak",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Beef tougue",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Ground beef",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Beef stew meat",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "Bison chops",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Bison roast",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Bison steak",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "Ground bison",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "name": "AMERICAN CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "name": "APPENZELLER CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "ASIAGO CHEESE",
    "type": "Dairy",
    "expiry_start": 525,
    "expiry_end": 365
  },
  {
    "name": "BEAUFORT CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "BEL PAESE CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "BLUE CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "name": "BOURSAULT CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "BRICK CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "name": "BRIE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "BUTTER",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "name": "BUTTERMILK",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "name": "CAMEMBERT CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "CHEDDAR CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "CHEESE SOUP",
    "type": "Dairy",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "name": "CHESHIRE CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "CHOCOLATE MILK / FLAVORED MILK",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "COLBY CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "COTTAGE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "CREAM CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "name": "CREAM, FLUID",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "name": "CREME FRAICHE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "name": "DERBY CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "DESSERT TOPPING MIX",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 365
  },
  {
    "name": "CREAM CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 15
  },
  {
    "name": "DUBLINER CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "EDAM CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "EGG SUBSTITUTES",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 95
  },
  {
    "name": "EGGNOG",
    "type": "Dairy",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "EMMENTAL CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "FARMER CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "FETA CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "FONTINA CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "GLOUCESTER CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "GOAT CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "GORGONZOLA CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "name": "GOUDA CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "GRUYERE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "HALF-AND-HALF",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "name": "HAVARTI CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "HEAVY CREAM",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "JARLSBERG CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "LANCASHIRE CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "name": "LIGHT CREAM",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "name": "LIMBURGER CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "MASCARPONE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 65
  },
  {
    "name": "MILK",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "name": "MONTEREY JACK CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "MOZZARELLA CHEESE",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "name": "MUENSTER CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "NEUFCHATEL CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 15
  },
  {
    "name": "NON-DAIRY COFFEE CREAMER",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "PARMESAN CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "PARMIGIANO-REGGIANO CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 365
  },
  {
    "name": "PASTEURIZED PROCESSED CHEESE",
    "type": "Dairy",
    "expiry_start": 175,
    "expiry_end": 210
  },
  {
    "name": "PORT DU SALUT CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "POWDERED MILK",
    "type": "Dairy",
    "expiry_start": 365,
    "expiry_end": 630
  },
  {
    "name": "PROVOLONE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "RICOTTA CHEESE",
    "type": "Dairy",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "name": "ROMANO CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "ROQUEFORT CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "SOUR CREAM",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 14
  },
  {
    "name": "STILTON CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "name": "SWISS CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "name": "TILSITER CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "name": "WHIPPED CREAM",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "name": "YOGURT",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 21
  }
]
module.exports = {
  itemTypeMap: itemTypeMap,
  typeMap: typeMap
}
