interface OrgData {
  name: string;
  points: number;
  size: string;
  type: string;
}

export async function getSheetData(): Promise<OrgData[]> {
  try {
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const RANGE = "'Website Data'!A2:D";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url, { next: { revalidate: 300 } });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch sheet data: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows) {
      return [];
    }

    const orgData: OrgData[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row[0] && row[0] !== 'Name') {
        orgData.push({
          name: row[0],
          type: row[1],
          size: row[2],
          points: Number(row[3] || 0)
        });
      }
    }

    // Sort by points first, then alphabetically for ties
    const sortedData = orgData.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      return a.name.localeCompare(b.name);
    });

    return sortedData;
  } catch (error) {
    console.error('Error in getSheetData:', error);
    return [];
  }
}