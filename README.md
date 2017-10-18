# getlink-frontend
[![Build Status](https://travis-ci.org/gkawin/getlink-frontend.svg?branch=master)](https://travis-ci.org/gkawin/getlink-frontend)

__check it out only on [click it softly](https://getlink-frontend.firebaseapp.com/) (hosting by Firebase)__

__I use those stacks to develop following by this list at down below__
- [Webpack](https://webpack.js.org)
- [React Bootstrap](https://react-bootstrap.github.io)
- [Styled Component](https://www.styled-components.com/)
- [Travis (CI & build & deploy)](https://travis-ci.org)

and those stuffs to build a modern web application.

# How to running on development mode
After you clone my PR and install yarn package was located in your local machine in global mode.
```
yarn
```

Then, If it finished. typing
```
yarn dev
```

Finally, your default browser will popup at url address like.
```
http://localhost:3000
```

# How to running on storybook mode
After you clone my PR and install yarn package was located in your local machine in global mode.
```
yarn
```

And then
```
yarn dev:ui
```

# How to build in production mode
I have 2 modes to build in the prodution environment either `build bundle file` or `have a look into bundle file`

Mode normal build
```
yarn build
```
Mode take a look into builed bundle
Why I have this. Because I wanna curious about builded bundle file that was contain the third party to make it big and slow for whole application.
```
yarn build:analyze
```

# options
Check code styled
```
yarn lint
```
 deploy (should have key in your local machine)
 ```
 yarn deploy
 ```
