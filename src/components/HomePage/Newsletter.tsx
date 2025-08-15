import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Mail className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            products, exclusive offers, and special discounts.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 rounded-2xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder:text-blue-200 focus:bg-white/30"
                />
              </div>
              <Button
                type="submit"
                className="h-14 px-8 rounded-2xl bg-white text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-900/20"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </form>

          {isSubscribed && (
            <div className="mt-6 p-4 bg-green-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30">
              <p className="text-green-100 font-medium">
                ✓ Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          )}

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-blue-200 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Weekly</div>
              <div className="text-blue-200 text-sm">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Exclusive</div>
              <div className="text-blue-200 text-sm">Offers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
