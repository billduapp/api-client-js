const axios = require("axios");

const createSignature = require("./createSignature");
const Clients = require("./resources/clients");
const Products = require("./resources/products");
const Documents = require("./resources/documents");

module.exports = class Client {
  constructor({ host, apiKey, apiSecret }) {
    const httpClient = axios.create({
      baseURL: host
    });

    httpClient.interceptors.request.use(config => {
      const timestamp = Math.floor(new Date().getTime() / 1000);
      const data = config.data === undefined ? {} : JSON.parse(config.data);
      const signature = encodeURIComponent(
        createSignature(data, apiKey, apiSecret, timestamp)
      );
      config.url += `?apiKey=${apiKey}&timestamp=${timestamp}&signature=${signature}`;

      return config;
    });

    this.clients = new Clients(httpClient);
    this.products = new Products(httpClient);
    this.documents = new Documents(httpClient);

    this.httpClient = httpClient;
  }

  getHttpClient() {
    return this.httpClient;
  }
};
