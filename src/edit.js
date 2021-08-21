import {ColorPalette, InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
import {useState} from '@wordpress/element';
import './editor.scss';
import {__} from '@wordpress/i18n';
import {PanelBody, RadioControl} from "@wordpress/components";


export default function Edit({attributes, setAttributes}) {
	const [isOpenPanel1, setIsOpenPanel1] = useState(false);
	const [isOpenPanel2, setIsOpenPanel2] = useState(false);

	const onChangeBGColor = (hexColor) => {
		setAttributes({bg_color: hexColor});
	};

	const onChangeTextColor = (hexColor) => {
		setAttributes({text_color: hexColor});
	};

	const togglePanel1 = (isOpenPanel1) => setIsOpenPanel1(!isOpenPanel1);
	const togglePanel2 = (isOpenPanel2) => setIsOpenPanel2(!isOpenPanel2);


	return (
		<div {...useBlockProps()}
			 style={{
				 display: "flex",
				 justifyContent: attributes.align,
				 width: '100%',
			 }}
		>
			<InspectorControls key="setting">
			<PanelBody
				title="Colors"
				initialOpen={true}
				onToggle={togglePanel1}
			>
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
			</PanelBody>
				<PanelBody
					title="Align Item"
					initialOpen={true}
					onToggle={togglePanel2}
				>
					<RadioControl
						label="Align"
						help="Choose an alignment."
						selected={attributes.align}
						options={[
							{label: 'left', value: 'flex-start'},
							{label: 'Center', value: 'center'},
							{label: 'Right', value: 'flex-end'},
						]}
						onChange={(newAlign) => setAttributes({align: newAlign})}
					/>
				</PanelBody>
			</InspectorControls>


			<div className="my-block"
				 style={{
					 backgroundColor: attributes.bg_color,
					 width: '100%',
				 }}
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
