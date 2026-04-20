import { useState } from "react";
import { Star, MapPin, Clock, Filter, X, RefreshCw } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PG {
  id: number;
  name: string;
  image: string;
  price: number;
  distance: string;
  walkingTime: string;
  messRating: number;
  college: string;
}

const allPGs: PG[] = [
  {
    id: 1,
    name: "Shree Ganesh PG",
    image: "http://www.pgnow.co.in/images/pn89.JPG",
    price: 5500,
    distance: "0.8 km",
    walkingTime: "10 min",
    messRating: 4.5,
    college: "PICT",
  },
  {
    id: 2,
    name: "Green Valley Hostel",
    image: "https://tse4.mm.bing.net/th/id/OIP.8NgV9uCeVzUfRDlhYzyLqgHaEK?pid=Api&P=0&h=180",
    price: 6000,
    distance: "1.2 km",
    walkingTime: "15 min",
    messRating: 5,
    college: "VIT",
  },
  {
    id: 3,
    name: "Student's Paradise",
    image: "https://images.nobroker.in/images/8a9f91038fb94b7f018fb954ec690289/8a9f91038fb94b7f018fb954ec690289_41046_750031_medium.jpg",
    price: 4500,
    distance: "0.5 km",
    walkingTime: "6 min",
    messRating: 4,
    college: "PICT",
  },
  {
    id: 4,
    name: "Comfort Zone PG",
    image: "http://queenspg.com/assets/images/home/banner_q2_2s.jpeg",
    price: 3500,
    distance: "1.5 km",
    walkingTime: "18 min",
    messRating: 3.5,
    college: "BMCC",
  },
  {
    id: 5,
    name: "Elite Residency",
    image: "https://zolostays.com/blog/wp-content/uploads/2023/12/8.jpg",
    price: 7500,
    distance: "0.3 km",
    walkingTime: "4 min",
    messRating: 5,
    college: "VIT",
  },
  {
    id: 6,
    name: "Sunrise PG",
    image: "https://images.nobroker.in/images/8a9f88238f9c892e018f9ca7609b02d0/8a9f88238f9c892e018f9ca7609b02d0_49149_240456_medium.jpg ",
    price: 4000,
    distance: "1.0 km",
    walkingTime: "12 min",
    messRating: 4,
    college: "SPPU Main Campus",
  },
  {
    id: 7,
    name: "Modern Living PG",
    image: "https://zolostays.com/blog/wp-content/uploads/2024/02/DSC03155_6_7-scaled.jpg",
    price: 5000,
    distance: "0.7 km",
    walkingTime: "9 min",
    messRating: 4.5,
    college: "BMCC",
  },
  {
    id: 8,
    name: "Budget Stay",
    image: "https://ssbhomes.co.in/images/5.png",
    price: 3000,
    distance: "2.0 km",
    walkingTime: "25 min",
    messRating: 3,
    college: "PICT",
  },
  {
    id: 9,
    name: "COEP Residence",
    image: "https://images.unsplash.com/photo-1676152466751-054c5cb0af27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjByb29tJTIwYnVuayUyMGJlZHN8ZW58MXx8fHwxNzcxODcxMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 5200,
    distance: "0.9 km",
    walkingTime: "11 min",
    messRating: 4.5,
    college: "COEP",
  },
  {
    id: 10,
    name: "COEP Prime PG",
    image: "http://www.northcampusgirlspg.com/files/gallery/album/16082018134825.JPG",
    price: 6500,
    distance: "1.1 km",
    walkingTime: "14 min",
    messRating: 4.8,
    college: "COEP",
  },
  {
    id: 11,
    name: "MIT Comfort Stay",
    image: "https://static.wixstatic.com/media/741467_4dc0682d201f4a67b71e56963318630a~mv2.jpeg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/741467_4dc0682d201f4a67b71e56963318630a~mv2.jpeg",
    price: 4800,
    distance: "1.3 km",
    walkingTime: "16 min",
    messRating: 4.2,
    college: "MIT",
  },
  {
    id: 12,
    name: "MIT Living Space",
    image: "https://www.jlcoliving.in/wp-content/uploads/2024/04/room2.jpg",
    price: 5600,
    distance: "0.6 km",
    walkingTime: "8 min",
    messRating: 4.3,
    college: "MIT",
  },
  {
    id: 13,
    name: "Symbiosis Scholar Lodge",
    image: "https://arcticstays.in/img/marol-6.webp",
    price: 7000,
    distance: "1.4 km",
    walkingTime: "17 min",
    messRating: 4.7,
    college: "Symbiosis",
  },
  {
    id: 14,
    name: "Symbiosis Haven",
    image: "https://nomadsliving.in/wp-content/uploads/2021/09/nomads-ladies-pg-jayanagar-near-metro-station.jpeg",
    price: 8000,
    distance: "1.6 km",
    walkingTime: "20 min",
    messRating: 4.9,
    college: "Symbiosis",
  },
  {
    id: 15,
    name: "DIT Student Hub",
    image: "https://www.aryapg.com/images/home1.jpg",
    price: 4600,
    distance: "0.4 km",
    walkingTime: "5 min",
    messRating: 4.1,
    college: "DIT",
  },
  {
    id: 16,
    name: "DIT Premier Stay",
    image: "https://i.pinimg.com/736x/0d/97/e2/0d97e28f7b41ed3d47a329aece99b93b.jpg",
    price: 5900,
    distance: "1.1 km",
    walkingTime: "13 min",
    messRating: 4.4,
    college: "DIT",
  },
  {
    id: 17,
    name: "Fergusson Hostel",
    image: "https://preview.redd.it/best-pg-near-delhi-university-north-campus-v0-hy4mzhfuwkec1.jpg?width=1280&format=pjpg&auto=webp&s=58ac4c841c7b4be3bb3fa1fed23296fc05ec1cc6",
    price: 4300,
    distance: "1.2 km",
    walkingTime: "15 min",
    messRating: 4,
    college: "Fergusson College",
  },
  {
    id: 18,
    name: "Fergusson Elite PG",
    image: "https://www.tenanto.in/property_uploads/WhatsApp%20Image%202023-07-04%20at%202.22.46%20PM_1688462580.jpeg",
    price: 5800,
    distance: "0.8 km",
    walkingTime: "10 min",
    messRating: 4.6,
    college: "Fergusson College",
  },
  {
    id: 19,
    name: "SPPU Central Lodge",
    image: "https://nearbyinfo.in/wp-content/uploads/2025/10/VINAYAKA-BOYS-PG-Udupi-7.jpg",
    price: 5100,
    distance: "0.2 km",
    walkingTime: "2 min",
    messRating: 4.8,
    college: "Savitribai Phule Pune University",
  },
  {
    id: 20,
    name: "SPPU University Stay",
    image: "https://www.payingguestinbengaluru.com/PG-in-Bangalore-Assets/Paying%20Guest%20Images/Lalitha%20Homes/Lalitha%20Homes%20www.payingguestinbengaluru.com%20(3).jpeg",
    price: 6200,
    distance: "0.5 km",
    walkingTime: "7 min",
    messRating: 4.7,
    college: "Savitribai Phule Pune University",
  },
  {
    id: 21,
    name: "DY Patil Residence",
    image: "https://www.tenanto.in/property_uploads/07_1673343052.jpg",
    price: 5300,
    distance: "1.5 km",
    walkingTime: "18 min",
    messRating: 4.3,
    college: "Dr. D.Y. Patil University",
  },
  {
    id: 22,
    name: "DY Patil Premium Stay",
    image: "https://arcticstays.in/img/mh-5.webp",
    price: 6800,
    distance: "1.8 km",
    walkingTime: "22 min",
    messRating: 4.5,
    college: "Dr. D.Y. Patil University",
  },
  {
    id: 23,
    name: "SPPU Main Campus Second PG",
    image: "https://www.tenanto.in/property_uploads/1_1746517108.jpeg",
    price: 5400,
    distance: "0.8 km",
    walkingTime: "10 min",
    messRating: 4.4,
    college: "SPPU Main Campus",
  },
];

const colleges = [
  "All Colleges",
  "PICT",
  "VIT",
  "BMCC",
  "SPPU Main Campus",
  "COEP",
  "MIT",
  "Symbiosis",
  "ICEM",
  "Fergusson College",
  "Savitribai Phule Pune University",
  "Dr. D.Y. Patil University",
];

export function Rooms() {
  const [selectedCollege, setSelectedCollege] = useState("All Colleges");
  const [budgetRange, setBudgetRange] = useState([3000, 9000]);
  const [minMessRating, setMinMessRating] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredPGs = allPGs.filter((pg) => {
    const collegeMatch = selectedCollege === "All Colleges" || pg.college === selectedCollege;
    const budgetMatch = pg.price >= budgetRange[0] && pg.price <= budgetRange[1];
    const ratingMatch = pg.messRating >= minMessRating;
    return collegeMatch && budgetMatch && ratingMatch;
  });

  const FilterPanel = () => (
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-[#1E293B]">Filters</h3>
        <button
          onClick={() => setMobileFiltersOpen(false)}
          className="md:hidden p-1 hover:bg-gray-100 rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* College Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#1E293B] mb-3">
          Select College
        </label>
        <select
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white"
        >
          {colleges.map((college) => (
            <option key={college} value={college}>
              {college}
            </option>
          ))}
        </select>
      </div>

      {/* Budget Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#1E293B] mb-3">
          Budget Range
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min="3000"
            max="9000"
            step="500"
            value={budgetRange[1]}
            onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value)])}
            className="w-full accent-[#2563EB]"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">₹{budgetRange[0]}</span>
            <span className="font-semibold text-[#2563EB]">₹{budgetRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Mess Rating Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#1E293B] mb-3">
          Minimum Mess Rating
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => setMinMessRating(rating)}
              className={`flex-1 py-2 rounded-lg transition-all ${
                minMessRating === rating
                  ? "bg-[#2563EB] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {rating}★
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setSelectedCollege("All Colleges");
          setBudgetRange([3000, 9000]);
          setMinMessRating(1);
        }}
        className="w-full py-2.5 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors font-medium flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Reset Filters</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-2">
            Available PGs Near SPPU
          </h1>
          <p className="text-gray-600">
            {filteredPGs.length} properties found
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-white py-3 rounded-xl shadow-md text-[#1E293B] font-medium"
          >
            <Filter className="w-5 h-5" />
            <span>Show Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block">
            <FilterPanel />
          </div>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
              <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-gray-50 overflow-y-auto">
                <div className="p-4">
                  <FilterPanel />
                </div>
              </div>
            </div>
          )}

          {/* PG Cards Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPGs.map((pg) => (
                <div
                  key={pg.id}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  {/* Demo ribbon */}
                  <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                    DEMO
                  </div>
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={pg.image}
                      alt={pg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-[#2563EB]">₹{pg.price}/mo</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      {pg.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-[#2563EB]" />
                        <span>{pg.distance} from {pg.college}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>{pg.walkingTime} walking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Mess Rating:</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(pg.messRating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : i < pg.messRating
                                  ? "fill-yellow-400/50 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-[#1E293B]">
                          {pg.messRating}
                        </span>
                      </div>
                    </div>
                    <button className="w-full bg-[#2563EB] text-white py-2.5 rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPGs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                  No PGs Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to see more options
                </p>
                <button
                  onClick={() => {
                    setSelectedCollege("All Colleges");
                    setBudgetRange([3000, 9000]);
                    setMinMessRating(1);
                  }}
                  className="px-6 py-2.5 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
