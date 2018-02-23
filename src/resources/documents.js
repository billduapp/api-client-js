module.exports = class Documents {
  constructor(http) {
    this.http = http;
  }

  listAll(page = 1, limit = 10, config = {}) {
    return this.http.get("/documents", { page, limit }, config);
  }

  get(id, config = {}) {
    return this.http.get(`/documents/${id}`, config);
  }

  create(data, config = {}) {
    return this.http.post("/documents/", data, config);
  }

  update(id, data, config = {}) {
    return this.http.patch(`/documents/${id}`, data, config);
  }

  delete(id, config = {}) {
    return this.http.delete(`/documents/${id}`, config);
  }

  download(id) {
    return this.http.get(`/documents/${id}/download`);
  }

  send(id, data) {
    return this.http.post(`/documents/${id}/send`, data);
  }

  search(criteria) {
    return this.http.get("/documents/", criteria);
  }

  
  getDownloadLink(id) {
    //request = this->curl->createRequest('GET', '/documents/' . id . '/download');
    //url	 = request->buildUrl();
    //return url;
    return 'not implemented';
  }
}
