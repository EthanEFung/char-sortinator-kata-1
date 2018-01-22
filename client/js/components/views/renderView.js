function renderView() {
  $view = document.createElement('div');
  $view.setAttribute('id', 'app-view');

  const $form = renderFormView();
  const $output = renderOutputView();

  $view.appendChild($form);
  $view.appendChild($output);

  return $view;
}

function renderFormView() {
  const $form = document.createElement('form');
  $form.setAttribute('id', 'form-view');

  const $label = document.createElement('label');
  $label.setAttribute('id', 'form-label');
  $label.textContent = 'Enter text: ';

  const $input = document.createElement('input');
  $input.setAttribute('id', 'form-input');

  const $submit = document.createElement('button');
  $submit.setAttribute('id', 'form-submit');
  $submit.textContent = 'submit';
  $submit.addEventListener('click', postSortedCharactersQuery);

  $form.appendChild($label);
  $form.appendChild($input);
  $form.appendChild($submit);

  return $form;
}

function renderOutputView() {
  const $output = document.createElement('div');
  $output.setAttribute('id', 'form-output');

  const $label = document.createElement('label');
  $label.textContent = 'Sorted Characters: ';

  $output.appendChild($label);
  return $output;
}
