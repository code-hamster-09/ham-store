import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 overflow-hidden">
      {/* Background Elements  */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-fill blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content  */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg shadow-blue-100/50">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                New Collections Available
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Discover
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Amazing
                </span>
                Products
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg ">
                Shop the latest trends with our curated collection of premium
                products. Quality, style, and comfort in every purchase.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to={"/products"}>
                <Button className="h-14 px-8 text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-200 group">
                  Shop Now{" "}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              <Button
                variant="outline"
                className="h-14 px-8 text-lg rounded-2xl border-2 border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm"
              >
                Learn more
              </Button>
            </div>

            {/* stats */}
            <div className="flex gap-8 pt-8">
              <div className="">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image  */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50">
              <img alt="Hero Product" className="object-cover" />

              {/* Floating Cards  */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-blue-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Free Shipping
                    </div>
                    <div className="text-gray-600 text-sm">
                      On orders over $50
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-blue-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">★</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      4.9 Rating
                    </div>
                    <div className="text-gray-600 text-sm">
                      From 1000+ reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
