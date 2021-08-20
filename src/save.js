import {__} from '@wordpress/i18n';
import {useBlockProps, RichText} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';

export default function save({attributes}) {
	return <div {...useBlockProps.save()}>
		<Button
			style={{
				backgroundColor: attributes.bg_color,
				color: attributes.text_color,
			}}
		>
			{<RichText.Content value={attributes.btnText}/>}
		</Button>
	</div>;
}
