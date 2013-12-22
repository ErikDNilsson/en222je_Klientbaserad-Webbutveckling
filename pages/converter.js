var button1 = document.getElementById("button1");

button1.onclick = function() {
    var amount = parseFloat(document.getElementById("amount").value);
    var result0 = document.getElementById("result0");
    var result = document.getElementById("result");
    var result2 = document.getElementById("result2");
    var euro = amount / 9.0114;
    var dollar = amount / 6.5979;
    
    if (amount > 0) {
    result0.innerHTML=amount.toFixed(2) + " " + "Kronor konverteras till:";
    result.innerHTML=euro.toFixed(2) + " " + "Euro";
    result2.innerHTML=dollar.toFixed(2) + " " + "Dollar";
		// Går till funktion addLine, rad 25. Skickar med värden från amount.toFixed(2) osv
		// så dessa hamnar på värden sek, euro, dollar.
        addLine(amount.toFixed(2), euro.toFixed(2), dollar.toFixed(2));
    }
    else {
        alert("Du måste skriva in en siffra i textfältet!");
    }
};


function addLine(sek, euro, dollar) {
	//Först letar jag upp elementet med id "tbody"
	//för att kunna lägga till mina tabellrader i
	//det.
	var table = document.querySelector('#tbody');
	
	//Skapar en ny tr-tagg (tabellrad) som vi ska 
	//lägga till i tabellens body och i den ska vi
	//även lägga till två td-element (tabellfält).
	var tr = document.createElement('tr');
	
	//Skapar td-element som vi sparar i variabler.
	var result0Td = document.createElement('td');
	var resultTd = document.createElement('td');
	var result2Td = document.createElement('td');
	
	//notera att variablerna table, tr, firstNameTd och lastNameTd
	//är paket av html-noder och inte något annat. De har funktioner
	//och andra "bra att ha" saker på sig redan.

	//Skapar två textnoder/-element som innehåller variablerna
	//firstName och lastName som vi får in som parametrar i
	//metoden.
	var result0TextNode = document.createTextNode(sek);
	var resultTextNode = document.createTextNode(euro);
	var result2TextNode = document.createTextNode(dollar);
	
	//lägger in textnoden firstNameTextNode i htmlnoden för
	//firstName som är tabellfältet.
	result0Td.appendChild(result0TextNode);
	//lägger till htmlnoden i trnoden så att den hamnar först.
	tr.appendChild(result0Td);
	
	resultTd.appendChild(resultTextNode);
	tr.appendChild(resultTd);
	
	result2Td.appendChild(result2TextNode);
	tr.appendChild(result2Td);
	
	//Använder tabellbody som vi hämtade tidigare och lägger till
	//våran trnod innan första taggen som finns i den. Så att den
	//hamnar överst.
	
	var tablefirstchild = table.firstChild;
	table.insertBefore(tr, tablefirstchild);
}