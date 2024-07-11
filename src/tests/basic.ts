import { ServiceCaseParams } from '../../deps.ts'

/**
 * Create failed title test
 */
export const failedTitleTest = async (
	{ builder, assert }: ServiceCaseParams,
) => {
	const title = await builder.getTitle()
	assert.assertEquals(title, 'Drowsers')
}

/**
 * Create succeed title test
 */
export const succeedTitleTest = async (
	{ builder, assert }: ServiceCaseParams,
) => {
	const title = await builder.getTitle()
	assert.assertEquals(title, 'Drowser Studio')
}
