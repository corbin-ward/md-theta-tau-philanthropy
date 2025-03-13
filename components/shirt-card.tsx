"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Clock } from "lucide-react"
import Link from "next/link"
import type { ShirtSale } from "@/lib/shirtData"

export default function ShirtCard({
  title,
  description,
  presaleEndDate,
  regularSaleEndDate,
  deliveryInfo,
  price,
  headerColor,
  buttons,
}: ShirtSale) {
  const isExternalLink = (url: string) => url.startsWith('http')
  const today = new Date()
  const presaleEnd = new Date(presaleEndDate + ", 2025")
  const isPresale = today <= presaleEnd
  
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
            <span>
              {isPresale 
                ? `Presale ends: ${presaleEndDate}` 
                : `Regular sale ends: ${regularSaleEndDate}`}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <DollarSign className="h-4 w-4 flex-shrink-0 text-theta-red" />
            <span>
              {isPresale 
                ? `Presale price: $${price.presale}` 
                : `Regular price: $${price.regular}`}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="h-4 w-4 flex-shrink-0 text-theta-red" />
            <span>{deliveryInfo}</span>
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