/**
 * @author  Nigel Abrera
 */
import './App.css'
import { Button, ButtonProps } from './stories/components';
import { NavigationBar, NavigationBarProps } from './stories/components/NavigationBar';

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
    <>
      <NavigationBar {...navigationProps} /><br/>
      <Button {...buttonProps} />
    </>
  )
}

export default App;
