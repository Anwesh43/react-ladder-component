class Animator {
	constructor() {
		this.cbs = []
	}

	start(cb) {
		if (this.cbs.length == 0) {
			this.interval = setInterval(() =>{
				this.cbs.forEach((cb) => {
					if (cb()) {
						console.log("coming here")
						this.cbs.splice(0, 1)
						if (this.cbs.length == 0) {
							clearInterval(this.interval)
						}
					}
				})		
			}, 50)
		}
		this.cbs.push(cb)
	}
}

const animator = new Animator()
export {animator}