/**
 * @author  Nigel Abrera
 * @date    July 29, 2024
 */
import './App.css'
import { Button, ButtonProps } from './stories/components';
import { NavigationBar, NavigationBarProps } from './stories/components/page_components/NavigationBar';
import { Container, ContainerProps } from './stories/components/Container';

/*
 * Logic flow
TODO: Create section components to build up the pages
TODO: Check this site for reference:
 *  https://webflow.com/ix2
 * Create carousel component
*/


/** Master Plan
 * FIXME: Configure styling of the nav bar especially the dropdown
 */

// Functionalities
const handleButtonClick = () => {
  console.log('button was clicked');
};


// Props 
const buttonProps: ButtonProps = {
  size: 'normal',
  label: 'ButtonTest',
  disabled: false,
  onClick: handleButtonClick,
};

const navigationProps: NavigationBarProps = {
  size: 'normal',
  disabled: false,
  
};

const containerProps: ContainerProps = {
  size: 'normal',
  backgroundColor: '#ffffff',
};

/**
 * The app react component that would hold all the components to be presented.
 * @returns Homepage
 */
function App() {
  return (
    <Container {...containerProps}>
      <NavigationBar {...navigationProps} />
      <Button {...buttonProps} />
    </Container>
  )
}

export default App;
