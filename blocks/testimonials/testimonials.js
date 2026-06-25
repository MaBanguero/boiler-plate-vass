export default function decorate(block) {
  // 1. Creamos el contenedor usando JavaScript puro
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'testimonials-slider';

  [...block.children].forEach((row) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';

    const authorHtml = row.children[0].innerHTML;
    const textHtml = row.children[1].innerHTML;

    // 2. Creamos los elementos internos
    const quote = document.createElement('blockquote');
    quote.className = 'testimonial-text';
    quote.innerHTML = textHtml;

    const author = document.createElement('div');
    author.className = 'testimonial-author';
    author.innerHTML = authorHtml;

    // 3. Estructuramos el DOM
    testimonialCard.append(quote, author);
    sliderContainer.append(testimonialCard);
  });

  // 4. Limpiamos la tabla vieja e inyectamos el nuevo componente
  block.textContent = '';
  block.append(sliderContainer);
}
