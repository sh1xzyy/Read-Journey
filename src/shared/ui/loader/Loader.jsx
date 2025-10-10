import { PulseLoader } from 'react-spinners'
import css from './styles/loader.module.css'

const Loader = () => {
	return (
		<div className={css.wrapper}>
			<PulseLoader />
		</div>
	)
}

export default Loader
