import { useDispatch, useSelector, } from 'react-redux'

import { changeTheme } from '../../store/slices/themeSlice'
import { themeSelector } from '../../selectors/selectors'
import {Button} from '../../UI/button/Button'


export const Theme = () => {

    const theme = useSelector(themeSelector)

    const dispatch = useDispatch()

  return (
    <div >
        <Button 
          onClick={() => dispatch(changeTheme())}
        >
          {theme === true ? "Light Theme" : 'Dark Theme'}
        </Button>
    </div>
  )
}
