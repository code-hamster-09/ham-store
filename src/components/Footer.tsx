import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Store,
  Twitter,
  Youtube,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "All Products", href: "/products" },
      { name: "Electronics", href: "/products?category=electronics" },
      { name: "Clothing", href: "/products?category=clothing" },
      { name: "Accessories", href: "/products?category=accessories" },
      { name: "Sale", href: "/sale" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Affiliates", href: "/affiliates" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section  */}
          <div className="lg:col-span-2 ">
            <NavLink to={"/"} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Store className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">ModernShop</span>
            </NavLink>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Discover amazing products with our curated collection of premium
              items. Quality, style, and comfort in every purchase.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">hello@hamstore.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+7 747 290 52-75</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  123 Commerce St, New York, NY
                </span>
              </div>
            </div>
          </div>

          {/* Links Section  */}
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section  */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <NavLink
                    to={social.href}
                    key={social.name}
                    className="flex items-center justify-center rounded-2xl bg-gray-800 w-10 h-10 text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                  >
                    <IconComponent className="w-5 h-5" />
                  </NavLink>
                );
              })}
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 ModernShop. All rights reserved. Made with ❤️ for amazing
              shopping experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
