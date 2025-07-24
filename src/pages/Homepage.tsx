import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ToolCard from '@/components/ToolCard'
import { aiTools, categories } from '@/data/mockData'
import { SearchFilters } from '@/types'

const statsData = [
  { icon: Sparkles, label: 'AI Tools', value: '500+' },
  { icon: Users, label: 'Monthly Users', value: '50K+' },
  { icon: TrendingUp, label: 'Tools Added Daily', value: '10+' },
  { icon: Zap, label: 'Categories', value: '8' }
]

export default function Homepage() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'all',
    pricing: [],
    tags: [],
    sortBy: 'newest'
  })

  const filteredTools = useMemo(() => {
    let filtered = [...aiTools]
    
    // Filter by search query
    if (filters.query) {
      const query = filters.query.toLowerCase()
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.tagline.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(tool => tool.category.id === filters.category)
    }
    
    // Sort tools
    switch (filters.sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }
    
    return filtered
  }, [filters])

  const featuredTools = aiTools.filter(tool => tool.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
                🚀 Discover the Future of AI
              </Badge>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Discover the Latest{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Tools
              </span>{' '}
              Every Day
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay ahead of the curve with our curated collection of cutting-edge AI tools. 
              Perfect for developers, marketers, and AI enthusiasts.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for AI tools, features, or categories..."
                  value={filters.query}
                  onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
                  className="pl-12 pr-4 h-14 text-lg border-2 shadow-lg focus:shadow-xl transition-shadow"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={filters.category === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilters(prev => ({ ...prev, category: 'all' }))}
            >
              All Tools
            </Button>
            {categories.slice(0, 6).map((category) => (
              <Button
                key={category.id}
                variant={filters.category === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilters(prev => ({ ...prev, category: category.id }))}
                className="flex items-center space-x-2"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.toolCount}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Featured AI Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hand-picked tools that are making waves in the AI community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Tools Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                All AI Tools
              </h2>
              <p className="text-muted-foreground">
                {filteredTools.length} tools found
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select 
                value={filters.sortBy} 
                onValueChange={(value: any) => setFilters(prev => ({ ...prev, sortBy: value }))}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No tools found matching your criteria</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setFilters({
                  query: '',
                  category: 'all',
                  pricing: [],
                  tags: [],
                  sortBy: 'newest'
                })}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}