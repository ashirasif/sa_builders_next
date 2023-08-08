
import SaText from './front_page/text'
import SaBottom from './front_page/bottom_text'
import NavigationBar from './nav_bar/NavBar'

export default function Front() {
  return (
    <div className='h-screen overflow-hidden flex flex-col justify-between'> 
      <div className='relative z-20'>
        <NavigationBar props={{
          'Projects':'',
          'Architecture' : '',
          'Contact us' : ''
        }} />
      </div>
      <div className='text-center animate-text-center'>
        <SaText />
      </div>
      <div className='text-center animate-text-btm relative -bottom-[20%]'>
        <SaBottom /> 
      </div>
    </div> 
  )
}





