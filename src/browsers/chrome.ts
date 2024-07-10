import { driver } from '../../deps.ts'

import { failedTitleTest, succeedTitleTest } from '../tests/basic.ts'

const runOnChrome = () => {
	driver({ browser: 'chrome' })
		.then(({ service }) => {
			service.cases = [
				{
					name: 'Verify Failed Title',
					fn: async ({ builder, assert, by }) => {
						await failedTitleTest({ builder, assert, by })
					},
				},
				{
					name: 'Verify Title',
					fn: async ({ builder, assert, by }) => {
						await succeedTitleTest({ builder, assert, by })
					},
				},
			]
		})
		.catch((error) => console.log(error))
}

export { runOnChrome }
