import React from 'react';
import List from '../components/List';

export default function Home() {
	return (
		<section className="container">
			<div className="list ">
				<List />
				<List />
				<List />
			</div>
		</section>
	);
}
