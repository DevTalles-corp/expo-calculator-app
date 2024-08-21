import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        50 x 500000000000
      </Text>
      <Text style={globalStyles.subResult}>250</Text>
    </View>
  );
};

export default CalculatorApp;
