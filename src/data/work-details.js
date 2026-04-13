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
    liveSiteUrl: 'https://www.leituradebolso.com.br/',
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
      'Daily delivery creates rhythm. The system is built around repetition: same time, same format, same place. Because habit formation depends on consistency, not variety.',
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
    youtubeVideoId: 'Ma8ru3nt4Ac',
    galleryImages: [
      '/photo/work/pocket-reading/image1.avif',
      '/photo/work/pocket-reading/image2.avif',
      {
        type: 'pressQuotes',
        quotes: [
          {
            text:
              'Short texts that can be read on public transport, at red lights or in line at the bank.',
            source: 'g1.com',
          },
          {
            text:
              'This is a clever app that encourages entertainment and education.',
            source: 'Trendhunter',
          },
          {
            text:
              'Leitura de Bolso — or Pocket Reading — is a new initiative, which offers five minute reads for free via Whatsapp.',
            source: 'Springwise',
          },
        ],
      },
      '/photo/work/pocket-reading/image3.avif',
    ],
    extraGalleryImages: [],
  },
  'high-in': {
    title: 'High in (Alto em)',
    liveSiteUrl: '',
    roleServices: 'Creative, Copywriting, Campaign Concept',
    credits: [
      { label: 'Project', name: 'IDEC' },
      { label: 'Copywriter', name: 'Augusto Barros' },
      { label: 'Art Director', name: 'Renan Belmiro' },
    ],
    location: 'Brasil',
    year: '2022',
    quote:
      'Does Brazil read labels? No. Brazil scrolls the feed, sends voice messages and buys on feeling.',
    description:
      'When Brazil\'s health authority mandated warning seals on food packaging. High in sugar. High in sodium. High in saturated fat, they solved half the problem.\n\nThe other half was ours. Getting Brazil to want to look at that little black magnifying glass.',
    caseSections: [
      {
        title: 'Challenge',
        body:
          'A mandatory seal is not a campaign.\nA law is not a message.\nAnd a logo on the corner of a package is, for most people, invisible.\n\nThe real problem wasn\'t awareness. It was indifference.\nConsumers had spent decades surrounded by nutritional information and learned, very efficiently, to ignore it.\nThe food industry knew this.\nAnd was counting on it.\n\nHow do you make people care about something they\'ve trained themselves not to see?\nHow do you turn a regulatory update into a cultural moment?\nHow do you make public health policy feel urgent, relevant and, against all odds, shareable?',
      },
      {
        title: 'Approach',
        body:
          'We stopped thinking like a health campaign and started thinking like a creator.\nInstead of educating, we provoked. Instead of informing, we entertained. Instead of speaking at people, we handed them something worth passing along.\n\nThe tone wasn\'t institutional. It was human, sharp, a little irreverent, native to the internet.\nThe format followed the logic of the feed: carousels, stories, video, memes.\nThe strategy wasn\'t reach. It was resonance.\n\nWe translated regulation into culture. Technical language into everyday language. Obligation into relevance.',
      },
    ],
    galleryImages: [
      ['/photo/work/high-in/work1.webp', '/photo/work/high-in/work2.webp'],
      {
        type: 'fullViewportPair',
        images: [
          '/photo/work/high-in/work14.webp',
          '/photo/work/high-in/work15.webp',
        ],
      },
      {
        type: 'galleryMarquee',
        durationSec: 28,
        images: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
          n => `/photo/work/high-in/creatives-posts/work${n}.webp`,
        ),
      },
    ],
    resultsSection: {
      title: 'Results',
      body:
        '26 million unique people reached online.\n5.6 million complete video views.\n2.3 million clicks with a CTR of 1.95%.\n242K likes. 13.6K shares. 3.8K comments.\n8,157 leads via paid social. 1,796 via landing page.\nCost per click up to 92% lower than previous campaigns.\n\nThe campaign exceeded every performance and engagement benchmark.\nIt spilled beyond paid media into meme pages, influencer reposts and organic press coverage.\n\nThe seal was on the package.\nThe work got it into people\'s heads.',
    },
    resultsMarquee: {
      durationSec: 28,
      gapClassName: 'gap-0',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
        n => `/photo/work/high-in/results/r${n}.webp`,
      ),
    },
    extraGalleryImages: [],
  },
  'ambev-vaccine-box': {
    title: 'Ambev Vaccine Box',
    heroImage: '/photo/work/ambev/hero.webp',
    liveSiteUrl: '',
    roleServices: 'Creative, Copywriting, Campaign Concept',
    credits: [
      { label: 'Project', name: 'Ambev' },
      { label: 'Copywriter', name: 'Augusto Barros' },
      { label: 'Art Director', name: 'Raphael Almeita (PH)' },
    ],
    location: 'Brasil',
    year: '2021',
    quote:
      'The same boxes built for Carnival on the beach became cold chain for the country’s vaccine rollout.',
    description:
      'In this idea, I started from a clear social tension: Brazil’s health care system was overwhelmed by COVID 19 cases, while a company with enormous scale, logistics, and influence had the potential to make a real difference.\n\n The concept proposed that the world’s largest beer producer could go beyond its commercial role and actively help accelerate vaccination in Brazil.\n\nBy connecting brand power with public health impact, the idea turned a private player into part of the solution during a national emergency.',
    caseSections: [
      {
        title: 'Challenge',
        body:
          'In 2021, one of Brazil’s biggest vaccination challenges was not just access, but storage. Many COVID 19 vaccines depended on subzero temperatures, while countless locations across the country lacked the refrigeration needed to handle demand. In a fight against time, distribution depended on solving the cold chain first.',
      },
      {
        title: 'Approach',
        body:
          'The approach was to transform Ambev’s existing refrigeration structure into a public health solution. Refrigerators already produced for the brand’s beverage operation would be donated to the SUS to increase vaccine storage capacity in capitals and hard to reach areas.\n\nTo complete the system, coolers originally used during Carnival were repurposed to make vaccine transportation faster, safer, and more viable.',
      },
    ],
    youtubeVideoId: '0wbkkRLsFTM',
    youtubeVideoStartSec: 0,
    galleryImages: [
      [
        '/photo/work/ambev/media/media1.png',
        '/photo/work/ambev/media/media2.png',
      ],
      [
        '/photo/work/ambev/media/media4.png',
        '/photo/work/ambev/media/media5.png',
      ],
    ],
    extraGalleryImages: [],
  },
  'you-have-voice': {
    title: 'You Have Voice \n(Você Tem Voz)',
    heroImage: '/photo/work/voz/hero.webp',
    liveSiteUrl: '',
    youtubeEmbeds: [
      { id: 'ho-5QkzZBsU', label: 'Campaign video' },
      { id: '6JDaygqls3k', label: 'Music video' },
    ],
    linksAfterVideoTitle: '#vctemvoz — official campaign podcast',
    linksAfterVideo: [
      {
        embedSrc:
          'https://open.spotify.com/embed/show/1PsIfo7y3LePCiM3hMn1xb?utm_source=generator',
        embedTitle: '#vctemvoz — campaign podcast on Spotify',
        embedHeight: 152,
      },
      {
        href: 'https://open.spotify.com/show/1PsIfo7y3LePCiM3hMn1xb?si=d438715d66f045a9',
        label: 'Open show in Spotify',
      },
    ],
    roleServices:
      'Development of online and offline campaign materials. Original concept created by the senior creative team.',
    credits: [
      { label: 'Project', name: 'SECOM' },
      { label: 'Copywriter (supporting)', name: 'Augusto Barros' },
      { label: 'Art Director (supporting)', name: 'Lidia Pessoa' },
      { label: 'Original Concept and Copywriter', name: 'Thiago Diniz' },
      { label: 'Original Concept and Art Director', name: 'Gustavo (Dois)' },
    ],
    location: 'Brasil',
    year: '2019',
    quote:
      'When a woman suffers violence, she loses her voice.',
    description:
      'Scope on this project: development of online and offline campaign materials (adaptation, rollout, and production support), working from the original concept led by the senior creative team.\n\nFor the International Day for the Elimination of Violence against Women, the agency developed a campaign with Brazilian singers Simone and Simaria. The concept centered on removing the voice from a music video to turn silence into a message about violence against women.\n\nThe insight behind the campaign was clear: when a woman suffers violence, she loses her voice.',
    caseSections: [
      {
        title: 'Challenge',
        body:
          'For the International Day for the Elimination of Violence against Women, the challenge was to address the issue in a way that would make people feel it, not just see it. The campaign needed to turn awareness into emotional impact and create a strong enough reaction to start conversations both online and offline.',
      },
      {
        title: 'Approach',
        body:
          'Based on a concept created by the senior creative team, the campaign removed the voice from a music video produced with Brazilian singers Simone and Simaria. The idea came from a powerful insight: when a woman suffers violence, she loses her voice. By first releasing the clip without sound, the campaign created discomfort and curiosity. The full version with audio was launched afterward to explain the idea, bring visibility to the issue, and amplify the message through the hashtag #vctemvoz.',
      },
    ],
    galleryImages: [
      [
        { label: 'Key visual', src: '/photo/work/voz/voz1.webp' },
        { label: 'Concept', src: '/photo/work/voz/voz2.webp' },
      ],
      {
        type: 'containRow',
        images: [
          '/photo/work/voz/voz3.png',
          '/photo/work/voz/voz4.png',
          '/photo/work/voz/voz5.webp',
        ],
        maxWidthClass: 'max-w-[min(1280px,96vw)]',
        maxHeightClass: 'max-h-[min(68vh,720px)]',
        gapClassName: 'gap-8 md:gap-4',
        label: 'Titles',
      },
    ],
    extraGalleryImages: [],
  },
};
