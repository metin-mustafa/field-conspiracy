import * as api from './api.js';

const host = 'https://fieldconspiracy-1813-default-rtdb.europe-west1.firebasedatabase.app/';

api.settings.host = host;




export async function getArtistById(id){
    return await api.get(`${host}/artists/${id}.json`); 
}

export async function createNews(data){
    return await api.post(host + '/data/memes',data);
}

export async function editNews(id,data){
    return await api.put(host + '/data/memes/' + id,data);
}

export async function deleteArtist(id){
    return api.del(host + 'artists/'+`${id}.json`);

}

export async function getReleases(){
    return await api.get(host+ 'releases.json')
}

export async function getInstaVideos(){
    return await api.get(host + 'instaVideos.json');
}

export async function getArtists(){
    return await api.get(host + 'artists.json');
}

export async function getCreatives(){
    return await api.get(host + 'creatives.json');
}

export async function getBlogArticles(){
    return await api.get(host + 'blog.json');
}

export async function getShows(){
    return await api.get(host + 'shows.json');
}