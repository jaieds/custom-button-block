import {
	useBlockProps,
	RichText,
	ColorPalette,
	InspectorControls
} from '@wordpress/block-editor';
import {TextControl, Button} from '@wordpress/components';
import {useState, useEffect} from '@wordpress/element';
import './editor.scss';
import {__} from '@wordpress/i18n';


export default function Edit({attributes, setAttributes}) {
	useEffect(() => {
		setAttributes({
			btnText: "Button",
			bg_color: {type: 'string', default: '#000000'},
			text_color: {type: 'string', default: '#ffffff'},
		});
	}, [setAttributes]);

	const onChangeBGColor = (hexColor) => {
		setAttributes({bg_color: hexColor});
	};

	const onChangeTextColor = (hexColor) => {
		setAttributes({text_color: hexColor});
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<fieldset>
					<legend>{__("Background Color:", "my-block")}</legend>
					<ColorPalette
						onChange={onChangeBGColor}
					/>
				</fieldset>

				<fieldset>
					<legend>{__("Font Color:", "my-block")}</legend>
					<ColorPalette
						onChange={onChangeTextColor}
					/>
				</fieldset>
			</InspectorControls>
			<div className="my-block"
				 style={{backgroundColor: attributes.bg_color}}
			>
				<RichText value={attributes.btnText}
						  onChange={(val) => setAttributes({btnText: val})}
						  placeholder={attributes.btnText}
						  style={{
							  color: attributes.text_color
						  }}
				/>
			</div>
		</div>
	);
}
