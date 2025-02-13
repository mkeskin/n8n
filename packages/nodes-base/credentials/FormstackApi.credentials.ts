import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class FormstackApi implements ICredentialType {
	name = 'formstackApi';
	displayName = 'Formstack API';
	documentationUrl = 'formstackTrigger';
	properties = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
