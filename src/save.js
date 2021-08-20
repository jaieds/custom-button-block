import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';

export default function save({attributes}) {
	return <div {...useBlockProps.save()}>
		<Button>{attributes.btnText}</Button>
	</div>;
}
