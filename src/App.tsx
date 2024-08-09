/**
 * @author  Nigel Abrera
 * @date    July 29, 2024
 */
import './App.css'
import { Button, ButtonProps } from './stories/components';
import { NavigationBar, NavigationBarProps } from './stories/components/page_components/NavigationBar';
import { Container, ContainerProps } from './stories/components/Container';
/* 
TODO: Figure out what image,
TODO: Figure out logic flow of the website
TODO: Configure multi page (?)
TODO: Modify components and stories
TODO: Edit figma design and finalize for v0.1;
*/
/*
 * Logic flow
TODO: Create section components to build up the pages
TODO: Check this site for reference:
 *  https://webflow.com/ix2
*/

/**
 * The app react component that would be forwarded to the main.
 * @returns Home page
 */
function App() {

  const handleButtonClick = () => {
    console.log('button was clicked');
  };

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
  
  return (
    <Container {...containerProps}>
      <NavigationBar {...navigationProps} />
      <Button {...buttonProps} />
    </Container>
  )
}

export default App;
