import * as React from 'react';
import {Button, View} from 'react-native';
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
    </View>
  );
};

export default SignInScreen;
