import posts from './blog/_posts.js';
import { tags } from '../store/tags.js';

export function get(req, res) {

    const { slug } = req.params

    const actualTag = tags.filter(tag => slug == tag.slug) 

    const contents = JSON.stringify({posts: posts.filter(x => x.tags.includes(actualTag[0].name)), actualTag});

	res.writeHead(200, {
        'Content-Type': 'application/json'
	});

	res.end(contents);
}