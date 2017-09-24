export default {
	request: data => {
		return new Promise(res => {
			setTimeout(() => {
				res(data);
			}, 100);
		});
	}
};