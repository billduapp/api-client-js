module.exports = class Products {
  constructor(http) {
    this.http = http;
  }

  listAll(config = {}) {
    return this.http.get("/products", config);
  }

  get(id, config = {}) {
    return this.http.get(`/products/${id}`, config);
  }

  create(data, config = {}) {
    return this.http.post("/products/", data, config);
  }

  update(id, data, config = {}) {
    return this.http.patch(`/products/${id}`, data, config);
  }

  delete(id, config = {}) {
    return this.http.delete(`/products/${id}`, config);
  }
}
