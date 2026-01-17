"use client";

import { isUserLoggedIn } from "@/utils/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Add2WishLish = () => {
    const router = useRouter();

    const handleWishlist = () => {
        // auth check
        if (!isUserLoggedIn()) {
            Swal.fire({
                title: "Login Required",
                text: "Add to Wishlist করতে হলে আগে login করুন",
                icon: "warning",
                confirmButtonText: "Login",
            }).then(() => {
                router.push(`/login?redirect=/items`);
            });
            return;
        }

        Swal.fire("Success", "Add to Wishlist", "success");
    };
    return (
        <div>
            <button onClick={handleWishlist} className="btn btn-outline btn-secondary flex-1 btn-lg">
                Add to Wishlist
            </button>
        </div>
    );
};

export default Add2WishLish;