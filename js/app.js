const form = document.getElementById('cardForm');
const cardDisplay = document.getElementById('cardDisplay');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const Name = form.elements['Name'].value;
    const Familya = form.elements['Familya'].value;
    const Date = form.elements['Date'].value;
    
    const cardHTML = `
        <div class="card">
            <p>ism:${Name}</p>
            <p>familya: ${Familya}</p>
            <p>yosh: ${Date}</p>
        </div>
    `;
    
    cardDisplay.innerHTML = cardHTML;
    form.reset(); 
});
