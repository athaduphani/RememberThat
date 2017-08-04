
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
    "item": "ANCHOVIES",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 540
  },
  {
    "item": "ARCTIC CHAR",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "BLUEFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CARP",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CATFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CAVIAR",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 365
  },
  {
    "item": "CLAM CHOWDER",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Clams",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "COD",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CRAB",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CRAB MEAT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CRAYFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CREAM OF SHRIMP SOUP",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "ESCARGOTS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 365
  },
  {
    "item": "FISH CHOWDER",
    "type": "Seafood",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "FISH STOCK OR BROTH",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "FLOUNDER",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "FROG LEGS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "GEFILTE FISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 1460
  },
  {
    "item": "GROUPER",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "HADDOCK",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "HALIBUT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "IMITATION CRAB MEAT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 14
  },
  {
    "item": "LOBSTER",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "LOBSTER TAILS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "LOX",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "LOX PACKAGE",
    "type": "Seafood",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "MACKEREL",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "MAHI-MAHI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "MONKFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "MULLET",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "MUSSELS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "OCTOPUS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "ORANGE ROUGHY",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "OYSTERS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "PERCH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "POLLOCK",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "ROCKFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SABLE",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "BLACK COD",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "SALMON",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SALMON ROE",
    "type": "Seafood",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "SALT COD",
    "type": "Seafood",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "SARDINES",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "SCALLOPS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SEA BASS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SEA TROUT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SEAFOOD BISQUE",
    "type": "Seafood",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "SHARK STEAK",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SHRIMP",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SKATE",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SMELTS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SMOKED HERRING FILLETS",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "SMOKED OYSTERS",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "SMOKED SALMON",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "CALAMARI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SOLE",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SQUID",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CALAMARI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "STRIPED BASS",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "STURGEON",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "SUSHI",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SWORDFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "TILAPIA",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "TROUT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SMOKED TROUT",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "TUNA",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "TUNA CANNED",
    "type": "Seafood",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "TURBOT",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "WHITEFISH",
    "type": "Seafood",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "SMOKED WHITEFISH",
    "type": "Seafood",
    "expiry_start": 5,
    "expiry_end": 8
  },
  {
    "item": "APPLES",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "APRICOTS",
    "type": "Fruits",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "AVOCADOS",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "BANANAS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "BLACKBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "BLUEBERRIES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "BOYSENBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "CANTALOUPE",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "CASABA MELONS",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "CHERIMOYA",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CHERRIES",
    "type": "Fruits",
    "expiry_start": 4,
    "expiry_end": 7
  },
  {
    "item": "CLEMENTINES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "CRANBERRIES",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "CRENSHAW MELONS",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "CURRANTS",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "DATES",
    "type": "Fruits",
    "expiry_start": "",
    "expiry_end": 365
  },
  {
    "item": "ELDERBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "FEIJOA",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "FIGS",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "FRUIT COCKTAIL",
    "type": "Fruits",
    "expiry_start": 540,
    "expiry_end": 730
  },
  {
    "item": "FRUIT SALAD",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "GOOSEBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "GRAPEFRUIT",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "GRAPES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "GUAVA",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "HONEYDEW MELONS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "HUCKLEBERRIES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "KIWI FRUIT",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "KUMQUATS",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "LEMONS",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "LIMES",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "LITCHIS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "LOOSE OLIVES",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "MANGOS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "NECTARINES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "ORANGES",
    "type": "Fruits",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "PAPAYA NECTAR",
    "type": "Fruits",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "PAPAYAS",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "PASSION FRUIT",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "PEACHES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "PEAR NECTAR",
    "type": "Fruits",
    "expiry_start": 365,
    "expiry_end": 540
  },
  {
    "item": "PEARS",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "PERSIMMONS",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "PINEAPPLES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "PLANTAINS",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "PLUMS",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "POMEGRANATES",
    "type": "Fruits",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "PRICKLY PEARS",
    "type": "Fruits",
    "expiry_start": 1,
    "expiry_end": 3
  },
  {
    "item": "QUINCES",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "RAISINS",
    "type": "Fruits",
    "expiry_start": 180,
    "expiry_end": 365
  },
  {
    "item": "RASPBERRIES",
    "type": "Fruits",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "SAPOTE",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "STAR FRUIT",
    "type": "Fruits",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "STRAWBERRIES",
    "type": "Fruits",
    "expiry_start": 3,
    "expiry_end": 7
  },
  {
    "item": "TAMARIND PASTE",
    "type": "Fruits",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "TANGERINES",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "UGLI FRUIT",
    "type": "Fruits",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "WATERMELON",
    "type": "Fruits",
    "expiry_start": "",
    "expiry_end": 14
  },
  {
    "item": "ALFALFA SPROUTS",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "ANCHO PEPPERS",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "ARTICHOKES",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Canned ARTICHOKES",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "ARUGULA",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "ASPARAGUS",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Canned ASPARAGUS",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "BABY CARROTS",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "BAMBOO SHOOTS",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Canned BAMBOO SHOOTS",
    "type": "Vegetables",
    "expiry_start": 1825,
    "expiry_end": 2555
  },
  {
    "item": "BANANA PEPPERS",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "BEANS",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Canned Beans",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "BEET GREENS",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "BEETS",
    "type": "Vegetables",
    "expiry_start": 12,
    "expiry_end": 14
  },
  {
    "item": "Canned Beets",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "BELGIAN ENDIVE",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "Bell Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Green Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Yellow Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Red Peppers",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "BITTER MELON",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 7
  },
  {
    "item": "BLACK-EYED PEAS",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "BOK CHOY",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "BROAD BEANS",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "BROCCOLI",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "BROCCOLI RAAB",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "BRUSSELS SPROUTS",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "GOBO ROOT",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "BURDOCK ROOT",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "CABBAGE",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "CARDOON",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CARROT JUICE",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 7
  },
  {
    "item": "CARROTS",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "Canned Carrots",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "CASSAVA",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "YUCCA",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "MANIOC",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "CAULIFLOWER",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "CELERY ROOT",
    "type": "Vegetables",
    "expiry_start": 10,
    "expiry_end": 14
  },
  {
    "item": "CELERY",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Chayote",
    "type": "Vegetables",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "Chickpeas",
    "type": "Vegetables",
    "expiry_start": 0,
    "expiry_end": 2
  },
  {
    "item": "Chichory Green",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Canned Chilli Peppers",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Coleslaw",
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
    "item": "Frozen Corn",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 360
  },
  {
    "item": "Corn Cob",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 3
  },
  {
    "item": "Cranberry Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "Asparagus Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Broccoli Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Celery Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Mushroom Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Onion Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Potato Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Cucumber",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 7
  },
  {
    "item": "Dandelion Greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Dried Vegetables",
    "type": "Vegetables",
    "expiry_start": 180,
    "expiry_end": 365
  },
  {
    "item": "Eggplant",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Escarole",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Edamame",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "Fennel",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "Fiddlehead Ferns",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "French Onion Soup",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Frisee Greens",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Garlic",
    "type": "Vegetables",
    "expiry_start": 90,
    "expiry_end": 150
  },
  {
    "item": "Canned Garlic",
    "type": "Vegetables",
    "expiry_start": 365,
    "expiry_end": 730
  },
  {
    "item": "Ginger",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "Grape Leaves",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Scallions",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "Guero peppers",
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
    "item": "HEARTS OF PALM",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "HASH BROWNS",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "Horseradish",
    "type": "Vegetables",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "Jalapeno peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Canned Jalapeno peppers",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Sunchokes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Jicama",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Kale",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Kohlrabi",
    "type": "Vegetables",
    "expiry_start": 4,
    "expiry_end": 5
  },
  {
    "item": "Leeks",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Lettuce",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "Lettuce Leaf",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Lima Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Mesclun Greens",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "MINESTRONE SOUP",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Mixed Vegetables",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Mung Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Canned Mushrooms",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "Mushrooms",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Mustard Greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Nopales",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Okra",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Onion Rings",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "Canned onions",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Onions",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Parsnips",
    "type": "Vegetables",
    "expiry_start": 21,
    "expiry_end": 28
  },
  {
    "item": "Green Peas",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Canned Carrots",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Frozen Peas",
    "type": "Vegetables",
    "expiry_start": 300,
    "expiry_end": 365
  },
  {
    "item": "Picked Peppers",
    "type": "Vegetables",
    "expiry_start": 365,
    "expiry_end": 730
  },
  {
    "item": "Potatoes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Pumpkin",
    "type": "Vegetables",
    "expiry_start": 30,
    "expiry_end": 60
  },
  {
    "item": "Canned Pumpkin",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Radicchio",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Radishes",
    "type": "Vegetables",
    "expiry_start": 10,
    "expiry_end": 14
  },
  {
    "item": "Rutabages",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "Rhubarb",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Salsify",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "SAUERKRAUT",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Seaweed",
    "type": "Vegetables",
    "expiry_start": 60,
    "expiry_end": 240
  },
  {
    "item": "Serano Peppers",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Shallots",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Sorrel",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Soybeans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Spinach",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Spinch bag",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 10
  },
  {
    "item": "Squash",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Canned Squash",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Sweet Potatoes",
    "type": "Vegetables",
    "expiry_start": 7,
    "expiry_end": 14
  },
  {
    "item": "Swiss Chard",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Taro",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Tomatillos",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "Tomato Bisque",
    "type": "Vegetables",
    "expiry_start": 360,
    "expiry_end": 540
  },
  {
    "item": "Tomato paste",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1095
  },
  {
    "item": "Tomatoes",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 4
  },
  {
    "item": "Sun Dried Tomatoes",
    "type": "Vegetables",
    "expiry_start": 240,
    "expiry_end": 270
  },
  {
    "item": "Truffles",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 14
  },
  {
    "item": "Canned Truffles",
    "type": "Vegetables",
    "expiry_start": 730,
    "expiry_end": 1825
  },
  {
    "item": "Trunip Greens",
    "type": "Vegetables",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Trunips",
    "type": "Vegetables",
    "expiry_start": 14,
    "expiry_end": 21
  },
  {
    "item": "Vegetable Broth",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Vegetable Soup",
    "type": "Soups",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Yardlong Beans",
    "type": "Vegetables",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Canned Yams",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Yams",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Watercress",
    "type": "Vegetables",
    "expiry_start": 2,
    "expiry_end": 3
  },
  {
    "item": "Canned Water Chestnuts",
    "type": "Vegetables",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Water Chestnuts",
    "type": "Vegetables",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "Veggie Burgers",
    "type": "Vegetables",
    "expiry_start": 130,
    "expiry_end": 180
  },
  {
    "item": "Abruzzese sausage",
    "type": "Meat",
    "expiry_start": 182,
    "expiry_end": 182
  },
  {
    "item": "Bacon bits",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "item": "Bacon",
    "type": "Meat",
    "expiry_start": 7,
    "expiry_end": 7
  },
  {
    "item": "Beef brisket",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Beef broth",
    "type": "Meat",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Beef burgers",
    "type": "Meat",
    "expiry_start": 182,
    "expiry_end": 182
  },
  {
    "item": "Beef heart",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Beef Jerky",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "item": "Beef Kidneys",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Beef liver",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Beef ribs",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Frozen Beef roast",
    "type": "Meat",
    "expiry_start": 365,
    "expiry_end": 365
  },
  {
    "item": "Beef roast",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Beef soup",
    "type": "Meat",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "Beef steak",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Beef tougue",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Ground beef",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Beef stew meat",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "Bison chops",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Bison roast",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Bison steak",
    "type": "Meat",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "Ground bison",
    "type": "Meat",
    "expiry_start": 1,
    "expiry_end": 2
  },
  {
    "item": "AMERICAN CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "APPENZELLER CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "ASIAGO CHEESE",
    "type": "Dairy",
    "expiry_start": 525,
    "expiry_end": 365
  },
  {
    "item": "BEAUFORT CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "BEL PAESE CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "BLUE CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "BOURSAULT CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "BRICK CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "BRIE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "BUTTER",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "BUTTERMILK",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "CAMEMBERT CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "CHEDDAR CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "CHEESE SOUP",
    "type": "Dairy",
    "expiry_start": 1095,
    "expiry_end": 1825
  },
  {
    "item": "CHESHIRE CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "CHOCOLATE MILK / FLAVORED MILK",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "COLBY CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "COTTAGE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "CREAM CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "CREAM, FLUID",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "CREME FRAICHE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 35
  },
  {
    "item": "DERBY CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "DESSERT TOPPING MIX",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 365
  },
  {
    "item": "CREAM CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 15
  },
  {
    "item": "DUBLINER CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "EDAM CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "EGG SUBSTITUTES",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 95
  },
  {
    "item": "EGGNOG",
    "type": "Dairy",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "EMMENTAL CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "FARMER CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "FETA CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "FONTINA CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "GLOUCESTER CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "GOAT CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "GORGONZOLA CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "GOUDA CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "GRUYERE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "HALF-AND-HALF",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "HAVARTI CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "HEAVY CREAM",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "JARLSBERG CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "LANCASHIRE CHEESE",
    "type": "Dairy",
    "expiry_start": 35,
    "expiry_end": 65
  },
  {
    "item": "LIGHT CREAM",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "LIMBURGER CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "MASCARPONE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 65
  },
  {
    "item": "MILK",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "MONTEREY JACK CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "MOZZARELLA CHEESE",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "MUENSTER CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "NEUFCHATEL CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 15
  },
  {
    "item": "NON-DAIRY COFFEE CREAMER",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "PARMESAN CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "PARMIGIANO-REGGIANO CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 365
  },
  {
    "item": "PASTEURIZED PROCESSED CHEESE",
    "type": "Dairy",
    "expiry_start": 175,
    "expiry_end": 210
  },
  {
    "item": "PORT DU SALUT CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "POWDERED MILK",
    "type": "Dairy",
    "expiry_start": 365,
    "expiry_end": 630
  },
  {
    "item": "PROVOLONE CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "RICOTTA CHEESE",
    "type": "Dairy",
    "expiry_start": 3,
    "expiry_end": 5
  },
  {
    "item": "ROMANO CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "ROQUEFORT CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "SOUR CREAM",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 14
  },
  {
    "item": "STILTON CHEESE",
    "type": "Dairy",
    "expiry_start": 21,
    "expiry_end": 35
  },
  {
    "item": "SWISS CHEESE",
    "type": "Dairy",
    "expiry_start": 5,
    "expiry_end": 7
  },
  {
    "item": "TILSITER CHEESE",
    "type": "Dairy",
    "expiry_start": 15,
    "expiry_end": 21
  },
  {
    "item": "WHIPPED CREAM",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 15
  },
  {
    "item": "YOGURT",
    "type": "Dairy",
    "expiry_start": 7,
    "expiry_end": 21
  }
]
module.exports = {
  itemTypeMap: itemTypeMap,
  typeMap: typeMap
}
