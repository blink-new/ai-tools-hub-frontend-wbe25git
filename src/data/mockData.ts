import { AITool, Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'image-generation',
    name: 'Image Generation',
    description: 'AI tools for creating, editing, and enhancing images',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    toolCount: 45
  },
  {
    id: 'writing',
    name: 'Writing & Content',
    description: 'AI-powered writing assistants and content generators',
    icon: '✍️',
    color: 'from-blue-500 to-cyan-500',
    toolCount: 38
  },
  {
    id: 'chatbots',
    name: 'Chatbots & AI Assistants',
    description: 'Conversational AI and virtual assistants',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500',
    toolCount: 29
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Tools to automate tasks and boost efficiency',
    icon: '⚡',
    color: 'from-orange-500 to-red-500',
    toolCount: 52
  },
  {
    id: 'audio',
    name: 'Audio & Speech',
    description: 'Voice synthesis, transcription, and audio processing',
    icon: '🎵',
    color: 'from-indigo-500 to-purple-500',
    toolCount: 24
  },
  {
    id: 'video',
    name: 'Video & Animation',
    description: 'AI-powered video creation and editing tools',
    icon: '🎬',
    color: 'from-teal-500 to-blue-500',
    toolCount: 31
  },
  {
    id: 'code',
    name: 'Code & Development',
    description: 'AI coding assistants and development tools',
    icon: '💻',
    color: 'from-gray-700 to-gray-900',
    toolCount: 19
  },
  {
    id: 'analytics',
    name: 'Data & Analytics',
    description: 'AI-powered data analysis and insights',
    icon: '📊',
    color: 'from-yellow-500 to-orange-500',
    toolCount: 16
  }
]

export const aiTools: AITool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'AI art generator that creates stunning images from text prompts',
    description: 'Midjourney is a generative artificial intelligence program that creates images from natural language descriptions, similar to OpenAI\'s DALL-E and Stability AI\'s Stable Diffusion.',
    logo: 'https://cdn.midjourney.com/brand/midjourney-logo.svg',
    website: 'https://midjourney.com',
    category: categories[0],
    subcategories: ['Art Generation', 'Creative Design'],
    pricing: 'Paid',
    features: [
      'High-quality image generation',
      'Various artistic styles',
      'Community gallery',
      'Commercial usage rights',
      'Upscaling and variations'
    ],
    useCases: [
      'Digital art creation',
      'Concept art for games/movies',
      'Social media content',
      'Marketing materials',
      'Personal creative projects'
    ],
    pros: [
      'Exceptional image quality',
      'Intuitive Discord interface',
      'Strong community',
      'Regular updates and improvements'
    ],
    cons: [
      'Requires Discord usage',
      'Limited free tier',
      'Queue times during peak hours'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1686191129086-4b38dfc59b04?w=800&h=400&fit=crop'
    ],
    launchDate: '2022-07-12',
    rating: 4.8,
    reviewCount: 2847,
    tags: ['image-generation', 'ai-art', 'creative', 'discord'],
    featured: true
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'Conversational AI that understands and generates human-like text',
    description: 'ChatGPT is a large language model-based chatbot developed by OpenAI that can engage in conversational dialogue and generate human-like responses to a wide range of questions and prompts.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    website: 'https://chat.openai.com',
    category: categories[2],
    subcategories: ['Conversational AI', 'Text Generation'],
    pricing: 'Freemium',
    features: [
      'Natural conversation',
      'Code generation and debugging',
      'Writing assistance',
      'Analysis and reasoning',
      'Multiple languages support'
    ],
    useCases: [
      'Customer support',
      'Content creation',
      'Programming help',
      'Educational assistance',
      'Creative writing'
    ],
    pros: [
      'Highly versatile',
      'Excellent reasoning abilities',
      'Regular updates',
      'Free tier available'
    ],
    cons: [
      'Can generate incorrect information',
      'Limited real-time data',
      'Usage limits on free tier'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1686191129086-4b38dfc59b04?w=800&h=400&fit=crop'
    ],
    launchDate: '2022-11-30',
    rating: 4.7,
    reviewCount: 5932,
    tags: ['chatbot', 'ai-assistant', 'writing', 'coding'],
    featured: true
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'AI-powered code completion and programming assistant',
    description: 'GitHub Copilot is an AI coding assistant that helps you write code faster by providing intelligent code suggestions and completions directly in your editor.',
    logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    website: 'https://github.com/features/copilot',
    category: categories[6],
    subcategories: ['Code Completion', 'Programming Assistant'],
    pricing: 'Paid',
    features: [
      'Code suggestions',
      'Multiple language support',
      'Context-aware completions',
      'Function generation',
      'Code explanation'
    ],
    useCases: [
      'Software development',
      'Learning programming',
      'Code refactoring',
      'API integration',
      'Documentation writing'
    ],
    pros: [
      'Excellent code quality',
      'Supports many languages',
      'IDE integration',
      'Learns from context'
    ],
    cons: [
      'Subscription required',
      'Occasional incorrect suggestions',
      'Privacy concerns with code'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
    ],
    launchDate: '2021-10-29',
    rating: 4.6,
    reviewCount: 1847,
    tags: ['coding', 'programming', 'ai-assistant', 'productivity'],
    featured: false
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    tagline: 'AI-powered writing assistant integrated into Notion workspace',
    description: 'Notion AI brings the power of artificial intelligence directly into your Notion workspace, helping you write better, think bigger, and work faster.',
    logo: 'https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png',
    website: 'https://notion.so/product/ai',
    category: categories[3],
    subcategories: ['Productivity', 'Writing Assistant'],
    pricing: 'Freemium',
    features: [
      'Content generation',
      'Text summarization',
      'Writing improvement',
      'Brainstorming assistance',
      'Translation'
    ],
    useCases: [
      'Note-taking enhancement',
      'Content creation',
      'Meeting summaries',
      'Project planning',
      'Creative writing'
    ],
    pros: [
      'Seamless Notion integration',
      'Multiple AI functions',
      'User-friendly interface',
      'Contextual suggestions'
    ],
    cons: [
      'Limited to Notion ecosystem',
      'Additional cost for AI features',
      'Internet connection required'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop'
    ],
    launchDate: '2023-02-22',
    rating: 4.5,
    reviewCount: 982,
    tags: ['productivity', 'writing', 'workspace', 'ai-assistant'],
    featured: false
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Advanced AI voice synthesis and speech generation',
    description: 'ElevenLabs develops natural-sounding speech synthesis software using artificial intelligence and deep learning.',
    logo: 'https://elevenlabs.io/favicon.ico',
    website: 'https://elevenlabs.io',
    category: categories[4],
    subcategories: ['Voice Synthesis', 'Text-to-Speech'],
    pricing: 'Freemium',
    features: [
      'Realistic voice cloning',
      'Multiple voice styles',
      'Custom voice training',
      'Emotion control',
      'Multi-language support'
    ],
    useCases: [
      'Audiobook narration',
      'Podcast production',
      'Video voiceovers',
      'Accessibility tools',
      'Game character voices'
    ],
    pros: [
      'Exceptional voice quality',
      'Voice cloning capabilities',
      'Easy to use interface',
      'API availability'
    ],
    cons: [
      'Usage limits on free tier',
      'Ethical concerns with voice cloning',
      'Processing time for longer texts'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400&fit=crop'
    ],
    launchDate: '2022-06-17',
    rating: 4.7,
    reviewCount: 1456,
    tags: ['voice-synthesis', 'audio', 'text-to-speech', 'ai-voice'],
    featured: true
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    tagline: 'AI-powered video editing and generation platform',
    description: 'Runway is an applied AI research company shaping the next era of art, entertainment and human creativity.',
    logo: 'https://runway.com/favicon.ico',
    website: 'https://runway.com',
    category: categories[5],
    subcategories: ['Video Generation', 'AI Video Editing'],
    pricing: 'Freemium',
    features: [
      'Text-to-video generation',
      'Video inpainting',
      'Green screen replacement',
      'Style transfer',
      'Object removal'
    ],
    useCases: [
      'Content creation',
      'Film production',
      'Social media videos',
      'Marketing materials',
      'Educational content'
    ],
    pros: [
      'Cutting-edge AI models',
      'Intuitive interface',
      'Regular feature updates',
      'Creative community'
    ],
    cons: [
      'Credit-based pricing',
      'Processing time',
      'Learning curve for advanced features'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=400&fit=crop'
    ],
    launchDate: '2018-04-10',
    rating: 4.4,
    reviewCount: 743,
    tags: ['video-generation', 'ai-video', 'creative', 'content-creation'],
    featured: false
  }
]