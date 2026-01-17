export default function WhyChooseUs() {
    const features = [
        {
            icon: "🌿",
            title: "Eco-Conscious",
            description: "Sustainable materials that love the earth as much as you do. We use 100% biodegradable jute and clay."
        },
        {
            icon: "🤝",
            title: "Fair Trade",
            description: "Every purchase empowers rural artisans directly, ensuring they get their fair share for their hard work."
        },
        {
            icon: "✨",
            title: "Purely Handmade",
            description: "No machines, just the magic of human hands and tradition passed down through generations."
        },
        {
            icon: "🌍",
            title: "Global Shipping",
            description: "Bringing the authentic taste of Bangladeshi heritage to your doorstep, no matter where you are."
        }
    ];

    return (
        <section className="py-20 bg-base-100 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <span className="h-[2px] w-8 bg-primary"></span>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">Why Handmade Haven</span>
                        <span className="h-[2px] w-8 bg-primary"></span>
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-secondary mt-4">
                        Crafted with <span className="italic">Purpose</span> & Passion
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-brand-accent/10 shadow-sm hover:shadow-md transition-shadow group text-center"
                        >
                            <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3 font-serif">
                                {feature.title}
                            </h3>
                            <p className="text-neutral/60 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}