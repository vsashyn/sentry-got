# sentry-got

> Convenience wrapper for [Got](https://github.com/sindresorhus/got) to interact with the [Sentry API](https://docs.sentry.io/api/)

## Install

```
npm i sentry-got
```

## Usage

Instead of:

```js
const got = require('got');
const token = 'foo';

(async () => {
	const {body} = await got('https://sentry.io/api/0/projects/{organization_slug}/{project_slug}/events/', {
		headers: {
      'authorization': `Bearer ${token}`,
		}
	});
	console.log(body);
	//=> '[]'
})();
```

You can do:

```js
const sentryGot = require('sentry-got');

(async () => {
	const {body} = await sentryGot('projects/{organization_slug}/{project_slug}/events/', {token: 'foo'});
	console.log(body.events);
	//=> '[]'
})();
```

or pass `SENTRY_ENDPOINT` and `SENTRY_TOKEN` as environment variables.
