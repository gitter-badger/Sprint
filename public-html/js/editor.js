var editor = ace.edit("editor-code");
editor.getSession().setUseWrapMode(true);
editor.setShowPrintMargin(false);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

// set default project
var defaultCode = 'this.init = function() {\n    this.goTo(0, 0); // same as this.x = 0; this.y = 0;\n    this.costume("Cat1");\n    this.penDown();\n};\n\nthis.update = function() {\n    this.forward(1);\n    this.rotate(3);\n    this.say("I am at: (" + this.x + ", " + this.y + ")");\n};';
editor.getSession().setValue(defaultCode);

// run the code
$('#editor-go').on('click', function() {
	var code = editor.getSession().getValue();
	eval(code);
});
