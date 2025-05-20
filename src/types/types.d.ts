// types/next.d.ts
import 'next'

declare module 'next' {
  // You can expand this as needed
  interface PageProps {
    params: {
      fleetId: string
    }
  }
}
