import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
    comments: any = [];
    commentInput: string = '';
    authorNickname: string = '';
    hideCommentArrow: boolean = false;

    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.fetchMovieComments();
        const author = JSON.parse(localStorage.getItem('user') || '')?.name || 'dimash1234';
        this.authorNickname = author;
    }

    fetchMovieComments() {
        const id = location.pathname.split('/').pop() || 'tt0000081';

        this.movieService.getMovieComments(id).then((data: any) => {
            if (data && data?.length > 0) this.comments = data;
        });
    }

    leaveComment() {
        const author = JSON.parse(localStorage.getItem('user') || '')?.name || 'dimash1234';
        const postId = location.pathname.split('/').pop() || 'tt0000081';

        this.movieService
            .createMovieComment({
                author,
                body: this.commentInput,
                postId,
            })
            .then(() => (this.commentInput = ''))
            .catch(() => console.log('error'))
            .finally(() => this.fetchMovieComments());
    }

    clearComment() {
        this.commentInput = '';
    }

    deleteComment(id: number) {
        this.movieService.deleteMovieComment(id).then(() => this.fetchMovieComments());
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        const scrollThreshold = 200;
        this.hideCommentArrow = window.scrollY > scrollThreshold;
    }

    scrollToElement($element: any): void {
        $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}
