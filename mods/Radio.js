elements.Transmitter = {
	properties: {
		powerstate: "false",
		cooldown: 0,
	},
	name: "Flip Flop",
    	color: "#CF300D",
	state: "solid",
    	category: "machines",
	tick: function(pixel) {
			doHeat(pixel)
			doBurning(pixel)
			doElectricity(pixel)

    	let Output = pixelMap[pixel.x+1][pixel.y]
    	let Input = pixelMap[pixel.x-1][pixel.y]

      
	}
};
