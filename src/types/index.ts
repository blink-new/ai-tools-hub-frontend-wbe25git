export interface AITool {
  id: string
  name: string
  tagline: string
  description: string
  logo: string
  website: string
  category: Category
  subcategories: string[]
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Enterprise'
  features: string[]
  useCases: string[]
  pros: string[]
  cons: string[]
  screenshots: string[]
  launchDate: string
  rating: number
  reviewCount: number
  tags: string[]
  featured: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
  toolCount: number
}

export interface SearchFilters {
  query: string
  category: string
  pricing: string[]
  tags: string[]
  sortBy: 'newest' | 'popular' | 'rating' | 'alphabetical'
}