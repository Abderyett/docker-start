import { useState, useState } from 'react';
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
			.then((result) => {
				setFormData({ ...formData, values: result.data });
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
			});

		return () => controller.abort();
	}, []);

	return <div>Fib</div>;
};

export default Fib;
