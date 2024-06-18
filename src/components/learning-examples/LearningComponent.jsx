import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import FourthComponent from './FourthComponent';
import ThirdComponent from './ThirdComponent';
import { FifthComponent } from './FirstComponent'
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
    return (
      <div className="LearningComponent">
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
          <FourthComponent></FourthComponent>
          <FifthComponent></FifthComponent>
          <LearningJavaScript></LearningJavaScript>
      </div>
    );
  }