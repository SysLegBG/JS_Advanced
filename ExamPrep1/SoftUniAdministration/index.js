function solve() {
    const [name] = document.getElementsByName('lecture-name');
    const [date] = document.getElementsByName('lecture-date');
    const [module] = document.getElementsByName('lecture-module');
    const addBtn = document.querySelector('div.form-control button');
    const [modContainer] = document.getElementsByClassName('modules');
    const modules = document.getElementsByClassName('module');

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        if (name.value != '' && date.value != '' && module.value != 'Select module') {
            if (Array.from(modules).some(mod => mod.firstChild.textContent == module.value) == false) {
                const divMod = document.createElement('div');
                const h = document.createElement('h3');
                divMod.classList.add('module');
                h.textContent = module.value;
                divMod.appendChild(h);
                modContainer.appendChild(divMod);
            }

            const [divMod] = Array.from(modules).filter(mod => mod.firstChild.textContent == module.value);
            const el = createModElement();
            let inserted = false;

            for (let child of Array.from(divMod.children).slice(1)) {
                if (child.firstChild.firstChild.textContent.split(' - ')[1].localeCompare(el.firstChild.firstChild.textContent.split(' - ')[1]) == 1) {
                    divMod.insertBefore(el, child);
                    inserted = true;
                    break;
                }
            }

            if (!inserted)
                divMod.appendChild(el);
        }

    })

    modContainer.addEventListener('click', (ev) => {
        if (ev.target.tagName == 'BUTTON') {
            const currnetMod = ev.target.parentNode.parentNode.parentNode;
            ev.target.parentNode.parentNode.remove();
            if (currnetMod.children.length < 2) {
                currnetMod.remove();
            }
        }
    })


    function createModElement() {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const h = document.createElement('h4');
        const btn = document.createElement('button');
        li.classList.add('flex');
        h.textContent = `${name.value} - ${date.value.slice(0, 10).replace(/-/g, '\/')} - ${date.value.slice(-5)}`;
        btn.classList.add('red');
        btn.textContent = 'Del';
        li.appendChild(h);
        li.appendChild(btn);
        ul.appendChild(li);
        return ul;
    }

};