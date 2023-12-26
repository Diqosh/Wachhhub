import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
    selector: 'app-my-list',
    templateUrl: './my-list.component.html',
    styleUrls: ['./my-list.component.css'],
})
export class MyListComponent {
    favorites: any[] = [];
    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.fetchFavoriteMovies();
    }

    fetchFavoriteMovies() {
        this.movieService.getMyFavoriteMovies().then((res) => {
            this.favorites = res;
        });
    }

    removeFromMyList(id: number) {
        const author = JSON.parse(localStorage.getItem('user') || '')?.name || 'dimash1234';

        this.movieService.unfavMovie({ id, userName: author }).then(() => this.fetchFavoriteMovies());
    }
}
