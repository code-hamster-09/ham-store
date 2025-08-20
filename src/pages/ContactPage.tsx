"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  ShoppingBag,
  CreditCard,
  Package,
  CheckCircle,
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "support@modernshop.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team directly",
    contact: "+1 (555) 123-4567",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 9 AM - 6 PM EST",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come to our headquarters",
    contact: "123 Commerce St, New York, NY",
    color: "from-orange-500 to-red-500",
  },
]

const supportTopics = [
  { icon: ShoppingBag, title: "Order Issues", description: "Problems with your order" },
  { icon: CreditCard, title: "Payment & Billing", description: "Payment and billing questions" },
  { icon: Package, title: "Shipping & Returns", description: "Delivery and return inquiries" },
  { icon: Headphones, title: "Product Support", description: "Product questions and support" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    topic: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-200/50 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
            <p className="text-gray-600 mb-8">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  subject: "",
                  topic: "",
                  message: "",
                })
              }}
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need help? We're here to assist you every step of the way
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <div key={method.title} className="group">
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 text-center h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="text-blue-600 font-medium text-sm">{method.contact}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-100/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-2 h-12 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-2 h-12 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 h-12 rounded-xl"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2 h-12 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="topic">Topic</Label>
                <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
                  <SelectTrigger className="mt-2 h-12 rounded-xl">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order">Order Issues</SelectItem>
                    <SelectItem value="payment">Payment & Billing</SelectItem>
                    <SelectItem value="shipping">Shipping & Returns</SelectItem>
                    <SelectItem value="product">Product Support</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="mt-2 h-12 rounded-xl"
                  placeholder="Brief description of your inquiry"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 rounded-xl"
                  rows={6}
                  placeholder="Please provide details about your inquiry..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Support Topics & Info */}
          <div className="space-y-8">
            {/* Support Topics */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-100/50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Support Topics</h3>
              <div className="space-y-4">
                {supportTopics.map((topic) => {
                  const IconComponent = topic.icon
                  return (
                    <div
                      key={topic.title}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{topic.title}</h4>
                        <p className="text-gray-600 text-sm">{topic.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-100/50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Customer Support</div>
                    <div className="text-gray-600 text-sm">Monday - Friday: 9 AM - 6 PM EST</div>
                    <div className="text-gray-600 text-sm">Saturday: 10 AM - 4 PM EST</div>
                    <div className="text-gray-600 text-sm">Sunday: Closed</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-green-800">Currently Online</span>
                </div>
                <p className="text-green-700 text-sm">Our support team is available to help you right now!</p>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Quick Answers?</h3>
              <p className="mb-6 opacity-90">Check out our FAQ section for instant answers to common questions.</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl">Visit FAQ</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
