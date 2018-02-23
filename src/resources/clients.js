module.exports = class Clients {
  constructor(http) {
    this.http = http;
  }

  listAll(config = {}) {
    return this.http.get("/clients", config);
  }

  get(id, config = {}) {
    return this.http.get(`/clients/${id}`, config);
  }

  create(data, config = {}) {
    return this.http.post("/clients/", data, config);
  }

  update(id, data, config = {}) {
    return this.http.patch(`/clients/${id}`, data, config);
  }

  delete(id, config = {}) {
    return this.http.delete(`/clients/${id}`, config);
  }
};
