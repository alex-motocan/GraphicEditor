import api from "./apiInstance";

const modelApi = {
    getModels(id){
      return api.get(`brands/${id}/models`);
    },
    deleteModel(id){
      return api.delete(`/models/${id}`);
    },
    createModel(body){
      return api.post('/models', body);
    },
    updateModel(id, body){
      return api.put(`/models/${id}`, body);
    },
    getBrands(){
      return api.get('/brands');
    },
    deleteBrands(id){
      return api.delete(`/brands/${id}`);
    },
    createBrand(body){
      return api.post(`/brands`, body);
    },
    updateBrand(id, body){
      return api.put(`/brands/${id}`, body);
    },
}

export default modelApi;