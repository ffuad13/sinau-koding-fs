const LazyLoadedComponent = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				<div className="p-4 border rounded">This component was lazy loaded, simulating fecth data</div>
			)
		}, 2000)
	})
}

export default LazyLoadedComponent