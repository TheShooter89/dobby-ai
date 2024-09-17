run:
	bun run dev

build:
	bunx --bun vite build

deploy:
	bunx --bun vite build
	bun run deploy
