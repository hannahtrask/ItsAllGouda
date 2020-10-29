# Unsolved Mysteries of the Gouda App

While we stand behind the conviction that our App is complete and beautiful, we did encounter some mysteries of the curd kind (third kind.. get it.. it's a cheese pun) while implementing functionality and styles to It's All Gouda. Below are some roadblocks we hit and how we addressed the issue. Also, most of these ARE solved, but we couldn't resist the puns.

**navbar cheesman styling
**cards with flexbox (what is spelling?)
**meet the team customizing

### Form functionality

We hit quite a few roadblocks when it came to giving the update and create forms functionality. In the end, it required refactoring the logic so we could lift state and pass information as props— without help from Stack and Kenny we would've been struggling for much longer. Here's a code snippet from our edit form functionality— this just demonstrates how we passed the id of the data to edit it. We ended up using router props to attach a foodId to the the state, which allowed the 

```javascript
const [state, setState] = useState({
		mood: '',
		author: '',
		name: '',
		course: '',
		img: '',
        description: '',
        //this key/value pair was our biggest roadblock in solving this issue
		foodId: props.match.params.id,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(state);
		props.history.push('/');
	};
```


### Pun Randomizer

The pun randomizer, which you see in action in the footer, was a fun project. For this, we use a headless CMS website: Contentful. Content was manually entered (just puns, in this case) and we accessed it as you would any API. Because we are making an API call and it is not async...await we needed to confirm the data was received as expected before it would randomize. Below is the functionality.

```javascript
	const [pun, setPun] = useState("Whatever you do, don't copy pasta.");
	const [data, setData] = useState([]);

	const url =
		'https://cdn.contentful.com/spaces/i400pneoa60x/environments/master/entries?access_token=tqdo3TnhYgSsLQukoxBUvQQj_3vHkJRKG2_TpD-fVJo';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	let arr = data.items;

	useEffect(() => {
		if (Array.isArray(arr)) {
			let index = arr[Math.floor(Math.random() * arr.length)];
			let newPun = index.fields.pun;
			setPun(newPun);
		}
	});

	return <div className='footer'>{pun}</div>;
```