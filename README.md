# TEST TASK NODE WITH LAMBDA

<h2>Setup</h3>

<h4>1. setup mongodb locally</h2>
<h4>2. Install packages using yarn or npm </h2>

```
yarn install
```
<h4>or</h4>

```
npm i
```
<h4>3. Run project locally</h4>

```
yarn serve:watch
```


<h2>Project guidelines</h3>

<h4>1. In this project using serverless framework for managing lambda function</h2>
<h4>2. serverless.yml file is responsible for lambda function
<h4>3. Currently test function of GET type is there, also there is ENV variable 'MONGO_DB_URL' for connection to the mongo db</h4>
<h4>4. We are using middy for middleware, currently we have 'initDb' middleware initialise the connection to the mongodb</h4>
<h4>5. Currently we have test API in 'src/functions/test.js' </h4>

