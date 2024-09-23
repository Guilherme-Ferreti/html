const previewCard = document.querySelector('.preview-card');
const tagsContainer = document.querySelector('.preview-card__tags');

const tagNames = ['Blog', 'HTML & CSS', 'Code', 'Tutorial'];

const addRandomTag = () => {
    if (tagNames.length === 0) {
        return;
    }

    const newTag = document.createElement('span');

    newTag.classList.add('preview-card__tag');
    newTag.textContent = tagNames.pop();
    newTag.addEventListener('click', addRandomTag);

    tagsContainer.appendChild(newTag);

    if (tagNames.length === 0) {
        tagsContainer.querySelectorAll('.preview-card__tag').forEach(tag => tag.style.cursor = 'default');
    }
}

tagsContainer.querySelectorAll('.preview-card__tag').forEach(tag => tag.addEventListener('click', addRandomTag));