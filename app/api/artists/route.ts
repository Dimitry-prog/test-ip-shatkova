import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') || '';
  const entity = searchParams.get('entity') || '';

  const response = await fetch(`https://itunes.apple.com/search?term=${search}&entity=${entity}`, {
    cache: 'force-cache',
  });
  const data = await response.json();

  return new NextResponse(JSON.stringify(data));
};
