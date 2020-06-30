import axios from 'axios';

export const editFileService = {
    getContentFile,
    saveContentFile
}

 function getContentFile() {
    return axios.get(`/api/getcontentfile`)
    .then(resp => {
        return resp;
    }).catch(error=>{
         return error;
    });

}
function saveContentFile(state) {
    console.log(state)
    return axios.post(`/api/savefile`,state)
    .then(resp => {
        return resp;
    }).catch(error=>{
         return error;
    });

}
