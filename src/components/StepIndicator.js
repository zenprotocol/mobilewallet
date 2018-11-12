import React from 'react';
import StepIndicator from 'react-native-step-indicator';

const stepIndicator = props => {

  const labels = ["","","","",""];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#2e8be6',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#2e8be6',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#2e8be6',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#2e8be6',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#2e8be6',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 0,
    currentStepLabelColor: '#fe7013'
  }

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={props.currentPosition}
      labels={labels}
    />
  )
}

export default stepIndicator;