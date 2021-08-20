import {useBlockProps} from '@wordpress/block-editor';
import {TextControl, Button} from '@wordpress/components';
import {useState, useEffect} from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes, className}) {
	const [isEditing, setIsEditing] = useState(false);
	let timer = null;

	useEffect(() => {
		if (!attributes.message) {
			setAttributes({message: "Button"});
		}
	}, [setAttributes]);

	function toggleEditing(event) {
		setIsEditing((isEditing) => !isEditing);
	}

	function handleKeyPress(event) {
		if (event.key === "Enter") {
			setIsEditing((isEditing) => !isEditing);
		}
	}

	return (
		<div {...useBlockProps()}>
			<div className="my-block">
				{isEditing ?
					<TextControl onKeyPress={handleKeyPress}
								 onClick={toggleEditing} autoFocus={true}
								 value={attributes.message}
								 onChange={(val) => setAttributes({message: val})}
					/>
					: <div className=".wp-block-create-block-my-block"
						   onClick={toggleEditing}
					>
						{attributes.message}
					</div>
				}
			</div>
		</div>
	);
}
