// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const footballTeams = [
  { id: 1, name: 'Real Madrid' },
  { id: 2, name: 'Barcelona' },
  { id: 3, name: 'Manchester United' },
  { id: 4, name: 'Liverpool' },
  { id: 5, name: 'Bayern Munich' },
  { id: 6, name: 'Paris Saint-Germain' },
  { id: 7, name: 'Chelsea' },
  { id: 8, name: 'Manchester City' },
  { id: 9, name: 'Juventus' },
  { id: 10, name: 'AC Milan' },
];

type Data = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: footballTeams });
}
