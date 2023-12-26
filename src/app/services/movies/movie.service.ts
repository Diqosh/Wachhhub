import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private apiKey = '95f33f78f3msh0b794b4f7b0e667p1fed64jsne673bd642b87';

    constructor() {}

    async getMovies(pageUrl: string = '/titles', search: string, genre?: string) {
        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com${pageUrl}`,
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
            },
            ...(genre && {
                params: { genre, search },
            }),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getMovieDetails(movieId: string) {
        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getMovieComments(movieId: string) {
        const options = {
            method: 'GET',
            url: `https://json-api-diqosh-cf992770784d.herokuapp.com/comments?postId=${movieId}`,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createMovieComment(body: { body: string; postId: string; author: string }) {
        const options = {
            method: 'POST',
            url: `https://json-api-diqosh-cf992770784d.herokuapp.com/comments/`,
            data: body,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteMovieComment(id: number) {
        const options = {
            method: 'DELETE',
            url: `https://json-api-diqosh-cf992770784d.herokuapp.com/comments/${id}`,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async favMovie({ id, userName, title, imgUrl }: { id: number; userName: string; title: string; imgUrl: string }) {
        const options = {
            method: 'POST',
            url: `https://json-api-diqosh-cf992770784d.herokuapp.com/posts/${id}/favorite`,
            data: {
                username: userName,
                title,
                img_url: imgUrl,
            },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async unfavMovie({ id, userName }: { id: number; userName: string }) {
        const options = {
            method: 'DELETE',
            url: `https://json-api-diqosh-cf992770784d.herokuapp.com/posts/${id}/unfavorite`,
            data: { username: userName },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getMyFavoriteMovies() {
        const options = {
            method: 'GET',
            url: `https://json-api-diqosh-cf992770784d.herokuapp.com/users/${
                JSON.parse(localStorage.getItem('user') || '')?.id || 1
            }`,
        };

        try {
            const response = await axios.request(options);
            return response.data.favorites;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
