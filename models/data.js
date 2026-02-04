// In-memory data storage (replace with database in production)
export let users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@jjblog.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    role: 'admin',
    avatar: '/images/logo.jpg',
    bio: 'Blog Administrator',
    createdAt: new Date()
  }
];

export let posts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-of-web-development-2024',
    content: `<p>Web development is evolving at an unprecedented pace, and 2024 promises to be a transformative year for developers worldwide. From artificial intelligence integration to revolutionary frameworks, the landscape is shifting in ways that will fundamentally change how we build and interact with web applications.</p>
    
    <h3>AI-Powered Development Tools</h3>
    <p>The integration of artificial intelligence in development workflows has moved beyond simple code completion. Modern AI tools are now capable of generating entire components, debugging complex issues, and even optimizing performance automatically. GitHub Copilot, ChatGPT, and similar tools are becoming indispensable companions for developers, reducing development time by up to 40% in some cases.</p>
    
    <h3>The Rise of Edge Computing</h3>
    <p>Edge computing is revolutionizing how we think about web performance. By processing data closer to users, applications can achieve lightning-fast response times and improved user experiences. Platforms like Vercel Edge Functions and Cloudflare Workers are making edge deployment accessible to developers of all skill levels.</p>
    
    <h3>WebAssembly Goes Mainstream</h3>
    <p>WebAssembly (WASM) is finally reaching mainstream adoption, enabling developers to run high-performance applications directly in browsers. From gaming engines to complex data processing tools, WASM is opening new possibilities for web applications that were previously impossible.</p>
    
    <h3>The Component-First Approach</h3>
    <p>Modern frameworks are embracing a component-first philosophy, making code more reusable and maintainable. React Server Components, Vue 3's Composition API, and Svelte's reactive approach are leading this charge, enabling developers to build more efficient and scalable applications.</p>
    
    <p>As we move forward, the key to success will be staying adaptable and continuously learning. The tools and technologies that define web development today may be completely different tomorrow, but the fundamental principles of creating great user experiences will remain constant.</p>`,
    excerpt: 'Explore the latest trends and technologies shaping web development in 2024, from AI tools to new frameworks.',
    author: 'admin',
    authorId: 1,
    category: 'Technology',
    tags: ['web-development', 'technology', 'trends', '2024'],
    featured: true,
    published: true,
    views: 245,
    likes: 18,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: 'Mastering JavaScript: Advanced Techniques Every Developer Should Know',
    slug: 'mastering-javascript-advanced-techniques',
    content: `<p>JavaScript has evolved from a simple scripting language to the backbone of modern web development. Understanding advanced JavaScript concepts is crucial for building robust, efficient, and maintainable applications.</p>
    
    <h3>Closures and Lexical Scoping</h3>
    <p>Closures are one of JavaScript's most powerful features, allowing functions to access variables from their outer scope even after the outer function has returned. This concept enables powerful patterns like module creation, data privacy, and functional programming techniques.</p>
    
    <pre><code>function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2</code></pre>
    
    <h3>Asynchronous Programming Mastery</h3>
    <p>Modern JavaScript heavily relies on asynchronous operations. Understanding Promises, async/await, and proper error handling is essential for building responsive applications that don't block the user interface.</p>
    
    <h3>Prototype Chain and Inheritance</h3>
    <p>JavaScript's prototype-based inheritance system is unique among programming languages. Mastering prototypes allows you to create efficient object hierarchies and understand how JavaScript's built-in objects work under the hood.</p>
    
    <h3>Event Loop and Concurrency</h3>
    <p>The JavaScript event loop is the heart of the language's concurrency model. Understanding how the call stack, task queue, and microtask queue interact is crucial for writing performant code and avoiding common pitfalls like blocking operations.</p>
    
    <p>These advanced concepts form the foundation of expert-level JavaScript development. Mastering them will elevate your code quality and enable you to tackle complex challenges with confidence.</p>`,
    excerpt: 'Discover advanced JavaScript techniques that will take your development skills to the next level.',
    author: 'admin',
    authorId: 1,
    category: 'Technology',
    tags: ['javascript', 'programming', 'web-development', 'tutorial'],
    featured: true,
    published: true,
    views: 189,
    likes: 24,
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: 3,
    title: 'Building Responsive Websites: A Complete Guide',
    slug: 'building-responsive-websites-guide',
    content: `<p>In today's multi-device world, responsive design isn't just a nice-to-have feature—it's an absolute necessity. With users accessing websites from smartphones, tablets, laptops, and desktop computers, your site must provide an optimal experience across all screen sizes.</p>
    
    <h3>Mobile-First Design Philosophy</h3>
    <p>The mobile-first approach has become the gold standard for responsive design. By starting with the smallest screen size and progressively enhancing for larger devices, you ensure that your core content and functionality work everywhere.</p>
    
    <h3>CSS Grid and Flexbox Mastery</h3>
    <p>Modern CSS layout systems like Grid and Flexbox have revolutionized responsive design. Grid excels at two-dimensional layouts, while Flexbox handles one-dimensional arrangements with ease. Understanding when and how to use each is crucial for creating flexible, maintainable layouts.</p>
    
    <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}</code></pre>
    
    <h3>Responsive Images and Media</h3>
    <p>Images often account for the majority of a webpage's bandwidth. Using responsive image techniques like srcset and the picture element ensures users download appropriately sized images for their devices, improving performance and user experience.</p>
    
    <h3>Performance Considerations</h3>
    <p>Responsive design isn't just about layout—it's about performance too. Techniques like lazy loading, critical CSS, and progressive enhancement ensure your responsive site loads quickly on all devices, especially on slower mobile connections.</p>
    
    <p>Remember, responsive design is an ongoing process. Regular testing across different devices and screen sizes, combined with user feedback, will help you create truly exceptional responsive experiences.</p>`,
    excerpt: 'Learn how to create beautiful, responsive websites that work perfectly on all devices.',
    author: 'admin',
    authorId: 1,
    category: 'Technology',
    tags: ['responsive-design', 'css', 'web-design', 'mobile'],
    featured: false,
    published: true,
    views: 156,
    likes: 12,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 4,
    title: 'The Art of Minimalist Living: Finding Joy in Less',
    slug: 'art-of-minimalist-living',
    content: `<p>In our consumer-driven society, the concept of minimalism offers a refreshing alternative—a path to finding contentment through intentional living rather than endless accumulation. Minimalism isn't about deprivation; it's about discovering what truly matters and creating space for it to flourish.</p>
    
    <h3>Understanding True Minimalism</h3>
    <p>Minimalism goes far beyond having fewer possessions. It's a mindset that prioritizes experiences over things, quality over quantity, and intentionality over impulse. The goal isn't to live with as little as possible, but to live with exactly what you need to thrive.</p>
    
    <h3>The Psychological Benefits</h3>
    <p>Research shows that cluttered environments can increase cortisol levels and reduce our ability to focus. By simplifying our physical spaces, we create mental clarity and reduce decision fatigue. When every item in your home has a purpose and place, daily life becomes more peaceful and efficient.</p>
    
    <h3>Starting Your Minimalist Journey</h3>
    <p>Begin with one area of your life—perhaps your wardrobe or workspace. Ask yourself: Does this item serve a purpose? Does it bring me joy? Have I used it in the past year? Be honest in your answers, and don't rush the process. Minimalism is a journey, not a destination.</p>
    
    <h3>Digital Minimalism</h3>
    <p>Our digital lives need decluttering too. Unsubscribe from unnecessary emails, organize your digital files, and be intentional about your social media consumption. Create boundaries around technology use to reclaim your time and attention.</p>
    
    <h3>The Ripple Effect</h3>
    <p>As you embrace minimalism, you'll likely notice changes beyond your physical environment. Many people report improved relationships, increased creativity, better financial health, and a stronger sense of purpose. When you're not constantly managing excess stuff, you have more energy for what truly matters.</p>
    
    <p>Remember, minimalism looks different for everyone. A minimalist family of five will have different needs than a single person. The key is finding your own version of 'enough' and living intentionally within those boundaries.</p>`,
    excerpt: 'Discover how minimalist living can lead to greater happiness and fulfillment in your daily life.',
    author: 'admin',
    authorId: 1,
    category: 'Lifestyle',
    tags: ['minimalism', 'lifestyle', 'wellness', 'happiness'],
    featured: true,
    published: true,
    views: 203,
    likes: 31,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: 5,
    title: 'Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations',
    slug: 'hidden-gems-travel-destinations',
    content: `<p>While popular tourist destinations have their charm, there's something magical about discovering places that haven't been overrun by crowds. These hidden gems offer authentic experiences, untouched natural beauty, and the chance to connect with local cultures in meaningful ways.</p>
    
    <h3>The Faroe Islands: Nordic Paradise</h3>
    <p>Nestled between Iceland and Norway, the Faroe Islands offer dramatic landscapes that seem almost otherworldly. With grass-roof houses, towering cliffs, and some of the most pristine hiking trails in Europe, this archipelago provides an escape from the modern world. The best part? You'll likely have most viewpoints to yourself.</p>
    
    <h3>Socotra Island, Yemen: The Galápagos of the Indian Ocean</h3>
    <p>Despite political challenges in mainland Yemen, Socotra Island remains a UNESCO World Heritage site with incredible biodiversity. One-third of its plant species exist nowhere else on Earth, including the iconic Dragon's Blood Trees that look like giant umbrellas dotting the landscape.</p>
    
    <h3>Raja Ampat, Indonesia: Underwater Wonderland</h3>
    <p>While Bali gets all the attention, Raja Ampat in West Papua offers some of the world's best diving and snorkeling. This remote archipelago hosts 75% of all known coral species and is considered the epicenter of marine biodiversity. The journey to get there is part of the adventure.</p>
    
    <h3>Svaneti, Georgia: Medieval Mountain Villages</h3>
    <p>High in the Caucasus Mountains, the Svaneti region feels frozen in time. Ancient stone towers dot the landscape, and traditional Svan culture remains largely intact. The hiking is world-class, the hospitality is legendary, and the cost is a fraction of what you'd pay in the Alps.</p>
    
    <h3>Planning Your Hidden Gem Adventure</h3>
    <p>Visiting off-the-beaten-path destinations requires more planning than typical tourist spots. Research visa requirements, local customs, and seasonal weather patterns. Consider hiring local guides who can provide insights you won't find in guidebooks and help support the local economy.</p>
    
    <p>The rewards of exploring hidden gems extend far beyond Instagram photos. These experiences create lasting memories, broaden perspectives, and often lead to the most meaningful travel stories you'll ever tell.</p>`,
    excerpt: 'Uncover amazing travel destinations that most tourists never discover.',
    author: 'admin',
    authorId: 1,
    category: 'Travel',
    tags: ['travel', 'adventure', 'destinations', 'hidden-gems'],
    featured: false,
    published: true,
    views: 178,
    likes: 22,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 6,
    title: 'Healthy Meal Prep: Save Time and Eat Better',
    slug: 'healthy-meal-prep-guide',
    content: `<p>In our fast-paced world, maintaining a healthy diet can feel like an impossible challenge. Between work, family, and social commitments, cooking nutritious meals often takes a backseat to convenience foods. However, meal prepping offers a solution that can transform your relationship with food while saving time and money.</p>
    
    <h3>The Science Behind Meal Prep Success</h3>
    <p>Research shows that people who plan their meals are more likely to have better diet quality, consume more fruits and vegetables, and maintain a healthy weight. Meal prepping removes the daily decision fatigue around food choices and reduces the temptation to opt for less healthy convenience options.</p>
    
    <h3>Getting Started: The Basics</h3>
    <p>Start small with just one meal—perhaps lunch for the workweek. Choose recipes with overlapping ingredients to minimize waste and simplify shopping. Invest in quality glass containers that can go from freezer to microwave, and designate a specific day for prep work.</p>
    
    <h3>Batch Cooking Strategies</h3>
    <p>Focus on versatile base ingredients that can be mixed and matched throughout the week. Cook large batches of grains like quinoa and brown rice, roast a variety of vegetables, and prepare proteins that can be used in multiple ways. This approach prevents meal fatigue while maintaining efficiency.</p>
    
    <h3>Storage and Food Safety</h3>
    <p>Proper storage is crucial for both food safety and maintaining quality. Most prepared meals stay fresh in the refrigerator for 3-4 days, while frozen portions can last up to three months. Label everything with dates, and when in doubt, throw it out.</p>
    
    <h3>Sample Weekly Prep Plan</h3>
    <p>Sunday: Wash and chop vegetables, cook grains and proteins, prepare snack portions. Monday-Wednesday: Consume refrigerated meals. Thursday: Use frozen portions or do a mini prep session. This rhythm ensures you always have healthy options available without spending hours in the kitchen daily.</p>
    
    <p>Remember, meal prep is a skill that improves with practice. Start with simple recipes and gradually incorporate more complex dishes as you become comfortable with the process. The investment in time upfront pays dividends in better health, reduced stress, and more time for the things you love.</p>`,
    excerpt: 'Master the art of meal prepping to save time while maintaining a healthy, delicious diet.',
    author: 'admin',
    authorId: 1,
    category: 'Health',
    tags: ['meal-prep', 'healthy-eating', 'nutrition', 'cooking'],
    featured: false,
    published: true,
    views: 134,
    likes: 16,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  }
];

export let comments = [];
export let categories = ['General', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Health'];
export let subscribers = [];
export let userLikes = {};