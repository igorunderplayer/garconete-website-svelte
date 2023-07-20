import { PUBLIC_API_URL } from '$env/static/public'
import type { PageLoad } from './$types';

interface Command {
  name: string;
  description: string;
}

export const load = (async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_API_URL}/commands`)
  const data = await res.json()

  return {
    commands: data.data as Command[]
  }
}) satisfies PageLoad;


