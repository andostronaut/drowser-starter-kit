import { runOnChrome } from './src/browsers/chrome.ts'
import { runOnFirefox } from './src/browsers/firefox.ts'

if (import.meta.main) {
	runOnChrome()
	runOnFirefox()
}
