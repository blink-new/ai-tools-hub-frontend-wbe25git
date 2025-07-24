import { motion } from 'framer-motion'
import { Sparkles, Target, Users, Zap, Mail, Github, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Curated Selection',
      description: 'We carefully review and select only the highest quality AI tools to ensure you discover truly valuable resources.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our directory grows through community submissions and feedback, ensuring we stay current with the latest innovations.'
    },
    {
      icon: Zap,
      title: 'Daily Updates',
      description: 'New AI tools are added daily, keeping you at the forefront of artificial intelligence technology.'
    },
    {
      icon: Sparkles,
      title: 'Expert Reviews',
      description: 'Each tool includes detailed reviews, use cases, and pros/cons to help you make informed decisions.'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Tools Listed' },
    { number: '50K+', label: 'Monthly Users' },
    { number: '8', label: 'Categories' },
    { number: '10+', label: 'Tools Added Daily' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Tools Hub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to democratize access to artificial intelligence by providing 
              a comprehensive directory of the best AI tools available today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                In the rapidly evolving world of artificial intelligence, discovering the right tools 
                can be overwhelming. AI Tools Hub was created to solve this problem by providing a 
                curated, comprehensive directory of AI applications, APIs, and platforms.
              </p>
              <p>
                Whether you're a developer looking for the perfect API, a content creator seeking 
                AI-powered tools, or a business owner exploring automation possibilities, our platform 
                helps you discover, evaluate, and implement the right AI solutions for your needs.
              </p>
              <p>
                We believe that AI should be accessible to everyone, and our mission is to bridge 
                the gap between cutting-edge technology and practical applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond simple listings to provide comprehensive insights into each AI tool
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Our community continues to grow every day
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, suggestions, or want to submit a tool? We'd love to hear from you.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" size="lg">
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline" size="lg">
                <Twitter className="h-5 w-5 mr-2" />
                Follow Us
              </Button>
              <Button variant="outline" size="lg">
                <Github className="h-5 w-5 mr-2" />
                Contribute
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Email: hello@aitoolshub.com | Twitter: @aitoolshub
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}