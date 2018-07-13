var globals = globals || {};

if (typeof window !== 'undefined') {
	globals.window = window;
}

if (typeof document !== 'undefined') {
	globals.document = window.document;
}

export default globals;
