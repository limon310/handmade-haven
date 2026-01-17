"use client"

export default function Newsletter() {

    return (
        <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">

                {/* Decorative background elements */}
                <div className="absolute -top-10 -right-10 opacity-10 text-[15rem] font-serif rotate-12 pointer-events-none">
                    ✿
                </div>
                <div className="absolute -bottom-10 -left-10 opacity-10 text-[12rem] font-serif -rotate-12 pointer-events-none">
                    🏺
                </div>

                <div className="relative z-10">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <span className="h-[1px] w-10 bg-white/50"></span>
                        <span className="uppercase tracking-[0.3em] text-xs font-bold">Join the Movement</span>
                        <span className="h-[1px] w-10 bg-white/50"></span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Don't Miss a <span className="italic text-secondary-content/80">Stitch</span>
                    </h2>

                    <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
                        Subscribe to get early access to new collections, artisan stories, and exclusive heritage updates.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-ghost flex-1 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/10 rounded-xl"
                            required
                        />
                        <button className="btn btn-secondary px-10 rounded-xl border-none text-white hover:scale-105 transition-transform">
                            Subscribe Now
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-white/50">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}