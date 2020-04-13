import showdown from 'showdown';

const converter = new showdown.Converter()

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.



const posts = [
	{
		title: 'Nothing - Dance on the Blacktop',
		img: '/blog/nothing.jpg',
		slug: 'nothing',
		summary: 'A new wave of darkgaze is getting into the sounds of doom metal, black and others...',
		tags: ['#obscure','#noise', '#doom'],
		md: `
Well first thing first, i love **RelapseRecords** I mean, they have brought many doom - stoner bands like **Red fang** or **Kylesa** and **nothing** is not an exception of that style, A doom style into a blackgaze band, the vocals are great, raw and changing, and just a velvet cape of noise mesmerizes your senses with energy of black and doom metal, great  stuff, feels harsh, at the kind of solstafir but at the same time not tha heavy like you would get from the first albums of solstafir or merzbow.

`
,
		html: ''

	},
	{
		title: 'Skating Polly - Fuzz Steilacoom',
		slug: 'Skating-polly',
		img: '/blog/skating-polly.jpeg',
		tags: ['#obscure', '#review', '#grunge', '#garage'],
		summary : 'Grunge, Teen angst, and all that from a group of highschool teenagers',
		md: `This album made me rethink about if grunge is really dead, maybe it is, but this, is a new wave for it, and would strike again the charts.

		I dont say that this album would become a top seller, but has the energy, the emotion, the production, of a good grunge-garage rock album, even for a sixteen girl and her friends, the fuzz of the guitars feel excelent, invigorant, the drums remind me of dave grohl, has that **hole** energy, but i kind of like this artist over hole... (not a big fan of Courtney) The vocals are soft, tender when they have to be, overall in the other albums, being this one the most hard of them all, with sturdy vocals, hard screams, and a wall of noise that pushes you over.`,
		html: `
`
	},
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
		title: 'Ghosts V - VI ',
		slug: 'Ghosts',
		img: '/blog/ghosts-locusts.jpg',
		tags:  ["#review", "#dark-ambient" ],
		summary: 'The dark continuation to one of the most powerful pieces in the genre of dark ambient',
		html: `
			<h4>Ghosts V - Together</h4>
			<h4>Ghosts VI - Locusts</h4>
			<p>The first time i listened to the first fourth parts of that album, i wasnt accustomed to ambient, even, hearing this kind of atmospheric songs, even albums, fell in love with the raw style of Nine inch nails, but this, enlightened me, was a contrast between a soft trip into darkness, and also a feeling of bliss, a soft haze.</p>
<p> I listened to this one with a more mature ear, and reminded me of that old bliss, but, even, felt more... harsh... atleast by the side of <b> locusts</b>, like a dreaded end to a big symphony, some noise in the background, <b> together </b>, was softer, sounded more like the old ghosts, enveloping me in a warm feel, feeling myself and the songs, like one, together, every movement felt low paced, but wonderful.</p>		<p> Not my favorite album of <b>NIN</b>, not a big fan of ambient, and dark ambient makes me kind of anxious, i have less of that feeling with ghosts than with other pieces of the same genre to be honest, and, after their new path into soundtracks, they are doing a great work, i feel glad listening to them again, even, in their darkest-ambiental hours....`
		
	},

	{
		title: 'Noir Desir - Des Visages Des figures',
		img: '/blog/noir-desir.jpg',
		slug: 'noir-desir',
		tags:  ["#review", "#obscure", '#noise', '#garage'],
		summary: 'The noise rock - garage album that made me want to learn french, The inner experience inside the emotions of a common man',
		html: `<p>I could describe the album as the garage interpretation of the daily life of a sensible man, understanding more and more about his feelings, but that would be too ambiguous and short.
And doesnt make enough justice for the album</p>

<p>This is a journey, an album that varies and plays with noise, instruments, and voices, bertrand cantat does a great job, choosing diferent tones for his voices in different songs, Des visages des figures and L'Appartment shows a softer voice, intropective, emotional. Le grand incendie shows a heavier tone, and L'Enfant Roi, opens the album, using a thin falsetto in a repetitive kind of trippy instrumental, about just, a piece of a normal life.</p>

		<p>All the album is full of different metaphores to life, playing with many images and at the same time depicting just, ordinary moments.</p>

<p>Le grand incendie shows a strident harmonica playing in company of stepped hard  drums, many references to riots, or atleast, just, liberation, until the words "cour" appear into place, meaning a rift of water, yelling at the microphone, just increasing the noise in the song, until the last explosion of instruments bursting the harmony.</p>

<p>Lost, which made me fall in love completely, is at first, just a note, an inner observation of loneliness... which ends in desesperation, he plays in a complete amazing way with emotions, his voice becomes raspy or hoarse while the song pases, while in the song, he starts talking more about psychological consequences... Until he explodes, the image of the single is really amazing, a doodle of a wolf barking at.. anything, or whatever that appears in the picture, which does a good job explaining the song at first. the song becomes harder, faster, and he loses it, he screams to the listener i'm lost</p>

<p>The album does a great job in production, harmony and message, its style is something complex, not boring or repetitive, and even experimental, and the band is kind of obscure outside France, one of my favorites gems.</p>	`
	},

	{
		title: 'FIRE! Orchestra - Enter',
		slug: 'fire-orchestra',
		img: '/blog/fire!.jpg',
		tags:  ["#review", '#recc', '#obscure'],
		summary: 'An experimental disonant orchestra with influences of jazz, blues, gospel and overall noise.',
		md:  `
Found this band by following some **faust** and **dalek** albums, both masters of the noise genre and this orchestra is not to be left behind, this is a really undrstimated album, full of noise but at the same time, instrumentation, a really high quality production and with a clean improvisation.

Comes soft at first, a thin noise wall separates the voices and the trumpets, bass, drums, etc, while it feels afterwards blending until it reaches an only voice, the vocals are clean, lyrical, emotionals, and just by the end of the album, it gets more raw, the lyrics become parts of the album and i could listen was sweet moans.

The albums feels really natural and emotional, touching i would say, in some parts becoming an anxiety passage, in others, a brink of illumination in a room full of vapor.
`,

		html: `
`
	},


];

posts.forEach(x => x.md ? x.html = converter.makeHtml(x.md) : x.html)

export default posts;
