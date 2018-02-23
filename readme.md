# Billdu API Client

## Installation

Using npm:

```bash
npm install billdu-client
```

Using yarn:

```bash
yarn add billdu-client
```

## Client instantiation

You can find api key and api secret in Settings -> API in Billdu web app

```js
const BillduClient = require("billdu-client");

const host = "http://api.billdu.com";
const apiKey = "YOUR_API_KEY";
const apiSecret = "YOUR_API_SECRET";

const billdu = new BillduClient({ host, apiKey, apiSecret });
```

## Usage

You can access the underlying http client axios like this

```js
billdu.getHttpClient();
```

To manipulate clients you can use the clients object

```js
billdu.clients;

billdu.clients.listAll();
billdu.clients.get(id);
billdu.clients.create(data);
billdu.clients.update(id);
billdu.clients.delete(id);
```

To manipulate products you can use the products object

```js
billdu.products;
billdu.products.listAll();
billdu.products.get(id);
billdu.products.create(data);
billdu.products.update(id);
billdu.products.delete(id);
```

To manipulate documents you can use the documents object

```js
billdu.documents;
billdu.documents.listAll();
billdu.documents.get(id);
billdu.documents.create(data);
billdu.documents.update(id);
billdu.documents.delete(id);
```
You can also pass an axios config object as the last argument to all methods

All methods return a promise