function inserted(el, binding) {
  el.addEventListener('input', binding.value);
}

function unbind(el, binding) {
  el.removeEventListener('input', binding.value);
}

export const myExample = {
  inserted,
  unbind,
};
