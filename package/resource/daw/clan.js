ffAddOnLoad(function() {
	injectTag("tr",function(node) {
		if(node.getAttribute('class') && node.getAttribute('class').replace(/[0-9]/g,'') == "ShopStuff" && document.getElementById('pnlHelpInBattle')) {
			var n = node.getElementsByTagName('td')[0];
			var t = n.textContent.trim();
			n.innerHTML = "";
			n.style.paddingLeft = "6px";
			n.appendChild(createPersLinkWithText(t));
		}
		// Active links in help tab
	});
	injectTag('form', function(node) {
		node.onsubmit = function() {
			injectTag('input', function(node) {
				if(node.type == "text") {
					node.value = node.value.trim();
				}
			});
		}
	});
	// Trim textbox values
});