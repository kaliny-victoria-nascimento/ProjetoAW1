var form = document.getElementById("formFaleConosco");

if (form.addEventListener) {                   
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaCadastro);
}
 
function validaCadastro(evt){
	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = "";
 
 
	/* Validação do campo nome */
	caixa_nome = document.querySelector('nome');
	if(nome.value == ""){
		caixa_nome.innerHTML = "É necessário preencher este campo.";
		caixa_nome.style.display = 'block';
		contErro += 1;
	}else{
		caixa_nome.style.display = 'none';
	}
 
	/* Validação do campo email */
	caixa_email = document.querySelector('email');
	if(email.value == ""){
		caixa_email.innerHTML = "É necessário preencher este campo.";
		caixa_email.style.display = 'block';
		contErro += 1;
	}else if(filtro.test(email.value)){
		caixa_email.style.display = 'none';
	}else{
		caixa_email.innerHTML = "Formato de e-mail inválido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}
}
