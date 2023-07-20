import { PUBLIC_API_URL } from '$env/static/public';
import { writable } from 'svelte/store';

export interface IUser {
  id: string
  username: string
  avatar: string
  discriminator: string
  flags: number
  bannerColor: string
  accentColor: number
}

export const user = writable<IUser>()

export async function signInWithCode(code: string) {
  console.log(code)
  try {
    const res = await fetch(`${PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        code
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await res.json()

    if (json.data) {
      user.set({
        id: json.data.id,
        username: json.data.username,
        avatar: json.data.avatar,
        discriminator: json.data.discriminator,
        flags: json.data.flags,
        bannerColor: json.data.banner_color,
        accentColor: json.data.accent_color
      })
    }

  } catch(err) {
    console.error('Error on login',err)
  }
}
