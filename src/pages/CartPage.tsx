import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
  //     <div className="container mx-auto px-4 py-16">
  //       <div className="max-w-md mx-auto text-center items-center flex flex-col mt12">
  //         <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-32 h-32 rounded-full items-center justify-center flex mb-4">
  //           <ShoppingBag className="w-16 h-16 text-blue-500"/>
  //         </div>
  //         <h3 className="text-gray-900 font-bold text-3xl mb-4">Your cart is empty</h3>
  //         <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet</p>
  //         <NavLink to={"/products"}>
  //           <Button className="rounded-2xl h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Start Shopping</Button>
  //         </NavLink>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* heading */}
        <div className="space-y-2 mb-8">
          <NavLink className='flex text-md items-center gap-2 text-blue-600 hover:text-blue-800 duration-300' to={"/products"}>
            <ArrowLeft className="w-4"/> Continue Shopping
          </NavLink>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <p className="text-gray-600">7 items in your cart</p>
        </div>

        <div className="grid grid-cols-3 gap-8 items-start">
          <div className="col-span-2 space-y-4">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* order summary  */}
          <div className="col-span-1 bg-white rounded-3xl p-8 shadow-lg shadow-blue-100/50 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold"></span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold"></span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-gray-900"></span>
              </div>
            </div>

            <NavLink to="/checkout">
              <Button className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-200">
                Proceed to Checkout
              </Button>
            </NavLink>

            <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
              <h3 className="font-semibold text-blue-900 mb-2">
                Free Shipping
              </h3>
              <p className="text-blue-700 text-sm">
                Your order qualifies for free shipping!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
