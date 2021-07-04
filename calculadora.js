function calcularQuantidadeMaximaDeViews (valorInvestido){

	var valorInvestidoFloat = parseFloat(valorInvestido);

	//30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
	var viewPago = valorInvestidoFloat * 30;
	
	var viewOrganico = Array();

	for (var i = 0; i < 3; i++) {
		var clique;
		//a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
		if(i === 0) {
			clique = viewPago * 12 / 100;
		}
		else {
			clique = viewOrganico[i - 1] * 12 / 100;
		}

		//a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
		var compartilhamento = clique * 3 / 20;

		//cada compartilhamento nas redes sociais gera 40 novas visualizações.
		viewOrganico[i] = compartilhamento * 40;
	}
	//Soma total das views.
	var total = viewPago + viewOrganico[0] + viewOrganico[1] + viewOrganico[2];

	return Math.round(total);
}
