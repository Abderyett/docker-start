import { useState, useEffect } from 'react';
import axios, { CanceledError } from 'axios';
interface Data {
	seenIndex: number[];
	value: {};
	index: string;
}

const Fib = () => {
	const [formData, setFormData] = useState<Data>({
		seenIndex: [],
		value: {},
		index: '',
	});

	useEffect(() => {
		const controller = new AbortController();
		axios
			.get('/api/values/current', {
				signal: controller.signal,
			})
			.then((res) => {
				setFormData({ ...formData, value: res.data });
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
			});

		axios
			.get('/api/values/all', {
				signal: controller.signal,
			})
			.then((result) => {
				setFormData({
					...formData,
					seenIndex: [...formData.seenIndex, result.data],
				});
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
			});

		return () => controller.abort();
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			index: event.target.value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await axios.post('/api/value', { index: formData.index });
		setFormData((prevState) => ({
			...prevState,
			index: '',
		}));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Enter your index:</label>
				<input type='number' value={formData.index} onChange={handleChange} />

				<button>submit</button>
			</form>
			<h3>Indecies I have seen:</h3>

			{formData.seenIndex &&
				formData.seenIndex.map((number) => number).join(' ,')}

			<h3>Calculated Values</h3>

			{Object.keys(formData.value).map((key) => (
				<div key={key}>For Index {key} I claculated</div>
			))}
		</div>
	);
};

export default Fib;
