# Projeteiro

A task tracking website.

The idea is that everything is stored locally, in plain JSON files that can be seen and edited
manually if needed. There's not really a solid reason to not use a database for it, I just wanted
to try and see what it would look like to rely on plain files.

## Setting it up on your machine

If you're interested in running the app on your end, you'll need a few steps to get it going.

First of all, make sure you have [Node](https://nodejs.org) installed. If you intend on making a PR,
[Yarn](https://classic.yarnpkg.com) v1.x.x is also strongly recommended so that the package lock file can remain the same, to ensure  no conflicts with package-lock.json are introduced.

What you'll need to do next is install the dependencies for the client and for the server. This can be done by `cd`-ing into those folders and running `npm i` or `yarn`. After that's done, a `yarn start` will get the front-end running and a `yarn start:dev` will get the API server up.