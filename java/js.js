


	let start =document.querySelector(".start")
	let stop =document.querySelector(".stop")

	let append = document.querySelector(".cloud")


function name(argument) {
	

	a = setInterval(function() {
		
		let letRan = Math.floor(Math.random()*(65-90)+90)		
		let leftRandom = Math.floor(Math.random()*(0-190)+190)
		let Dur = Math.random()*1

			let div = document.createElement("div")
				div.setAttribute("class","letters")
				div.innerHTML=String.fromCharCode(letRan)
				div.style.animationDuration = 1+Dur+"s"
				append.append(div)


			div.style.left = leftRandom+"px"

			setTimeout(function() {
				append.removeChild(div)
			}, 2000);


		
	}, 50);

}

name()

	let boolean=false
	
	start.addEventListener("click",()=>{


		if (boolean) {
			name()
			boolean=false
		}

	})

	stop.addEventListener("click",()=>{
		boolean=true
		clearInterval(a)
	})


