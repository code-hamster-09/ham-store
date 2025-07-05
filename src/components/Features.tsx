import {
  Award,
  Headphones,
  Heart,
  RotateCcw,
  Shield,
  Truck,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description:
        "Free shipping on all orders over $50. Fast and reliable delivery.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment information is safe with our secure checkout.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Not satisfied? Return your purchase within 30 days.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is here to help you anytime.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind the quality of every product we sell.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Join thousands of happy customers who trust our service.",
      color: "from-pink-500 to-rose-500",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 ">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            We're committed to providing you with the best shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex flex-col items-center text-center gap-5 p-8 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200/50`}
                  >
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
