function checkCode() {
	if (document.getElementById('code').value !== 'COLLECTIVEACCESS19') {
		document.getElementById('error').style.display = 'block';
	} else {
		document.getElementById('earlypass').style.display = 'none';
		document.getElementById('shop-blur').style.filter = 'blur(0px)';
	}
}
