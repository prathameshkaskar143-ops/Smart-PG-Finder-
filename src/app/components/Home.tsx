import { Link } from "react-router";
import { Search, MapPin, Star, ArrowRight, IndianRupeeIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Search,
      title: "College-Based Search",
      description: "Find PGs near your specific college campus within SPPU area",
      color: "from-blue-600 to-blue-200",
    },
    {
      icon: IndianRupeeIcon,
      title: "Budget Filter",
      description: "Filter accommodations based on your budget range (₹3000-₹9000)",
      color: "from-green-600 to-green-200",
    },
    {
      icon: MapPin,
      title: "Walking Distance Estimation",
      description: "Know exactly how far your PG is from campus with walking time estimates",
      color: "from-orange-600 to-orange-200",
    },
  ];

  const testimonials = [
    {
      name: "Mr. Shubham Yeole",
      college: "Engineering Student, ICEM",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEZbuycyiZqVA/profile-displayphoto-crop_800_800/B4DZzzMcsNH4AQ-/0/1773606655310?e=1777507200&v=beta&t=QkR_obJ8C8Hg4oY64Ti1aZzdU9qw9X4LbePjUdZXtvs",
      text: "Found the perfect PG within walking distance from my college. The budget filter was super helpful!",
      rating: 4,
    },
    {
      name: "Rameez Sarguru",
      college: "MIT ADT University, SPPU",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEnOW0fRErssA/profile-displayphoto-shrink_800_800/B56ZNsMLCJGkAc-/0/1732686951544?e=1777507200&v=beta&t=ssBIBAKWfU8DByJG-NxcsfiH1riJWkla_9H2Iy95Nvs",
      text: "Amazing platform! All PGs are verified and the mess ratings helped me choose the best one.",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      college: "CS Student, VIT Pune",
      image: "https://media.licdn.com/dms/image/v2/D5635AQEhU1a6LECfgQ/profile-framedphoto-shrink_800_800/B56Z1jklu7KYAg-/0/1775492029666?e=1776538800&v=beta&t=d_TJ9HB742-rakxD8wH9DR8L9ox5GWwrgmGzRcB3hoA",
      text: "Very user-friendly interface. Found a great PG with excellent food facilities near my college.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-6 leading-tight">
                Find the Perfect PG Near SPPU
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Affordable, Verified, Student-Friendly Stays
              </p>
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-xl hover:bg-[#1d4ed8] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="text-lg">Explore PGs</span>
                <ArrowRight className="w-7 h-5" />
              </Link>
              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>500+ Verified PGs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>10,000+ Happy Students</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8nKRHBndyQhCJ5OCu4C7qseSvBPuOwkeIw&shttps://images.shiksha.com/mediadata/images/1701751459phpTLFiMk.jpeghttps://images.shiksha.com/mediadata/images/1701751459phpTLFiMk.jpeg"
                  alt="Student Housing"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1E293B]">4.8/5</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Why Choose SPPU PG Finder?
            </h2>
            <p className="text-lg text-gray-600">
              Designed specifically for students, by students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from real students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.college}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find Your Ideal PG?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of students who found their perfect stay
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg text-lg font-semibold"
          >
            <span>Start Your Search</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}



hii new feature