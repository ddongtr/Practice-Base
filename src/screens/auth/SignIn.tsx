import * as React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import {commonStyles} from '../../common/commonStyles';
import {reset} from '../../routes/root-navigation';

const SignInScreen = (props: any) => {
  return (
    <View style={commonStyles.container}>
      <Button
        title="Go to App"
        onPress={() => {
          reset();
        }}
      />
      <TouchableOpacity>
        <Text>asjldhakshdas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
