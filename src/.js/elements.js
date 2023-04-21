import ElmModules from "./elements/elm_modules";
import ElmModuleAdd from "./elements/module/elm_add";
import ElmSpinner from "./elements/elm_spinner";
import ElmHeader from "./elements/elm_header";
import ElmFooter from "./elements/elm_footer";
window.customElements.define("elm-modules", ElmModules);
window.customElements.define("elm-module-add", ElmModuleAdd);
window.customElements.define("elm-spinner", ElmSpinner);
window.customElements.define("elm-header", ElmHeader);
window.customElements.define("elm-footer", ElmFooter)