/**
 * @author  Nigel Abrera
 * @date    July 29, 2024
 */
import './App.css'
import { Button, ButtonProps } from './stories/components';
import { NavigationBar, NavigationBarProps } from './stories/components/page_components/NavigationBar';

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

  return (
    // Configure the container.
    <>
      <NavigationBar {...navigationProps} /><br/>
      <Button {...buttonProps} />
    </>
  )
}

export default App;
