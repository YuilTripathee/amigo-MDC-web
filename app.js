// import {MDCTopAppBar} from '@material/top-app-bar/index';
// import {MDCTextField} from '@material/textfield';

// // Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);
// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// // alert('JS working properly!!!');
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));