import posts from './blog/_posts.js';
import { tags } from '../store/tags.js';


const lookup = new Map();
export function get(req, res) {

    const { slug } = req.params

    const actualTag = tags.filter(tag => slug == tag.slug) 

    const contents = {posts: posts.filter(x => x.tags.includes(actualTag[0].name)), actualTag};


    if(contents.posts.length > 0){

	res.end(JSON.stringify({
			message: `No posts under this category`
		}));

    res.end(JSON.stringify(contents));

    } else {
        res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `No posts under this category`
		}));
    }
}