	document.getElementById("defaultOpen").click();
	
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  EVENT LISTENERS
// H  HH  HH  HH  HH  HH  HH  hH  hH  HH  HH  HH  HH  HH  HH  HH  H
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  EVENT LISTENERS


document.querySelector('#repeat-checker').addEventListener('change', function() {
	toggleClass2('#canvas-layer-zero','repetirlo')
})


document.querySelector('#flipY-button').addEventListener('click', function() {
	clickThis('#flipY-checker'), 
	toggleClass(this,'changed'),
	toggleClass2('#canvas-layer-one','flip-y')
})
document.querySelector('#flipX-button').addEventListener('click', function() {
	clickThis('#flipX-checker'), 
	toggleClass(this,'changed'),
	toggleClass2('#canvas-layer-zero','flip-x')
})
document.querySelector('#zoom-preview').addEventListener('input', function() {
	styleThis('#bod','transform', 'scale(' + this.value ,')')
})

document.querySelector('#zoom-range').addEventListener('dblclick', function() {
	styleReset('#canvas-layer-zero','background-size','30%','30', this)
})
document.querySelector('#rotate-range').addEventListener('dblclick', function() {
	styleReset('#canvas-layer-eight','transform','rotate(0deg)','0', this)
})


document.querySelector('#fit-checker').addEventListener('click', function() {
	setValue("#zoom-range", "50"),
	pseudoThis('#canvas-layer-zero','--background-size', '50' ,'%')
})
document.querySelector('#middle-checker').addEventListener('click', function() {
	setValue("#zoom-range", "30"),
	pseudoThis('#canvas-layer-zero','--background-size', '30' ,'%')
})
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  NEW EVENT LISTENERS -- -- -- NEW
// H  HH  HH  HH  HH  HH  HH  hH  hH  HH  HH  HH  HH  HH  HH  HH  H
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  NEW EVENT LISTENERS -- -- -- NEW
	// Rotate range
	document.querySelector('#rotate-range').addEventListener('input', function() {
		pseudoStyle('#Rotate','#canvas-layer-zero','--rotate-Z','rotateZ(', 'deg)')
	})
	document.querySelector('#rotate-range-check').addEventListener('input', function() {
		resetPseudo('#Rotate','#canvas-layer-zero','--rotate-Z','rotateZ(', 'deg)')
	})
	// Zoom range
	document.querySelector('#zoom-range').addEventListener('input', function() {
		pseudoStyle('#Zoom','#canvas-layer-zero','--background-size','', '%')
	})
	document.querySelector('#zoom-range-check').addEventListener('input', function() {
		resetPseudo('#Zoom','#canvas-layer-zero','--background-size','', '%')
	})

	// Position range X
	document.querySelector('#posX-range').addEventListener('input', function() {
		pseudoStyle('#Position-X','#canvas-layer-zero','--background-x','', '%')
	})
	document.querySelector('#posX-range-check').addEventListener('input', function() {
		resetPseudo('#Position-X','#canvas-layer-zero','--background-x','', '%')
	})
	// Position range  Y
	document.querySelector('#posY-range').addEventListener('input', function() {
		pseudoStyle('#Position-Y','#canvas-layer-zero','--background-y','', '%')
	})
	document.querySelector('#posY-range-check').addEventListener('input', function() {
		resetPseudo('#Position-Y','#canvas-layer-zero','--background-y','', '%')
	})

	// Maria Luisa
	document.querySelector('#Maria-Luisa-range').addEventListener('input', function() {
		inputStyle('#Maria-Luisa','#canvas-layer-one','outline-offset','-', 'px')
	})
	document.querySelector('#Maria-Luisa-range-check').addEventListener('input', function() {
		resetThis('#Maria-Luisa','#canvas-layer-one','outline-offset','-', 'px')
	})

	// Turn
	document.querySelector('#preview-x-range').addEventListener('input', function() {
		positionCube(this.value, 0)
	})
	document.querySelector('#preview-x-range-check').addEventListener('input', function() {
		positionCube(0, 0)
	})

	// Fondo Fondo Fondo

	//Hue
	document.querySelector('#hue-slider').addEventListener('input', function() {
		pseudoThis('body','--background-hue', this.value ,'deg'),
		inputDisplay('#Background-Hue'),
		changeColor()
	})
	document.querySelector('#hue-slider-check').addEventListener('input', function() {
		pseudoThis('body','--background-hue', '0' ,'deg'),
		inputReset('#Background-Hue'),
		changeColor()
	})
	//Saturation
	document.querySelector('#saturation-slider').addEventListener('input', function() {
		pseudoThis('body','--background-saturation', this.value ,'%'),
		inputDisplay('#Background-Sat'),		
		changeColor()
	})
	document.querySelector('#saturation-slider-check').addEventListener('input', function() {
		pseudoThis('body','--background-saturation', '50' ,'%'),
		inputReset('#Background-Sat'),
		changeColor()
	})
	//Lightness
	document.querySelector('#lightness-slider').addEventListener('input', function() {
		pseudoThis('body','--background-lightness', this.value ,'%'),
		inputDisplay('#Background-Lig'),
		changeColor()
	})
	document.querySelector('#lightness-slider-check').addEventListener('input', function() {
		pseudoThis('body','--background-lightness', '50' ,'%'),
		inputReset('#Background-Lig'),
		changeColor()
	})

	// FX FX FX fxfxfxfx

	// Hue range
	document.querySelector('#hue-range').addEventListener('input', function() {
		pseudoStyle('#Hue','#canvas-layer-zero','--hue-rotate','hue-rotate(', 'deg)')
	})
	document.querySelector('#hue-check').addEventListener('input', function() {
		resetPseudo('#Hue','#canvas-layer-zero','--hue-rotate','hue-rotate(', 'deg)')
	})

	// Contrast range
	document.querySelector('#contrast-range').addEventListener('input', function() {
		pseudoStyle('#Contrast','#canvas-layer-zero','--contrast','contrast(', '%)')
	})
	document.querySelector('#contrast-check').addEventListener('input', function() {
		resetPseudo('#Contrast','#canvas-layer-zero','--contrast','contrast(', '%)')
	})

	// Brightness range
	document.querySelector('#brightness-range').addEventListener('input', function() {
		pseudoStyle('#Brightness','#canvas-layer-zero','--brightness','brightness(', '%)')
	})
	document.querySelector('#brightness-check').addEventListener('input', function() {
		resetPseudo('#Brightness','#canvas-layer-zero','--brightness','brightness(', '%)')
	})

	// Saturation range
	document.querySelector('#saturate-range').addEventListener('input', function() {
		pseudoStyle('#Saturate','#canvas-layer-zero','--saturate','saturate(', '%)')
	})
	document.querySelector('#saturate-check').addEventListener('input', function() {
		resetPseudo('#Saturate','#canvas-layer-zero','--saturate','saturate(', '%)')
	})

	// Invert range
	document.querySelector('#invert-range').addEventListener('input', function() {
		pseudoStyle('#Invert','#canvas-layer-zero','--invert','invert(', '%)')
	})
	document.querySelector('#invert-check').addEventListener('input', function() {
		resetPseudo('#Invert','#canvas-layer-zero','--invert','invert(', '%)')
	})

	// Grayscale range
	document.querySelector('#grayscale-range').addEventListener('input', function() {
		pseudoStyle('#Grayscale','#canvas-layer-zero','--grayscale','grayscale(', '%)')
	})
	document.querySelector('#grayscale-check').addEventListener('input', function() {
		resetPseudo('#Grayscale','#canvas-layer-zero','--grayscale','grayscale(', '%)')
	})

	// Sepia range
	document.querySelector('#sepia-range').addEventListener('input', function() {
		pseudoStyle('#Sepia','#canvas-layer-zero','--sepia','sepia(', '%)')
	})
	document.querySelector('#sepia-check').addEventListener('input', function() {
		resetPseudo('#Sepia','#canvas-layer-zero','--sepia','sepia(', '%)')
	})

	// Blur range
	document.querySelector('#blur-range').addEventListener('input', function() {
		pseudoStyle('#Blur','#canvas-layer-zero','--blur','blur(', 'px)')
	})
	document.querySelector('#blur-check').addEventListener('input', function() {
		resetPseudo('#Blur','#canvas-layer-zero','--blur','blur(', 'px)')
	})
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  FUNCTIONS
// H  HH  HH  HH  HH  HH  HH  hH  hH  HH  HH  HH  HH  HH  HH  HH  H
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  FUNCTIONS
function clickThis(query) {
	document.querySelector(query).click();
}
function styleThis(query, rule, value, end) {
	var terry = document.querySelector(query);
	terry.style[rule] = value + end;
}
function pseudoThis(query, rule, value, end) {
	var layer = document.querySelector(query);
	layer.style.setProperty(rule, value + end);
}
function toggleValue(query, rule, indicator, val1, val2, end) {
	var layer = document.querySelector(query);
	if (layer.style.setProperty(rule, indicator + val1 + end)) {
		layer.style.setProperty(rule, indicator + val2 + end);
	} else {
		layer.style.setProperty(rule, indicator + val1 + end);
	}
}

function styleReset(query, rule, value, range, home) {
	var terry = document.querySelector(query);
	terry.style[rule] = value;
	home.value = range;
}

function setValue(query, value) {
	var terry = document.querySelector(query);
	terry.value = value;
}

function slidePosition() {
	let x = document.getElementById('posX-range').value;
	let y = document.getElementById('posY-range').value;
	let xy = x + '% ' + y + '%';
	document.getElementById('canvas-layer-zero').style.backgroundPosition = xy;
}
function resetZoom() {
	document.querySelector('#posX-range').value = 50;
	document.querySelector('#posY-range').value = 50;
}
function renderImage(target, image){
	if (image.files && image.files[0]) {
		var url = URL.createObjectURL(image.files[0]);
		var layer = document.querySelector(target);
		var outer = document.querySelector('#canvas-layer-one');
		layer.style.setProperty('--background', 'url('+ url +')'); 
		layer.style.setProperty('--background-size', '50%');
		layer.style.setProperty('--background-x', '50%');
		layer.style.setProperty('--background-y', '50%');
		//	outer.style.width = image.width;
		//	document.getElementById('form-reset').click();
	}
}  
// Pseudo Element
function pseudoStyle(family, target, property, indicator, measure) {
	var container = document.querySelector(family);
	var layer = document.querySelector(target);

	var range = container.querySelector("input[type='range']");
	var check = container.querySelector("input[type='checkbox']");
	var output = container.querySelector("span.output");

	var value = range.value;

	output.innerHTML = value;
	layer.style.setProperty(property, indicator + value + measure);

	if (range.value == range.defaultValue ) {
		check.checked = true;
	} else {
		check.checked = false;
	}
}
function resetPseudo(family, target, property, indicator, measure) {
	var container = document.querySelector(family);
	var layer = document.querySelector(target);

	var range = container.querySelector("input[type='range']");
	var check = container.querySelector("input[type='checkbox']");
	var output = container.querySelector("span.output");

	var value = range.defaultValue;

	check.checked = true;
	output.innerHTML = value;
	layer.style.setProperty(property, indicator + value + measure);
	range.value = value;

}
function positionCube(aY, aX) {
	x = document.querySelector('#prod');
	y = document.querySelector('#preview-x-range');
	x.style.transform = 'translateZ(-20px) rotateY(' + aY + 'deg) rotateX(' + aX + 'deg)';
	y.value = aY;
}
	// Basic Layers

	function inputDisplay(family) {
		var container = document.querySelector(family);

		var range = container.querySelector("input[type='range']");
		var check = container.querySelector("input[type='checkbox']");
		var output = container.querySelector("span.output");

		var value = range.value;

		output.innerHTML = value;

		if (range.value == range.defaultValue ) {
			check.checked = true;
		} else {
			check.checked = false;
		}
	}
	function inputReset(family) {
		var container = document.querySelector(family);
		var range = container.querySelector("input[type='range']");
		var check = container.querySelector("input[type='checkbox']");
		var output = container.querySelector("span.output");

		var value = range.defaultValue;

		check.checked = true;
		output.innerHTML = value;
		range.value = value;

	}
	function inputStyle(family, target, property, indicator, measure) {
		var container = document.querySelector(family);
		var layer = document.querySelector(target);

		var range = container.querySelector("input[type='range']");
		var check = container.querySelector("input[type='checkbox']");
		var output = container.querySelector("span.output");

		var value = range.value;

		output.innerHTML = value;
		layer.style[property] = indicator + value + measure;

		if (range.value == range.defaultValue ) {
			check.checked = true;
		} else {
			check.checked = false;
		}
	}
	function resetThis(family, target, property, indicator, measure) {
		var container = document.querySelector(family);
		var layer = document.querySelector(target);

		var range = container.querySelector("input[type='range']");
		var check = container.querySelector("input[type='checkbox']");
		var output = container.querySelector("span.output");

		var value = range.defaultValue;

		check.checked = true;
		output.innerHTML = value;
		layer.style[property] = indicator + value + measure;
		range.value = value;

	}


	function growWidth(value) {
		document.querySelector(".cube__face--top").style.width = value + 'px';
		document.querySelector(".cube__face--bottom").style.width = value + 'px';
		document.querySelector(".cube__face--right").style.transform = 'rotateY( 90deg) translateZ(' + (value) + 'px) translateX(-150px)'; 
		document.querySelector(".cube__face--back").style.width = value + 'px';
		var added = value - (-9);
		document.querySelector(".cube__face--front").style.width = added + 'px';

		document.querySelector(".cube__face--right-inner").style.transform = 'rotateY( 90deg) translateZ(' + (value - 13) + 'px) translateX(-155px) translateY(5px)'; 
		document.querySelector(".cube__face--bottom-inner").style.width = value + 'px';
		document.querySelector(".cube__face--top-inner").style.width = value + 'px';
		document.querySelector(".cube__face--front-hiper").style.width = (value - 29) + 'px';
		document.querySelector("#canvas-layer-one").style.width = added  + 'px';
		document.querySelector("#canvas-layer-zero").style.width = value  + 'px';
		// document.querySelector("#canvas-layer-zero").style.setProperty("--per-width", (value - 100)  + '%');

		document.querySelector(".cube__face--shadow").style.width = (value - 39) + 'px';
	}
	function openTab(targeTab,elmnt,content,link) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName(content);
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName(link);
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].style.opacity = "";
		}
		document.getElementById(targeTab).style.display = "flex";
		elmnt.style.opacity = "1";	}
	// Get the element with id="defaultOpen" and click on it

	function clickThis(query) {
		document.querySelector(query).click();
	}

	function toggleClass(targeted, newclass) {
		targeted.classList.toggle(newclass);
	}
	function toggleClass2(targeted, newclass) {
		var terry = document.querySelector(targeted);
		terry.classList.toggle(newclass);
	}

	function changeColor() {
		let hue = document.getElementById('hue-slider').value;
		let saturation = document.getElementById('saturation-slider').value;
		let lightness = document.getElementById('lightness-slider').value;
		let color = 'hsla(' + hue + 'deg,' + saturation + '%,' + lightness + '%, 1)';
		document.getElementById('canvas-container').style.backgroundColor = color;
		document.getElementById('canvas-layer-zero').style.outlineColor = color;
		document.getElementById('color-preview').style.backgroundColor = color;
	}