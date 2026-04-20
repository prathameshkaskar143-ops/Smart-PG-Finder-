import { Target, Eye, Users, Shield, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All PGs are thoroughly verified to ensure safety and quality standards",
      color: "from-blue-8000 to-blue-500",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Designed specifically for students, understanding their unique needs",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Only the best accommodations with proper amenities make it to our platform",
      color: "from-violet-500 to-violet-1000 to-violet-400",
    },
    {
      icon: Heart,
      title: "Care & Support",
      description: "Dedicated support team to help you throughout your journey",
      color: "from-red-500 to-red-600",
    },
  ];

  const stats = [
    { number: "500+", label: "Verified PGs" },
    { number: "10,000+", label: "Happy Students" },
    { number: "50+", label: "Colleges Covered" },
    { number: "4.8/5", label: "Average Rating" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-4">
              About SPPU PG Finder
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connecting students with their ideal accommodation near Savitribai Phule Pune University
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.shiksha.com/mediadata/images/articles/1671164155phpXfBugt.jpeg"
                alt="Students studying together"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                SPPU PG Finder is a dedicated platform created by students, for students. We understand
                the challenges of finding the perfect accommodation when you're new to a city, far from
                home, and focused on your education.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our mission is to simplify the PG hunting process by providing verified, affordable, and
                convenient accommodation options near SPPU and its affiliated colleges. We ensure that
                every listing meets our quality standards and is suitable for student life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With features like college-based search, budget filters, and walking distance estimates,
                we make it easy for you to find a place that feels like home while you pursue your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide a reliable, student-friendly platform that connects students with safe,
                affordable, and convenient paying guest accommodations near SPPU. We aim to eliminate
                the stress and uncertainty from the PG hunting process, allowing students to focus on
                what truly matters - their education and personal growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and comprehensive accommodation platform for students across
                Pune, setting new standards in quality, transparency, and student support. We envision
                a future where every student can easily find their perfect home away from home, creating
                a supportive community that enhances their college experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              What drives us to serve students better every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            Built by Students, for Students
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            SPPU PG Finder is a Web Technology practical project developed by engineering students
            who experienced the challenges of finding suitable accommodation firsthand. We combined
            our technical skills with our understanding of student needs to create a platform that
            truly makes a difference.
          </p>
          <p className="text-gray-600 italic">
            "This project represents our commitment to using technology to solve real-world problems
            and help our fellow students have a better college experience."
          </p>
        </div>
      </section>
    </div>
  );
}
