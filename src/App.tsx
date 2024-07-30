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
      Figure out logic flow of the website
      Configure multi page
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
  };
  
  return (
    <Container {...containerProps}>
      <NavigationBar {...navigationProps} />
      <Button {...buttonProps} />
    </Container>
  )
}

export default App;
