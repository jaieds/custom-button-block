import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';
import {TextControl, Button} from '@wordpress/components';
import {useState, useEffect} from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	useEffect(() => {
		setAttributes({
			btnText: "Button"
		})
	}, [setAttributes]);

	return (
		<div {...useBlockProps()}>
			<div className="my-block">
				<RichText value={attributes.btnText}
						  onChange={(val) => setAttributes({btnText: val})}
						  placeholder={attributes.btnText}
				/>
			</div>
		</div>
	);
}
