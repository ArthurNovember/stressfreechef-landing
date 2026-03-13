export type Language = "cs" | "en";

export type IconName =
  | "mic"
  | "sparkles"
  | "list"
  | "community"
  | "save"
  | "lang";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  desc: string;
  icon: IconName;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ScreenItem = {
  title: string;
  img: string;
};

export type LandingDictionary = {
  nav: NavItem[];
  heroTitle: {
    before: string;
    accent: string;
    after: string;
  };
  heroSub: string;
  heroVoiceText: string;
  featuresTitle: string;
  screensTitle: string;
  mobileAppTitle: string;
  webTitle: string;
  faqTitle: string;
  webButton: string;
  mobileButton: string;
  prevMobileAria: string;
  nextMobileAria: string;
  prevWebAria: string;
  nextWebAria: string;
  features: Feature[];
  faq: FaqItem[];
  mobileScreens: ScreenItem[];
  webScreens: ScreenItem[];
};

export const landingTranslations: Record<Language, LandingDictionary> = {
  cs: {
    nav: [
      { label: "Funkce", href: "#features" },
      { label: "Ukázky", href: "#screens" },
      { label: "Nejčastější otázky", href: "#faq" },
    ],

    heroTitle: {
      before: "Vaření bez ",
      accent: "stresu",
      after: ". Krok za krokem.",
    },

    heroSub: "Vše pro vaření na jednom místě.",
    heroVoiceText: "Přepínání mezi kroky a ovládání časovače hlasem",

    featuresTitle: "Funkce",
    screensTitle: "Ukázky",
    mobileAppTitle: "Mobilní aplikace",
    webTitle: "Web",
    faqTitle: "Nejčastější otázky",

    webButton: "Web",
    mobileButton: "Mobilní aplikace",

    prevMobileAria: "Předchozí mobilní ukázky",
    nextMobileAria: "Další mobilní ukázky",
    prevWebAria: "Předchozí webové ukázky",
    nextWebAria: "Další webové ukázky",

    features: [
      {
        title: "Hands-Free Cooking",
        desc: "Hlasové příkazy pro přecházení mezi kroky a ovládání časovače.",
        icon: "mic",
      },
      {
        title: "AI",
        desc: "Při vytváření vlastních receptů je možné zapnout AI režim, kde dostane uživatel takzvaný prompt, který pošle umělé inteligenci mimo aplikaci a přiloží k němu recept. Odpověď vloží zpět do aplikace a recept je automaticky rozložen na části, se kterými umí pracovat.",
        icon: "sparkles",
      },
      {
        title: "Nákupní seznam",
        desc: "Ingredience je možné přímo u receptu poslat do nákupního seznamu. U každé položky je možné si nastavit, v jakém obchodě budete tento produkt kupovat, a pak dle daného obchodu filtrovat.",
        icon: "list",
      },
      {
        title: "Komunitní recepty",
        desc: "Procházej komunitní výtvory, ukládej recepty a nech se inspirovat pomocí klasického mřížkového zobrazení nebo swipovacího režimu.",
        icon: "community",
      },
      {
        title: "Uložit & Přidat do oblíbených",
        desc: "Ukládej si recepty a oblíbené položky.",
        icon: "save",
      },
      {
        title: "Přizpůsobení",
        desc: "Možnost přepínání jazyka mezi češtinou a angličtinou a barevného schématu mezi světlým a tmavým režimem.",
        icon: "lang",
      },
    ],

    faq: [
      {
        q: "Jak funguje hands-free ovládání?",
        a: "Pokud si zapnete funkci v nastavení, můžete ovládat recept pomocí hlasových příkazů, momentálně pouze v angličtině. (Next / Previous / Start timer / Pause timer / Timer).",
      },
      {
        q: "Musím se registrovat?",
        a: "Bez registrace má uživatel omezené funkce. Registrace přináší možnost ukládat si recepty, tvořit nové, ukládat nákupní seznam napříč zařízeními a přidávat si položky z nákupního seznamu do oblíbených.",
      },
      {
        q: "Jsou některé funkce dostupné pouze v mobilní aplikaci?",
        a: "Ano, některé funkce jsou aktuálně dostupné pouze v mobilní aplikaci. Konkrétně: swipe režim, hlasové ovládání a přizpůsobení (přepínání jazyka a barevného schématu).",
      },
    ],

    mobileScreens: [
      { title: "Home", img: "/images/Home-mobile-cz.jpg" },
      { title: "Nastavení", img: "/images/Settings-mobile-cz.jpg" },
      {
        title: "Komunitní recepty (MŘÍŽKA)",
        img: "/images/Explore-mobile-grid-cz.jpg",
      },
      {
        title: "Komunitní recepty (SWIPE)",
        img: "/images/Explore-mobile-swipe-cz.jpg",
      },
      { title: "Recept", img: "/images/Recipe-mobile-cz.jpg" },
      { title: "Přidat recept", img: "/images/AddRecipe-mobile-cz.jpg" },
      { title: "Nákupní seznam", img: "/images/ShoppingList-mobile-cz.jpg" },
      { title: "Oblíbené položky", img: "/images/FavoriteItems-mobile-cz.jpg" },
      { title: "Můj profil", img: "/images/myProfile-mobile-cz.jpg" },
    ],

    webScreens: [
      { title: "Home", img: "/images/Home-web.png" },
      { title: "Komunitní recepty", img: "/images/Explore-web.png" },
      { title: "Recept", img: "/images/Recipe-web.png" },
      { title: "Přidat recept", img: "/images/AddRecipe-web.png" },
      { title: "Nákupní seznam", img: "/images/ShoppingList-web.png" },
      { title: "Oblíbené položky", img: "/images/FavoriteItems-web.png" },
      { title: "Můj profil", img: "/images/MyProfile-web.png" },
    ],
  },

  en: {
    nav: [
      { label: "Features", href: "#features" },
      { label: "Screens", href: "#screens" },
      { label: "FAQ", href: "#faq" },
    ],

    heroTitle: {
      before: "Cooking without ",
      accent: "stress",
      after: ". Step by step.",
    },

    heroSub: "Everything for cooking in one place.",
    heroVoiceText: "Switch between steps and control the timer with voice",
    featuresTitle: "Features",
    screensTitle: "Screens",
    mobileAppTitle: "Mobile app",
    webTitle: "Web",
    faqTitle: "FAQ",

    webButton: "Web",
    mobileButton: "Mobile app",

    prevMobileAria: "Previous mobile screens",
    nextMobileAria: "Next mobile screens",
    prevWebAria: "Previous web screens",
    nextWebAria: "Next web screens",

    features: [
      {
        title: "Hands-Free Cooking",
        desc: "Voice commands for moving between steps and controlling the timer.",
        icon: "mic",
      },
      {
        title: "AI",
        desc: "When creating your own recipes, you can enable AI mode. The app gives the user a prompt to send to an external AI together with the recipe. The response is then pasted back into the app, and the recipe is automatically split into parts the app can work with.",
        icon: "sparkles",
      },
      {
        title: "Shopping List",
        desc: "Ingredients can be sent directly from a recipe to the shopping list. For each item, you can choose the store where you want to buy it and then filter by store.",
        icon: "list",
      },
      {
        title: "Community Recipes",
        desc: "Browse community creations, save recipes, and get inspired using either a classic grid view or a swipe mode.",
        icon: "community",
      },
      {
        title: "Save & Add to Favorites",
        desc: "Save recipes and favorite items.",
        icon: "save",
      },
      {
        title: "Customization",
        desc: "Switch between Czech and English and between light and dark mode.",
        icon: "lang",
      },
    ],

    faq: [
      {
        q: "How does hands-free control work?",
        a: "If you enable the feature in settings, you can control a recipe with voice commands, currently only in English. (Next / Previous / Start timer / Pause timer / Timer).",
      },
      {
        q: "Do I need to register?",
        a: "Without registration, the user has limited features. Registration lets you save recipes, create new ones, sync the shopping list across devices, and add shopping list items to favorites.",
      },
      {
        q: "Are some features only available in the mobile app?",
        a: "Yes, some features are currently only available in the mobile app. Specifically: swipe mode, voice control, and customization (language and color scheme switching).",
      },
    ],

    mobileScreens: [
      { title: "Home", img: "/images/Home-mobile-en.jpg" },
      { title: "Settings", img: "/images/Settings-mobile-en.jpg" },
      {
        title: "Community Recipes (GRID)",
        img: "/images/Explore-mobile-grid-en.jpg",
      },
      {
        title: "Community Recipes (SWIPE)",
        img: "/images/Explore-mobile-swipe-en.jpg",
      },
      { title: "Recipe", img: "/images/Recipe-mobile-en.jpg" },
      { title: "Add Recipe", img: "/images/AddRecipe-mobile-en.jpg" },
      { title: "Shopping List", img: "/images/ShoppingList-mobile-en.jpg" },
      { title: "Favorite Items", img: "/images/FavoriteItems-mobile-en.jpg" },
      { title: "My Profile", img: "/images/myProfile-mobile-en.jpg" },
    ],

    webScreens: [
      { title: "Home", img: "/images/Home-web.png" },
      { title: "Community Recipes", img: "/images/Explore-web.png" },
      { title: "Recipe", img: "/images/Recipe-web.png" },
      { title: "Add Recipe", img: "/images/AddRecipe-web.png" },
      { title: "Shopping List", img: "/images/ShoppingList-web.png" },
      { title: "Favorite Items", img: "/images/FavoriteItems-web.png" },
      { title: "My Profile", img: "/images/MyProfile-web.png" },
    ],
  },
};
