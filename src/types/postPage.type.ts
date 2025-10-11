import { Page } from "./page.type";
import { Post } from "./post.type";

export interface PostPage extends Page {
    posts: Post[]
}