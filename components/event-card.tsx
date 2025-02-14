import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
  id: string
  title: string
  description: string
  formLink: string
}

export default function EventCard({ id, title, description, formLink }: EventCardProps) {
  return (
    <Card className="bg-white shadow-lg border-0 overflow-hidden group hover:shadow-xl transition-shadow">
      <CardHeader className="bg-theta-red text-white">
        <CardTitle className="font-['Open_Sans'] uppercase text-lg font-extrabold tracking-widest-custom leading-none">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <CardDescription className="text-gray-600 font-['Helvetica']">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-theta-red hover:bg-red-800 text-white font-['Helvetica'] transition-colors"
        >
          <Link href={formLink}>Register Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

