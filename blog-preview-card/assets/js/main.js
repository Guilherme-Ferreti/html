const previewCard = document.querySelector('.preview-card');
const tagsContainer = document.querySelector('.preview-card__tags');

const tagNames = ['Blog', 'HTML & CSS', 'Code', 'Tutorial'];

const addRandomTag = () => {
    const tagName = tagNames.pop();

    if (!tagName) {
        tagsContainer.querySelectorAll('.preview-card__tag').forEach(tag => tag.style.cursor = 'default');

        return;
    }

    const newTag = document.createElement('span');

    newTag.classList.add('preview-card__tag');
    newTag.textContent = tagName;
    newTag.addEventListener('click', addRandomTag);

    tagsContainer.appendChild(newTag);
}

tagsContainer.querySelectorAll('.preview-card__tag').forEach(tag => tag.addEventListener('click', addRandomTag));