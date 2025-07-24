import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Upload, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { categories } from '@/data/mockData'
import { useToast } from '@/hooks/use-toast'

export default function SubmitTool() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    tagline: '',
    description: '',
    category: '',
    pricing: '',
    logo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.website || !formData.description) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      })
      return
    }

    // Simulate form submission
    toast({
      title: 'Tool Submitted!',
      description: 'Thank you for your submission. We\'ll review it and add it to our directory soon.',
    })
    
    // Reset form
    setFormData({
      name: '',
      website: '',
      tagline: '',
      description: '',
      category: '',
      pricing: '',
      logo: ''
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Submit an AI Tool</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us grow our directory by submitting your favorite AI tools. 
            We review all submissions and add quality tools to our collection.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Tool Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Tool Name *</Label>
                      <Input
                        id="name"
                        placeholder="e.g., ChatGPT, Midjourney"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Website URL *</Label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://example.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      placeholder="A brief description of what the tool does"
                      value={formData.tagline}
                      onChange={(e) => handleInputChange('tagline', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description of the AI tool, its features, and use cases..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.icon} {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pricing">Pricing Model</Label>
                      <Select value={formData.pricing} onValueChange={(value) => handleInputChange('pricing', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pricing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="free">Free</SelectItem>
                          <SelectItem value="freemium">Freemium</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo URL (Optional)</Label>
                    <div className="relative">
                      <Upload className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="logo"
                        type="url"
                        placeholder="https://example.com/logo.png"
                        value={formData.logo}
                        onChange={(e) => handleInputChange('logo', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Provide a direct link to the tool's logo (PNG, JPG, or SVG format)
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Tool for Review
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-muted/30 rounded-lg"
          >
            <h3 className="font-semibold mb-2">Review Process</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our team reviews all submissions to ensure quality and relevance. Here's what we look for:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Working AI functionality</li>
              <li>• Clear value proposition</li>
              <li>• Professional presentation</li>
              <li>• Unique or innovative features</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}