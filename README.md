# Area Codes

Cross-platform area code lookup application built with Expo and React Native.

## Architecture

Nx monorepo with pnpm workspaces:

- `apps/mobile` - React Native mobile app (Expo Router)
- `apps/web` - Vite React web app
- `lib/shared-ui` - Shared component library

## Development

```sh
# Install dependencies
pnpm install

# Start mobile app
npx nx start mobile

# Build web app
npx nx build web

# Build mobile TypeScript
NX_DAEMON=false npx nx build mobile
```

## Mobile Builds

```sh
# Android preview (APK)
NX_DAEMON=false npx nx build-android-preview mobile

# iOS preview (Simulator)
NX_DAEMON=false npx nx build-ios-preview mobile
```

## Tech Stack

- Nx 22.0.1
- Expo SDK 52
- React 18.3.1
- React Native 0.73.11
- Node.js 20.19.5 (Volta)
- pnpm 9.4.0

## License

MIT
