import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Grid, List, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ToolCard from '@/components/ToolCard'
import { categories, aiTools } from '@/data/mockData'
import { Link } from 'react-router-dom'

export default function Categories() {
  const { category: selectedCategory } = useParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('newest')

  const currentCategory = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null

  const filteredTools = useMemo(() => {
    const tools = selectedCategory 
      ? aiTools.filter(tool => tool.category.id === selectedCategory)
      : aiTools

    switch (sortBy) {
      case 'newest':
        return tools.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
      case 'popular':
        return tools.sort((a, b) => b.reviewCount - a.reviewCount)
      case 'rating':
        return tools.sort((a, b) => b.rating - a.rating)
      case 'alphabetical':
        return tools.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return tools
    }
  }, [selectedCategory, sortBy])

  if (selectedCategory && !currentCategory) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
        <Link to="/categories">
          <Button>View All Categories</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {currentCategory ? (
              <div className="text-center">
                <div className="text-6xl mb-4">{currentCategory.icon}</div>
                <h1 className="text-4xl font-bold mb-4">{currentCategory.name}</h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {currentCategory.description}
                </p>
                <Badge variant="secondary" className="text-sm">
                  {filteredTools.length} tools available
                </Badge>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">All Categories</h1>
                <p className="text-xl text-muted-foreground">
                  Browse AI tools by category to find exactly what you need
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Categories Grid (only show if no specific category selected) */}
      {!selectedCategory && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/categories/${category.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                          {category.icon}
                        </div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {category.description}
                        </p>
                        <Badge variant="secondary">
                          {category.toolCount} tools
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools Section (only show if specific category selected) */}
      {selectedCategory && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {currentCategory?.name} Tools
                </h2>
                <p className="text-muted-foreground">
                  {filteredTools.length} tools found
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
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

                <div className="flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}>
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <div className="text-muted-foreground mb-4">
                  <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No tools found in this category</p>
                  <p className="text-sm">Check back later for new additions</p>
                </div>
                <Link to="/categories">
                  <Button variant="outline">
                    Browse Other Categories
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}