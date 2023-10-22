import { DateRange } from 'react-date-range'



const DatePicker = ({value, handleDate}) => {
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      ranges={[value]}
      onChange={handleDate}
      date={value?.startDate}
      direction='vertical'
      showDateDisplay={false}
      minDate={value?.startDate}
      maxDate={value?.endDate}
    />
  )
}

export default DatePicker