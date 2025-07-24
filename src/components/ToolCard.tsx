import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Star, Calendar } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AITool } from '@/types'

interface ToolCardProps {
  tool: AITool
  index?: number
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Freemium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Paid':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        {/* Header with Logo and Featured Badge */}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${tool.name}`
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg leading-none truncate">
                  {tool.name}
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">
                      {tool.rating} ({tool.reviewCount})
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {tool.featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="pb-4">
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {tool.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={getPricingColor(tool.pricing)}>
              {tool.pricing}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {tool.category.name}
            </Badge>
          </div>

          <div className="flex items-center text-xs text-muted-foreground mb-3">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(tool.launchDate).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric'
            })}
          </div>

          {/* Top Features */}
          <div className="space-y-1">
            {tool.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="pt-0 flex space-x-2">
          <Link to={`/tool/${tool.id}`} className="flex-1">
            <Button variant="default" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(tool.website, '_blank')}
            className="px-3"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}