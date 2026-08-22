document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault();//evita o recarregamento padrao da pagina

const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('email').value.trim();
const mensagem = document.getElementById('mensagem').value.trim();
const formMessage = document.getElementById('formMessage');

// validação basica de campos obrigatorios
if (nome === '' || email === '' || mensagem === '') {
    formMessage.style.color = '#ef4444'; // Vermelho para erro
    formMessage.textContent = 'Por favor, preencha todos os campos';
    return;
}

//validação simples de formato de e-mail
if (!email.inludes('@')|| !email.includes('.')){
    formMessage.style.color = '#e4444';
    formMessage.textContent = 'Por favor, insira um email válido';
    return;
}
//sucesso
formMessage.style.color = '#22c55e' // verde para sucesso
formMessage.textContent = 'Mensagem enviada com sucesso, entraremos em contato em breve.';

//limpa o formulário após o envio
document.getElementById('contactForm').reset();
});