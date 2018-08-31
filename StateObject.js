export default class StateObject {
	constructor() {
		this.scale = 0
		this.dir = 0
		this.prevScale = 0
	}

	update(updatecb) {
		this.scale += 0.1 * this.dir 
		updatecb(this.scale)
		if (Math.abs(this.scale - this.prevScale) > 1) {
			this.scale = this.prevScale + this.dir 
			this.dir = 0
			this.prevScale = this.scale
			//this.updatecb(this.prevScale) 
			return true
		}
		return false
	}

	startUpdating(cb) {
		if (this.dir == 0) {
			this.dir = 1 - 2 * this.prevScale 
			cb()
		}
	}
} 