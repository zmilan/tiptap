import { Node } from 'tiptap'
import { wrappingInputRule, setBlockType, wrapIn } from 'tiptap-commands'

export default class BlockquoteNode extends Node {

	get name() {
		return 'blockquote'
	}

	get schema() {
		return {
			content: 'block+',
			group: 'block',
			defining: true,
			draggable: false,
			parseDOM: [
				{ tag: 'blockquote' },
			],
			toDOM: () => ['blockquote', 0],
		}
	}

	command({ type }) {
		return wrapIn(type)
	}

	keys({ type }) {
		return {
			'Ctrl->': wrapIn(type),
		}
	}

	inputRules({ type }) {
		return [
			wrappingInputRule(/^\s*>\s$/, type),
		]
	}

}
