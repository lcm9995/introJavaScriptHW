function fillInfo(infoType) {
	if (infoType=="name") {
		console.log(infoType + ": Lily");
	}
	else if (infoType=="age") {
		console.log(infoType + ": 19");
	}
	else {
		console.log("error")
	}
}

fillInfo("name");