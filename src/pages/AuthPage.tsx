import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Chrome,
  Eye,
  EyeOff,
  Github,
  Lock,
  Mail,
  Store,
  User,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back to Home */}
        <NavLink
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </NavLink>

        {/* Auth Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-200/50 p-8 border border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <NavLink to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Store className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ModernShop
              </span>
            </NavLink>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Sign in to your account to continue shopping"
                : "Join us and discover amazing products"}
            </p>
          </div>

          {/* Social Auth Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-2xl border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-2xl border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
            >
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </Button>
          </div>

          <div className="relative mb-6">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-gray-500 text-sm">or</span>
            </div>
          </div>

          {/* Auth Form */}
          <form className="space-y-6">
            {/* Registration Fields */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="text-gray-700 font-medium"
                  >
                    First Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className={`pl-12 h-12 rounded-2xl border-2 ${
                        errors.firstName
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      placeholder="John"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="lastName"
                    className="text-gray-700 font-medium"
                  >
                    Last Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className={`pl-12 h-12 rounded-2xl border-2 ${
                        errors.lastName
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      placeholder="Doe"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </Label>
              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`pl-12 h-12 rounded-2xl border-2 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <div className="relative mt-2">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className={`pl-12 pr-12 h-12 rounded-2xl border-2 ${
                    errors.password
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password (Registration only) */}
            {!isLogin && (
              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="text-gray-700 font-medium"
                >
                  Confirm Password
                </Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className={`pl-12 pr-12 h-12 rounded-2xl border-2 ${
                      errors.confirmPassword
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Remember Me / Agree to Terms */}
            <div className="space-y-4">
              {isLogin ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        handleInputChange("rememberMe", checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="rememberMe"
                      className="text-gray-700 cursor-pointer"
                    >
                      Remember me
                    </Label>
                  </div>
                  <NavLink
                    to="/forgot-password"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              ) : (
                <div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToTerms", checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-gray-700 cursor-pointer text-sm"
                    >
                      I agree to the
                      <NavLink
                        to="/terms"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Terms of Service
                      </NavLink>
                      and
                      <NavLink
                        to="/privacy"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Privacy Policy
                      </NavLink>
                    </Label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {isLogin ? "Signing In..." : "Creating Account..."}
                </div>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Toggle Auth Mode */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    rememberMe: false,
                    agreeToTerms: false,
                  });
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            🔒 Your information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
