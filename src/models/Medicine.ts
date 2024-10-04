// name
// stock
// expireDate
// description

export default class Medicine {
	public stock: number = 0;
	constructor(
		public name: string,
		public initialStock: number,
		public expireDate: Date,
		public description: string
	) {
		this.name = name;
		this.stock += initialStock;
		this.expireDate = expireDate;
		this.description = description;
	}
}