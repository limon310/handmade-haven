
export default function HeroBanner() {
  return (
    <section className='w-full'>
    <div
      className="hero min-h-[85vh] relative"
      style={{
        backgroundImage: "url('https://i.postimg.cc/mZqyhQLS/handmade-artisan-(1).jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay bg-secondary/60"></div> 

      <div className="hero-content text-center text-white">
        <div className="max-w-2xl">
          {/* Accent color badge */}
          <span className="badge badge-accent font-semibold mb-4 px-4 py-3">
            100% Authentic Bangladeshi Craft
          </span>
          
          <h1 className="mb-5 text-5xl md:text-7xl font-bold font-serif leading-tight">
            Crafted with <span className="text-primary">Heart</span>, <br />
            Shared with You
          </h1>
          
          <p className="mb-8 text-lg md:text-xl opacity-90 font-light">
            Bringing the timeless heritage of Nakshi Kantha, Jamdani, and Pottery 
            straight from the rural artisans of Bangladesh to your home.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-primary btn-lg px-10 border-none shadow-lg">
              Shop Collection
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary btn-lg px-10">
              Meet Artisans
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}