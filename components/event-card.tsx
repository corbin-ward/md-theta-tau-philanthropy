import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/eventData"
import React from 'react'

export default function EventCard({ title, description, date, time, location, headerColor, buttons }: Event) {
  const isExternalLink = (url: string) => url.startsWith('http');

  
  return (
    <Card className="bg-white shadow-lg border-0 overflow-hidden group hover:shadow-xl transition-shadow">
      <CardHeader className={`text-white ${headerColor}`}>
        <CardTitle className="font-['Open_Sans'] uppercase text-lg font-extrabold tracking-widest-custom leading-none">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <CardDescription className="text-gray-600 font-['Helvetica']">{description}</CardDescription>

        <div className="flex flex-wrap gap-4 text-sm font-['Helvetica']">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="h-4 w-4 flex-shrink-0 text-theta-red" />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="h-4 w-4 flex-shrink-0 text-theta-red" />
            <span>{time}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="h-4 w-4 flex-shrink-0 text-theta-red" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            asChild
            className={`flex-1 ${headerColor} hover:opacity-90 text-white font-['Helvetica'] transition-colors`}
          >
            {isExternalLink(button.link) ? (
              <a href={button.link} target="_blank" rel="noopener noreferrer">
                {button.text}
              </a>
            ) : (
              <Link href={button.link}>
                {button.text}
              </Link>
            )}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}

