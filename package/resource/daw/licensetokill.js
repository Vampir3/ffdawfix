ffAddOnLoad(function() {
	document.body.style.overflowX = "hidden";
	injectTag('b', function(node) {
		node.innerHTML = createHTMLPersLink(node.textContent);
	});
});