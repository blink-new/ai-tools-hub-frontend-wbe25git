import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Star, Calendar, ArrowLeft, CheckCircle, XCircle, Lightbulb, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { aiTools } from '@/data/mockData'

export default function ToolDetail() {
  const { id } = useParams()
  const tool = aiTools.find(t => t.id === id)

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-muted-foreground mb-8">The AI tool you're looking for doesn't exist.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    )
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tools
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${tool.name}`
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold">{tool.name}</h1>
                    {tool.featured && (
                      <Badge variant="secondary">Featured</Badge>
                    )}
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">{tool.tagline}</p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{tool.rating}/5 ({tool.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Launched {new Date(tool.launchDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className={getPricingColor(tool.pricing)}>
                  {tool.pricing}
                </Badge>
                <Badge variant="outline">{tool.category.name}</Badge>
                {tool.subcategories.map((sub, idx) => (
                  <Badge key={idx} variant="secondary">{sub}</Badge>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button size="lg" onClick={() => window.open(tool.website, '_blank')}>
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Try {tool.name}
                </Button>
                <Button variant="outline" size="lg">
                  Save Tool
                </Button>
              </div>
            </motion.div>

            {/* Screenshots */}
            {tool.screenshots.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="aspect-video rounded-lg overflow-hidden border">
                      <img 
                        src={screenshot} 
                        alt={`${tool.name} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Lightbulb className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pros & Cons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tool.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <XCircle className="h-5 w-5 mr-2" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tool.cons.map((con, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{con}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Category</dt>
                    <dd className="text-sm">{tool.category.name}</dd>
                  </div>
                  <Separator />
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Pricing</dt>
                    <dd className="text-sm">{tool.pricing}</dd>
                  </div>
                  <Separator />
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Launch Date</dt>
                    <dd className="text-sm">{new Date(tool.launchDate).toLocaleDateString()}</dd>
                  </div>
                  <Separator />
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Website</dt>
                    <dd>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-primary"
                        onClick={() => window.open(tool.website, '_blank')}
                      >
                        Visit Website
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </dd>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold">Ready to try {tool.name}?</h3>
                    <p className="text-sm text-muted-foreground">
                      Join thousands of users who are already using this tool.
                    </p>
                    <Button 
                      className="w-full" 
                      onClick={() => window.open(tool.website, '_blank')}
                    >
                      Get Started
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}