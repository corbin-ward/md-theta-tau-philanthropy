import { useEffect, useState } from 'react';
import { getSheetData } from '@/lib/orgSheets';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

interface OrgData {
  name: string;
  points: number;
  size: string;
  type: string;
}

export default function Leaderboard() {
  const [organizations, setOrganizations] = useState<OrgData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('All Sizes');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [visibleItems, setVisibleItems] = useState(5);
  
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const sizes = ['All Sizes', 'Smaller', 'Small', 'Large', 'Larger'];
  const types = ['All Types', 'Club', 'Fraternity', 'Professional', 'Sorority'];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSheetData();
        setOrganizations(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load leaderboard data');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Reset visible items when filters change
  useEffect(() => {
    setVisibleItems(5);
  }, [selectedSize, selectedType]);

  const filteredOrganizations = organizations.filter(org => 
    (selectedSize === 'All Sizes' || org.size === selectedSize) &&
    (selectedType === 'All Types' || org.type === selectedType)
  );

  const displayedOrganizations = isDesktop 
    ? filteredOrganizations 
    : filteredOrganizations.slice(0, visibleItems);

  const handleShowMore = () => {
    setVisibleItems(prev => prev + 5);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card className="bg-white shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-theta-red text-white">
        <CardTitle className="font-['Open_Sans'] uppercase text-lg font-extrabold tracking-widest-custom leading-none">
          Organizations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex gap-4 mb-4">
          <Select onValueChange={setSelectedType} value={selectedType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select organization type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedSize} value={selectedSize}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select size category" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-gray-50">
              <TableHead className="font-['Helvetica'] text-gray-900">Organization</TableHead>
              <TableHead className="text-right font-['Helvetica'] text-gray-900">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedOrganizations.map((org, index) => (
              <TableRow
                key={org.name}
                className={`hover:bg-gray-50 ${index === 0 ? "bg-yellow-50" : ""}`}
              >
                <TableCell className="font-['Helvetica']">{org.name}</TableCell>
                <TableCell className="text-right font-['Helvetica'] font-bold">
                  {org.points.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {!isDesktop && filteredOrganizations.length > visibleItems && (
          <div className="mt-4 text-center">
            <Button 
              onClick={handleShowMore}
              variant="outline"
              className="w-full"
            >
              Show More
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}