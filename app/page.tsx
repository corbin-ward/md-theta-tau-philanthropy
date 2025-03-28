"use client"

import Header from "@/components/header"
import Leaderboard from "@/components/leaderboard"
import EventCard from "@/components/event-card"
import ShirtCard from "@/components/shirt-card"
import { eventData } from "@/lib/eventData"
import { shirtData } from "@/lib/shirtData"
import Image from "next/image"

export default function Home() {
  // Filter events based on date and time
  const today = new Date()
  const upcomingEvents = eventData.filter(event => {
    const eventDateTime = new Date(`${event.date}, ${event.time.split(' - ')[1]}`)
    return eventDateTime >= today
  })
  
  const pastEvents = eventData.filter(event => {
    const eventDateTime = new Date(`${event.date}, ${event.time.split(' - ')[1]}`)
    return eventDateTime < today
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/banner.png"
          alt="Build with the Bros. Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <p className="text-white text-xl md:text-2xl font-['Helvetica'] max-w-2xl text-center">
            Join us in making a difference through Habitat for Humanity
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-['Open_Sans'] text-2xl md:text-3xl font-extrabold text-theta-red uppercase tracking-widest-custom leading-none mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 font-['Helvetica'] text-lg">
          Established in 1976, Habitat for Humanity is a nonprofit organization committed to providing affordable housing for families in need. Mu Delta hosted our first annual philanthropy week for Habitat for Humanity in 2023 and we have been dedicated to raising money for this cause since!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <section>
            {/* Buy a Shirt - Left Column, Above Leaderboard */}
            <div className="mb-12">
              <h2 className="font-['Open_Sans'] text-2xl font-extrabold text-theta-red uppercase tracking-widest-custom leading-none mb-6">
                Buy a Shirt
              </h2>
              <div className="grid gap-6">
                <ShirtCard {...shirtData} />
              </div>
            </div>
            
            {/* Current Standings - Left Column, Below Shirt Presale */}
            <h2 className="font-['Open_Sans'] text-2xl font-extrabold text-theta-red uppercase tracking-widest-custom leading-none mb-6">
              Current Standings
            </h2>
            <Leaderboard />
          </section>
          
          {/* Upcoming Events - Right Column */}
          <section>
            <h2 className="font-['Open_Sans'] text-2xl font-extrabold text-theta-red uppercase tracking-widest-custom leading-none mb-6">
              Upcoming Events
            </h2>
            <div className="grid gap-6">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))
              ) : (
                <p className="text-gray-600 font-['Helvetica']">No upcoming events at this time.</p>
              )}
            </div>
            
            {/* Previous Events - Right Column, Below Upcoming Events */}
            {pastEvents.length > 0 && (
              <>
                <h2 className="font-['Open_Sans'] text-2xl font-extrabold text-theta-red uppercase tracking-widest-custom leading-none mb-6 mt-12">
                  Previous Events
                </h2>
                <div className="grid gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}