/*********************************************************
 * Functions to submit forms to a google spreadsheet
 ********************************************************/

 function formEmpresasSubmit()
 {
	 var name = document.getElementById("form-name").value;
	 var email = document.getElementById("form-email").value;
	 var contact = document.getElementById("form-contact").value;
	//var area = document.getElementById("form-area").value;

	 if(formEmpresasValidate(name, email, contact))
	 {
		 registerEmpresa(name, email, contact);
		 alert("Obrigado pelo seu registo!");
	 }

 }

 function showErrorMessage(message, div)
 {
	 var error =  document.getElementById(div);

	 error.innerHTML = message;

	 $('#'+div).fadeIn('fast');

 }

 function hideErrormessage(div)
 {
	 var error =  document.getElementById(div);

	 error.innerHTML = "";

	 $('#'+div).fadeOut('fast');
 }

 function formEmpresasValidate(name, email, contact)
 {
	 var check = true;

	 // checks name
	if(name == '')
	{
		showErrorMessage("Por favor preencha o nome da sua empresa", "form-name-error");
		check = false;
	}
	else
	{
		hideErrormessage("form-name-error");
	}

	// checks email
	if(email == '')
	{
		showErrorMessage("Por favor preencha um email de contacto", "form-email-error");
		check = false;
	}
	else
	{
		hideErrormessage("form-email-error");
	}

	// checks contact
	if(contact == '')
	{
		showErrorMessage("Por favor preencha um telefone de contacto", "form-contact-error");
		check = false;
	}
	else
	{
		hideErrormessage("form-contact-error");
	}
	/*
	//checks area
	if(area == '')
	{
		showErrorMessage("Por favor escolha a área de interesse", "form-area-error");
		check = false;
	}
	else
	{
		hideErrormessage("form-area-error");
	}*/

	return check;
 }


 function registerEmpresa(name, email, contact)
{
	//alert("submited");<
	$.ajax({
		url: "https://docs.google.com/forms/d/################################/formResponse", 
		data: {
			"entry.1209376159": name,
			"entry.183120503": email,
			"entry.398264457": contact,
			//"entry.165620882": area
		},
		type: "POST",
        dataType: "xml",
		success: function(result){
			alert("ok");
		}
	});
}
