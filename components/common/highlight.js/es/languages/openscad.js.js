function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/openscad" instead of "highlight.js/lib/languages/openscad.js"'
      );
    }
  }
  emitWarning();
    import lang from './openscad.js';
    export default lang;