"use client";

import { isUserLoggedIn } from "@/utils/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Add2Card = ({ item }) => {
  const router = useRouter();

  const handleAddToCart = () => {
    // auth check
    if (!isUserLoggedIn()) {
      Swal.fire({
        title: "Login Required",
        text: "Add to cart করতে হলে আগে login করুন",
        icon: "warning",
        confirmButtonText: "Login",
      }).then(() => {
        router.push(`/login?redirect=/items`);
      });
      return;
    }

    // user logged in
    // console.log("Item added to cart:", item);

    Swal.fire("Success", "Item added to cart", "success");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn btn-primary btn-lg shadow-lg text-white"
    >
      Add to Cart
    </button>
  );
};

export default Add2Card;
