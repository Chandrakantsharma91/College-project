(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotPopup = document.getElementById('chatbotPopup');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
      const isOpen = chatbotPopup.style.display === 'block';
      chatbotPopup.style.display = isOpen ? 'none' : 'block';
      chatbotToggle.textContent = isOpen ? 'Chat with us' : 'Close Chat';
    });