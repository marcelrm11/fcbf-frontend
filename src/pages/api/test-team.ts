// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: {
      Squad_id: 1,
      Squad: 'Team A',
      Pl: 25,
      Age: 25,
      Poss: 60,
      MP: 10,
      Min: 900,
      Gls: 12,
      Ast: 10,
      PK: 3,
      PKatt: 5,
      CrdY: 8,
      CrdR: 1,
      Progression_PrgC: 100,
      Progression_PrgP: 200,
      Progression_PrgR: 150,
      Sh: 100,
      SoT: 60,
      Dist: 20,
      FK: 10,
      Passes_Cmp: 800,
      Passes_Att: 1000,
      Passes_TotDist: 5000,
      Passes_PrgDist: 2000,
      KP: 20,
      PPA: 30,
      SCA: 50,
      SCA_PassLive: 30,
      SCA_PassDead: 10,
      SCA_TO: 5,
      SCA_Sh: 5,
      SCA_Fld: 0,
      SCA_Def: 0,
      GCA: 20,
      GCA_PassLive: 15,
      GCA_PassDead: 3,
      GCA_TO: 2,
      GCA_Sh: 0,
      GCA_Fld: 0,
      GCA_Def: 0,
      Tkl: 200,
      Challenges_Tkl: 50,
      Challenges_Lost: 10,
      Blocks: 30,
      Err: 5,
    },
  });
}
