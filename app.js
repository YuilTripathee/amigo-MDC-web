import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTextField} from '@material/textfield';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// alert('JS working properly!!!');
