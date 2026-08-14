"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Tag, ExternalLink, BadgeCheck } from "lucide-react";

const AVATAR_MALE_1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80";
const AVATAR_MALE_2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80";
const AVATAR_FEMALE_1 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80";
const AVATAR_MALE_3 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80";
const AVATAR_FEMALE_2 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80";
const AVATAR_MALE_4 = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80";

const reviews = [
  {
    name: "Anand Singh",
    avatar: AVATAR_MALE_1,
    rating: 5,
    date: "2 months ago",
    review:
      "Best coaching institute with lowest fees in entire area of Shivpur and Gilat Bazar. The teachers are very dedicated and always ready to help. My daughter's result improved drastically after joining TRI-S CLASSES.",
    tag: "Coaching",
    verified: true,
  },
  {
    name: "Amit Sharma",
    avatar: AVATAR_MALE_2,
    rating: 5,
    date: "3 months ago",
    review:
      "Best coaching institute in shivpur area. Very knowledgeable faculty and excellent study material. The personal attention given to each student is remarkable. Highly recommended for JEE and NEET aspirants.",
    tag: "Talented Teachers",
    verified: true,
  },
  {
    name: "Harshita Singh",
    avatar: AVATAR_FEMALE_1,
    rating: 5,
    date: "1 month ago",
    review:
      "Great learning experience with dedicated teachers and excellent study material. The digital boards make complex topics very easy to understand. The staff is very polite and supportive.",
    tag: "Medical Coaching",
    verified: true,
  },
  {
    name: "Rahul Gupta",
    avatar: AVATAR_MALE_3,
    rating: 5,
    date: "4 months ago",
    review:
      "Outstanding coaching institute! The test series is very helpful and the doubt sessions are excellent. Faculty explains concepts very clearly. My JEE preparation improved significantly.",
    tag: "Coaching",
    verified: true,
  },
  {
    name: "Priya Mishra",
    avatar: AVATAR_FEMALE_2,
    rating: 5,
    date: "5 months ago",
    review:
      "Very satisfied with TRI-S CLASSES. Polite staff, supportive faculty, and a great learning environment. The fees are very reasonable for the quality of education provided.",
    tag: "Polite Staff",
    verified: true,
  },
  {
    name: "Sanjay Yadav",
    avatar: AVATAR_MALE_4,
    rating: 4,
    date: "6 months ago",
    review:
      "Good coaching center for foundation classes. My son is in class 9 and his understanding of Science and Maths has improved a lot. Teachers are patient and supportive.",
    tag: "Foundation",
    verified: true,
  },
];

const filterChips = ["All", "Coaching", "Medical Coaching", "Talented Teachers", "Polite Staff"];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${size === "lg" ? "w-6 h-6" : "w-4 h-4"} ${
            s <= rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-[#D1D5DB]"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? reviews
      : reviews.filter((r) => r.tag === activeFilter);

  return (
    <section id="reviews" className="py-16 md:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#D97706] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-[#D97706]" />
            Student Reviews
          </div>
          <h2 className="font-heading text-[22px] md:text-[36px] font-extrabold text-[#0F2C59] leading-tight">
            What Our Students &amp; Parents Say
          </h2>
          <p className="mt-2 text-[13px] sm:text-[15px] text-[#6B7280]">
            Rated{" "}
            <span className="text-[#F59E0B] font-bold">4.8</span>{" "}
            based on{" "}
            <span className="font-bold text-[#0F2C59]">79+ Reviews</span>{" "}
            on Google Maps
          </p>
        </div>

        {/* Rating Summary Box */}
        <div className="bg-white border border-[#EAE5DC] rounded-2xl card-shadow p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Big Score */}
            <div className="text-center flex-shrink-0">
              <div className="text-[64px] font-extrabold text-[#0F2C59] leading-none font-heading">4.8</div>
              <StarRating rating={5} size="lg" />
              <div className="text-[12px] text-[#6B7280] mt-1 font-semibold">out of 5</div>
            </div>

            {/* Bar Chart — hidden on mobile */}
            <div className="hidden sm:block flex-1 w-full space-y-2">
              {[
                { stars: 5, count: 72 },
                { stars: 4, count: 5 },
                { stars: 3, count: 1 },
                { stars: 2, count: 0 },
                { stars: 1, count: 1 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold text-[#374151] w-8 flex-shrink-0 flex items-center gap-0.5">
                    {row.stars}
                    <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                  </span>
                  <div className="flex-1 bg-[#F3F4F6] rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-[#F59E0B] rounded-full transition-all duration-700"
                      style={{ width: `${(row.count / 79) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[11px] text-[#9CA3AF] w-6 text-right">{row.count}</span>
                </div>
              ))}
            </div>

            {/* Google Badge */}
            <div className="text-center flex-shrink-0">
              <div className="w-14 h-14 bg-[#4285F4] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-1">G</div>
              <div className="text-[11px] text-[#6B7280] font-semibold">Google Reviews</div>
              <div className="text-[11px] text-[#6B7280]">79+ Reviews</div>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveFilter(chip)}
              className={`text-[13px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === chip
                  ? "bg-[#0F2C59] text-white border-[#0F2C59] shadow-md"
                  : "bg-white text-[#374151] border-[#EAE5DC] hover:border-[#0F2C59]/30 hover:text-[#0F2C59]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((review, i) => (
            <div
              key={i}
              className="bg-white border border-[#EAE5DC] rounded-2xl p-5 card-shadow card-shadow-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] text-[#0F2C59] flex items-center gap-1">
                      {review.name}
                      {review.verified && (
                        <BadgeCheck className="w-4 h-4 text-[#4285F4] fill-[#4285F4]/15" />
                      )}
                    </div>
                    <div className="text-[11px] text-[#9CA3AF]">{review.date}</div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#4285F4] rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  G
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="hidden sm:block mt-3 text-[13px] text-[#4B5563] leading-relaxed line-clamp-4">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold bg-[#1D4ED8]/10 px-2.5 py-1 rounded-full" style={{ color: "#1D4ED8" }}>
                <Tag className="w-3 h-3" />
                {review.tag}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to more reviews */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com/?cid=TRI-S-CLASSES-VARANASI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0F2C59] text-[#0F2C59] font-bold text-[14px] px-6 py-3 rounded-full hover:bg-[#0F2C59] hover:text-white transition-all duration-200 card-shadow"
          >
            <span>View All 79+ Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
