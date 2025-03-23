import {Counter, DataFetcher, ThemedComponent} from '@/app/commponents/hooksComponent'
import { StorageLocal } from '../commponents/localStorage'


export default function Page() {
	return (
		<div>
			<DataFetcher />
			<ThemedComponent/>
			<Counter/>
			<StorageLocal/>
		</div>
	)
}