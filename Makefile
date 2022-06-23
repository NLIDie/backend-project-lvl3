install:
	npm install

ci:
	npm ci

start:
	node bin/page-loader.js

test:
	npm test

lint:
	npx eslint .

publish-test:
	npm publish --dry-run

publish:
	npm publish --access public

link:
	npm link

unlink:
	npm unlink