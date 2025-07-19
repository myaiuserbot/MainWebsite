document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    if (name && email && message) {
        alert('Thank you for your message! We’ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
