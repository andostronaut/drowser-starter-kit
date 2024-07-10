import { ServiceCaseParams } from '../../deps.ts'

export const failedTitleTest = async (
	{ builder, assert }: ServiceCaseParams,
) => {
	const title = await builder.getTitle()
	assert.assertEquals(title, 'Drowsers')
}

export const succeedTitleTest = async (
	{ builder, assert }: ServiceCaseParams,
) => {
	const title = await builder.getTitle()
	assert.assertEquals(title, 'Drowser Studio')
}
