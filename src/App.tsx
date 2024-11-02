import './App.css'
import { Button, ButtonProps } from './stories/components';
import { NavigationBar, NavigationBarProps } from './stories/components/page_components/NavigationBar';
import { Container, ContainerProps } from './stories/components/Container';
import { Hero, HeroProps } from './stories/components';
import { FooterProps, Footer } from './stories/components/page_components/Footer';
import { ToggleProps, Toggle } from './stories/components/base_components/Toggle';

/*
 * Logic flow
TODO: Create section components to build up the pages
TODO: Check this site for reference:
 *  https://webflow.com/ix2
 * Create carousel component
*/

// Functionalities
//? This is how functionalities are used Check Button
const handleButtonClick = () => {
  console.log('button was clicked');
};

const themeToggler = (isChecked: boolean) => {
  console.log(isChecked ? "Dark mode" : "Light mode");
};

// Props 
const toggleProps: ToggleProps = {
  size: 'normal',
  onChange: themeToggler,
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

const heroProps: HeroProps = {
  size: 'normal',
  src: 'image_component.jpg',
  alt: 'sample_image',
};

const footerProps: FooterProps = {
  size: 'normal',
};

/**
 * The app react component that would hold all the components to be presented.
 * @returns Homepage
 */
function App() {
  return (
    <Container {...containerProps}>
      <NavigationBar {...navigationProps} />
      <Toggle {...toggleProps} />
      <Button {...buttonProps}/>
      <Hero {...heroProps} />
      <Hero {...heroProps} />
      <Hero {...heroProps} />
      <Hero {...heroProps} />
      <Footer {...footerProps} />
    </Container>
  );
};

export default App;
