export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const success = true;

	if (success) {
            resolve("Response received");
	} else {
	    reject("Error occurred");
	}
    });
}

