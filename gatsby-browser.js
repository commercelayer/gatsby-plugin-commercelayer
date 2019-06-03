exports.onInitialClientRender = () => {
	if (process.env.NODE_ENV === `development`) {
		const script = document.createElement("script")
		script.type = "text/javascript"
		script.src = "https://cdn.jsdelivr.net/npm/commercelayer@1.9.6/dist/commercelayer.min.js"
		document.body.appendChild(script)
	}
}
