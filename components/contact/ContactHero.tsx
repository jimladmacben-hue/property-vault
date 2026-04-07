export default function ContactHero() {
  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 drop-shadow-md">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-white/80 font-medium">
          <span className="hover:text-white transition-colors cursor-pointer">Home</span>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white">Contact us</span>
        </p>
      </div>
    </section>
  );
}
