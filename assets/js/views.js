import programs from './models.js';

export function renderPrograms() {
    const programSection = document.getElementById('program-section');
    programs.forEach(program => {
        const programCard = `
            <article class="program_card">
                <div class="program_shape">
                    <img src="${program.img}" alt="" class="program_img">
                </div>
                <h3 class="program_title">${program.title}</h3>
                <p class="program_description">${program.description}</p>
                <a href="#" class="program_button">
                    <i class="ri-arrow-right-line"></i>
                </a>
            </article>
        `;
        programSection.innerHTML += programCard;
    });
}
