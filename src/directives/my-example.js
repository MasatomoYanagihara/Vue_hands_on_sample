function inserted(el, binding) {
  console.log('inserted');
  console.log('binding: ', binding);
  el.addEventListener('input', binding.value);
}

function unbind(el, binding) {
  console.log('unbind');
  el.removeEventListener('input', binding.value);
}

function bind() {
  console.log('bind');
}

function update() {
  console.log('update');
}

function componentUpdated() {
  console.log('componentUpdated');
}

export const myExample = {
  inserted,
  unbind,
  bind,
  update,
  componentUpdated,
};
