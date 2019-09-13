## Setup

The way I'm proving that the getProcessingPage function is working it is through unit test, there is not an interface to run the function, if you wish to run the function, you could use the chrome developer console, copy all the functions, and then run it like this
`getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode:'NO_STOCK' }]).then(done=>{console.log(done)})`, need then at the end as the function it is returning a promise.

Run

```
yarn to install dependencies
```

Then run:

```
yarn start will run the tests in a watch mode.
yarn test Launches the test runner
```
