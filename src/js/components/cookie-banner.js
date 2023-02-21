const cookieBanner = (() => {
	
	const cookieElement = document.getElementById('cookie-banner');
	const cookieAcceptButton = document.getElementById('accept-cookies');
	const cookieRejectButton = document.getElementById('reject-cookies');
	const localStorageKey = "essen-fend-seed";
	
	const getLocalStorageItems = (storageItemKey) => {
		try {
			return JSON.parse(localStorage.getItem(storageItemKey));
		} catch (e) {
			console.err(e);
			return null;
		}
	}
	
	const setLocalStorageItems = (key, obj) => {
		try {
			localStorage.setItem(key, JSON.stringify(obj));
			return obj;
		} catch (e) {
			console.err(e);
			return null;
		}
	}
	
	const init = () => {
		let storage = getLocalStorageItems(localStorageKey);

		
		if (storage === null && cookieElement && cookieAcceptButton) {
			console.log('anan')
			cookieElement.classList.add('c-cookie-banner--active');
			cookieAcceptButton.addEventListener('click', event => {
				event.preventDefault();
				setLocalStorageItems(localStorageKey, true);
				cookieElement.classList.remove('c-cookie-banner--active');
			})
			cookieRejectButton.addEventListener('click', event => {
				event.preventDefault();
				cookieElement.classList.remove('c-cookie-banner--active');
			})
		}
	}
	
	return {
		init
	}
})();

export default cookieBanner; 


