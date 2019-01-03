var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
	today = new Date(),
	currMonth = today.getMonth();

document.getElementById('date-month').innerText = months[currMonth].toUpperCase();
