export enum routes {
  ABOUT = '/about',
  DISCLAIMER = '/disclaimer',
  INDEX_HTML = '/index.html',
  PRIVATE_ROOM = '/private/:roomId',
  PUBLIC_ROOM = '/public/:roomId',
  ROOT = '/',
  SETTINGS = '/settings',
}

export const homepageUrl = new URL(
  process.env.REACT_APP_HOMEPAGE ?? 'https://chat-test-nine-psi.vercel.app/'
)
