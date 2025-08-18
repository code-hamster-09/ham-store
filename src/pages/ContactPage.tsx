import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  CreditCard,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShoppingBag,
} from "lucide-react";

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
];

const supportTopics = [
  {
    icon: ShoppingBag,
    title: "Order Issues",
    description: "Problems with your order",
  },
  {
    icon: CreditCard,
    title: "Payment & Billing",
    description: "Payment and billing questions",
  },
  {
    icon: Package,
    title: "Shipping & Returns",
    description: "Delivery and return inquiries",
  },
  {
    icon: Headphones,
    title: "Product Support",
    description: "Product questions and support",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center p-4">
      <div className="container mx-auto px-4 py-8">
        {/* header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need help? We're here to assist you every step of
            the way
          </p>
        </div>

        {/* contact methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <div key={method.title} className="group">
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 text-center h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-medium text-sm">
                    {method.contact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* form */}
          <div className="bg-white rounded-3xl shadow-lg shadow-blue-100 p-8">
            <h3>Send us Message</h3>

            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" type="text" />
                </div>
                <div className="">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" type="text" />
                </div>
              </div>

              <div className="">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" />
              </div>

              <div className="">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" />
              </div>

              <div className="">
                <Label htmlFor="topic">Topic</Label>
                <Select>
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

              <div className="">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div className="">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            {/* Support topics  */}
            <div className="bg-white rounded-3xl shadow-lg shadow-blue-100/40 p-8">
              <h2>Common support topics</h2>
              <div className="">
                {supportTopics.map((topic) => {
                  const IconComponent = topic.icon;
                  return (
                    <div key={topic.title} className="">
                      <div className="">
                        <IconComponent />
                      </div>
                      <div className="">
                        <h4>{topic.title}</h4>
                        <p>{topic.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* business hours  */}
            <div className="bg-white rounded-3xl shadow-lg shadow-blue-100/40 p-8">
              <h3>Business hours</h3>
              <div className="">
                <Clock />
                <div className="">
                  <span>Customer Support</span>
                  <span>Monday - Friday: 9 AM - 6 PM EST</span>
                  <span>Saturday: 10 AM - 4 PM EST</span>
                  <span>Sunday: Closed</span>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className=""></div>
                  <span>Currently Online</span>
                </div>
                <p>Our support team is available to help you right now!</p>
              </div>
            </div>

            {/* quick faq */}
            <div className="rounded-3xl p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h4>Need Quick Answers?</h4>
              <p>
                Check out our FAQ section for instant answers to common
                questions.
              </p>
              <Button>Visit FAQ</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
