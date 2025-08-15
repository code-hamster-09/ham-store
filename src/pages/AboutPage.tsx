import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Globe,
  Heart,
  Leaf,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const stats = [
  { label: "Happy Customers", value: "50K+", icon: Users },
  { label: "Products Sold", value: "1M+", icon: Award },
  { label: "Countries Served", value: "25+", icon: Globe },
  { label: "Team Members", value: "100+", icon: Heart },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on quality. Every product is carefully selected and tested.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace new technologies and trends to bring you the latest and greatest.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Your data and transactions are protected with enterprise-grade security.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We're committed to sustainable practices and eco-friendly products.",
    color: "from-orange-500 to-red-500",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about creating amazing shopping experiences for everyone.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Tech enthusiast building the future of e-commerce with cutting-edge solutions.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creating beautiful and intuitive experiences that customers love.",
  },
  {
    name: "David Kim",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ensuring smooth operations and exceptional customer service every day.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-700 rounded-full px-4 py-2">
                Our Story
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building the
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Future of Shopping
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2020, we've been on a mission to revolutionize online
                shopping by combining cutting-edge technology with exceptional
                customer service. We believe shopping should be enjoyable,
                secure, and accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/products">
                  <Button className="h-14 px-8 text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Shop Now
                  </Button>
                </NavLink>
                <NavLink to="/contact">
                  <Button
                    variant="outline"
                    className="h-14 px-8 text-lg rounded-2xl border-2 border-gray-300 hover:border-gray-400 bg-transparent"
                  >
                    Get in Touch
                  </Button>
                </NavLink>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="About Us"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience
              we create for our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 h-full">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind ModernShop who work tirelessly to
              bring you the best shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                To democratize access to quality products by creating an
                inclusive, sustainable, and delightful shopping experience that
                connects people with the things they love while supporting the
                communities and environment we all share.
              </p>
              <NavLink to="/products">
                <Button className="h-14 px-8 text-lg rounded-2xl bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  Start Shopping
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
