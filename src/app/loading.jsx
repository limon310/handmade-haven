export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
            <div className="relative flex items-center justify-center">
                {/* 1. Outer Rotating Ring (Terracotta Color) */}
                <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>

                {/* 2. Inner Rotating Ring (Forest Green - Reverse Spin) */}
                <div className="absolute w-12 h-12 border-4 border-secondary/20 border-b-secondary rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

                {/* 3. Center Icon (Pottery or Flower) */}
                <div className="absolute text-xl">🏺</div>
            </div>

            {/* Loading Text */}
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-secondary tracking-widest animate-pulse">
                    HANDMADE <span className="text-primary">HAVEN</span>
                </h2>
                <p className="text-neutral/40 text-xs uppercase tracking-[0.3em] mt-2">
                    Bringing Heritage to Life...
                </p>
            </div>
        </div>
    );
}