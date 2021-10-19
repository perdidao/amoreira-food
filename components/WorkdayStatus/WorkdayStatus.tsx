import Moment from 'moment'

// Styles
import styles from './WorkdayStatus.module.scss'

interface WorkdayStatusProps {
  workdays: string[]
}

const WorkdayStatus = (props: WorkdayStatusProps): JSX.Element => {
  const day = Moment().format('dddd')
  const isOpened = props.workdays.includes(day)

  return (
    <p
      className={`${styles.workdayStatus} ${
        isOpened ? styles.workdayStatus_opened : styles.workdayStatus_closed
      }`}
    >
      {isOpened ? 'Aberto' : 'Fechado'}
    </p>
  )
}

export { WorkdayStatus }
