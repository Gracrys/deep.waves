// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.



const posts = [
	{
		title: 'A trip in lsd',
		slug: 'lsd',
		img: '/blog/lsd.jpg',
		tags:  ["#review", "#pop"],
		summary: 'A psychodelical trip into an emotional and surrealist world of colours and flavors from three known artists, a new arrival of bubblegum pop and neo-psychodelia.',
		html: `
			<p>The most expected album of the year, atleast for me, <b> LSD </b> came in April,12 and broke out all the expectations with a fresh syle and innovative.</p>
			<p> Got a nice audience since its single <b> Genius </b>, a neo psychodelic style with the soft melodies of <b> Sia </b> and <b> Labyrinth </b> along with a great harmony from <b> Diplo </b> and some catchy-pop lyrics, that, until now i cant stop singing them in the shower.
			<p> With the arrival of <b> Thunderclouds </b> they had paved a road, i expected a conceptual album, and the video came to me for surprise, a surrealist interpretation of the principal characters of the album, and, at the same time, a new path to follow by each one of the pilars of this story </p>
			<p> This album, when i first listened to it, it was unexpected, i got myself inmersed into a experimental melody of neo-psychodelia with a presentation like that of <i> some kind of magic </i> or <i> Welcome to the world of plastic beach </i> both from gorillaz, the presentation of a new world, showing o you a new musical product unique and amazing you with some guitar riffs just arriving the first song <b> Welcome to the wonderful world of </b>. The voices created an ambient and great melody, with lyrics talking about world and trips with a twist, some songs depicting that feelings are <b> Thunderclouds </b>, <b> Its Time </b> and <b> Genius </b>,
			this masterpiece consists in a return of what was the bubblegum pop of the 80s with some subtle voices from <b> Sia </b> electronic melodies from <b> Diplo </b> and at the same time modern rythmn with some effects like glitch and danceable sounds.
			A sweet rythmn floats all over the album and waves between sweet tones and happy ones, each songs leaves you wanting for more and you can feel it, not only as a pop danceable song, but even more, in the emotional spectrum </p>
			<p> This album could make a difference, bringing back that psychodelic style, like that of tame imapala or with that acid style of grimes, and even, influentiate many bands from the pop genre... </p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		img: '/blog/ghosts-locusts.jpg',
		tags:  ["#review"],
		summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue neque sit amet arcu volutpat vehicula. Proin ultricies vel lorem sed porta. Donec et facilisis risus. Maecenas efficitur justo vitae ex interdum, quis lobortis mi rhoncus. ',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		tags:  ["#review"],
		summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue neque sit amet arcu volutpat vehicula. Proin ultricies vel lorem sed porta. Donec et facilisis risus. Maecenas efficitur justo vitae ex interdum, quis lobortis mi rhoncus. Phasellus vel magna orci. Sed convallis ipsum quis nibh porta tempus. Sed nec vulputate erat. In faucibus, sem eu feugiat tincidunt, nibh nibh auctor neque, id bibendum tortor turpis eu ipsum. Phasellus at ultricies velit, a egestas lorem. Ut elementum a eros et sodales. Donec accumsan risus ac massa blandit molestie. Nam rhoncus, dolor euismod gravida bibendum, turpis ipsum ultricies massa, non rhoncus arcu ex vitae nibh. Aenean eu posuere libero, eget finibus augue. ',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		tags:  ["#review"],
		summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue neque sit amet arcu volutpat vehicula. Proin ultricies vel lorem sed porta. Donec et facilisis risus. Maecenas efficitur justo vitae ex interdum, quis lobortis mi rhoncus. Phasellus vel magna orci. Sed convallis ipsum quis nibh porta tempus. Sed nec vulputate erat. In faucibus, sem eu feugiat tincidunt, nibh nibh auctor neque, id bibendum tortor turpis eu ipsum. Phasellus at ultricies velit, a egestas lorem. Ut elementum a eros et sodales. Donec accumsan risus ac massa blandit molestie. Nam rhoncus, dolor euismod gravida bibendum, turpis ipsum ultricies massa, non rhoncus arcu ex vitae nibh. Aenean eu posuere libero, eget finibus augue. ',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		tags:  ["#review"],
		img: '',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];



export default posts;
