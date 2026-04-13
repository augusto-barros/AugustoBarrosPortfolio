export const workDetails = {
  appcaloria: {
    title: 'appcaloria',
    liveSiteUrl: 'https://apps.apple.com/br/app/appcaloria/id6756678606?l=en-GB',
    heroImage: '/photo/work/appcaloria/hero.png',
    roleServices: 'Software Development',
    credits: [
      { label: 'Design', name: 'Augusto Barros and Fill Braga' },
      { label: 'Development', name: 'Augusto Barros' },
    ],
    location: 'Brasil',
    year: '2026',
    quote:
      'appcaloria makes tracking your nutrition effortless, turning everyday choices into meaningful progress.',
    description:
      'appcaloria is a completely new way to track your nutrition. No friction, no spreadsheets, no complications. You simply write what you ate, just like you would in the Notes app, and artificial intelligence takes care of the rest.\n\nCalories, macros, and daily totals are calculated automatically, in seconds.\n\nThe easiest way to describe it is: “What if Apple Notes were a nutrition app?”',

    galleryImages: [
      [
        { label: 'How it works', src: '/photo/work/appcaloria/How.MP4' },
        { label: 'Barcode Scanner', src: '/photo/work/appcaloria/barcode.MP4' },
        { label: 'Meal Logging by Photo', src: '/photo/work/appcaloria/photo.MOV' },
        { label: 'Dark Mode', src: '/photo/work/appcaloria/darkmode.MP4' },
      ],
    ],
    extraGalleryImages: [
      [
        { label: 'Daily Stickers', src: '/photo/work/appcaloria/stickers.MP4' },
        { label: 'Multilanguage Support', src: '/photo/work/appcaloria/lang.MP4' },
        { label: 'Flexible Goals', src: '/photo/work/appcaloria/goals.MP4' },
        { label: 'Authentication', src: '/photo/work/appcaloria/auth.MP4' },
      ],
    ],
    howToUse: {
      title: "Features of appcaloria",
      steps: [
        {
          title: "Natural Language Logging",
          description: "Type exactly what you ate, just like a notes app. Example: '2 eggs + 1 sourdough toast'."
        },
        {
          title: "Smart Scanning",
          description: "Flash the barcode of any product to instantly track its nutritional value."
        },
        {
          title: "Photo Intelligence",
          description: "Take a picture of your plate, and our AI identifies everything on it for you."
        },
        {
          title: "Menu Scanner",
          description: "Scan the menu of any restaurant to instantly check the nutritional value of your meal."
        },
        {
          title: "Instant Calculations",
          description: "Calories, proteins, carbs, and fats are calculated automatically in real-time."
        },
        {
          title: "Smart History",
          description: "appcaloria analyzes your eating patterns over time and highlights trends, like days when you consume less protein."
        },
        {
          title: "Personalized Recommendations",
          description: "Based on your logs, it offers gentle suggestions to improve balance more fiber, hydration reminders, or macro adjustments."
        },
        {
          title: "Flexible Goals",
          description: "Set goals for weight loss, muscle gain, or maintenance, with the option to customize targets for specific days."
        },
        {
          title: "Activity Sync",
          description: "Connect with Apple Health so your daily calorie goal adjusts automatically according to your workouts."
        },
        {
          title: "Visual Reports",
          description: "View charts and weekly summaries that make nutrition insights easy to understand. Export PDF reports for easy sharing."
        },
        {
          title: "Daily Stickers",
          description: "Use stickers in your photos to share your progress with friends and family."
        },
        {
          title: "Widgets",
          description: "Instantly see your daily calories, macros, using widgets in your phone."
        }
      ]
    },
    architectureDescription:
      'appcaloria is built around accuracy, performance, and reliable data handling. Photo scanning uses image compression and processing in Cloud Functions, with a fallback model so recognition stays consistent even when the primary API fails. Nutritional calculations run as the user types: input debouncing, local caching by normalized food text, and optimistic UI updates keep the experience responsive under network latency.\n\nData stays consistent by treating Firestore as the source of truth and AsyncStorage as a local cache. Every write updates both; a background queue runs connectivity-dependent tasks—food analysis, image processing, barcode lookups—when the device is back online. Reports and charts rely on pre-aggregated summaries and short-lived caching to reduce repeated reads and keep navigation fast.\n\nThe architecture separates the UI, hooks, and domain services so business logic and integrations (Firestore, Cloud Functions, nutrition APIs, HealthKit, subscriptions) live in dedicated layers. Heavier work and usage limits live in the backend, keeping the client thin and the system easier to extend. The result is an app that feels fast, behaves well offline, keeps data in sync, and delivers precise nutritional insights without trading off usability.',
    techStack: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    ],
  },
  'pocket-reading': {
    title: 'Pocket Reading',
    heroImage: '/photo/work/pocket-reading/hero.jpg',
    roleServices: 'Creative, Copywriting, Campaign Concept',
    credits: [
      { label: 'Copywriter', name: 'Augusto Barros' },
      { label: 'Creative Director/Copywriter', name: 'Paulo Santos(PC)' },
      { label: 'Creative Director/Art Director', name: 'Julian Viela' },
    ],
    location: 'Brasil',
    year: '2016-2026',
    quote:
      'Pocket Reading delivers five-minute literary excerpts via WhatsApp to help Brazilians build a sustainable reading habit.',
    description:
      'Pocket Reading is an advertising concept built around micro-moments: the commute, the coffee line, the pause between meetings. The work treats reading not as a chore but as a reward—short, editorial-led pieces that feel premium in a feed full of noise.\n\nThe campaign pairs restrained art direction with voice-driven copy so each placement feels like a small magazine you actually want to open.\n\nThis case study documents the narrative system, key visuals, and how the idea scales across digital out-of-home, social, and partner placements.',
    caseSections: [
      {
        title: 'Challenge',
        body:
          'For the first time, most Brazilians (53%) are classified as non-readers. Books feel expensive, long, and hard to stick with. The habit never forms because the barrier to start is too high.',
      },
      {
        title: 'Approach',
        body:
          "The real obstacle wasn't motivation, it was friction. People weren't avoiding reading because they disliked it; they were overwhelmed before they started. Rather than building a new app that users would need to download and learn, the team chose to deliver content inside WhatsApp, already installed on 99% of Brazilian smartphones. Five minutes of text per day lowers the commitment to something manageable. The constraint of using only public domain books shaped the initial library, but kept the service free and accessible from day one.",
      },
    ],
    galleryImages: [],
    extraGalleryImages: [],
  },
};
