import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import useReset from '../../customHooks/useReset';
import Button from '../../components/Button/Button';
import {counterAction} from '../../actions/CounterActions';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const LandingScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {resetValue, setResetValue} = useReset();
  const [value, setValue] = useState(0);

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef?.current?.customRefFunction();
    dispatch(counterAction(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  //   return (
  //     <SafeAreaView style={backgroundStyle}>
  //       <StatusBar
  //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //         backgroundColor={backgroundStyle.backgroundColor}
  //       />
  //       <View>
  //         <Text style={styles.mainContainer}>Hello World</Text>
  //         <View style={styles.horizontalLine}>
  //           <View>
  //             <Text>-</Text>
  //           </View>
  //           <Text>0</Text>
  //           <View>
  //             <Text>+</Text>
  //           </View>
  //         </View>
  //       </View>
  //     </SafeAreaView>
  //   );

  return (
    <View style={styles.pageStyle}>
      <View>
        <Text style={styles.mainContainer}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.horizontalLine}>
          <Button
            onPress={() => {
              setValue(e => e - 1);
              buttonRef?.current?.subtraction();
            }}
            textValue={'--'}
            ref={buttonRef}
          />
          <Text style={styles.countValue}>{value}</Text>
          <Button
            onPress={() => {
              setValue(e => e + 1);
              buttonRef?.current?.addition();
            }}
            textValue={'+'}
            ref={buttonRef}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setResetValue();
            setValue(resetValue);
          }}
          style={styles.resetButton}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={styles.resetButton}>
          <Text style={styles.resetText}>Navigate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    // backgroundColor: 'blue',
    // justifyContent: 'space-between',
    // justifyContent: 'center',
  },
  mainContainer: {
    // backgroundColor: 'red',
  },
  horizontalLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'green',
    // alignSelf: 'flex-start',
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',
    alignItems: 'center',
    // flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
  },
  buttonView: {
    height: 40,
    width: 40,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  countValue: {
    color: 'black',
    fontSize: 24,
    marginHorizontal: 10,
  },
  resetButton: {
    alignSelf: 'center',
    backgroundColor: 'green',
    height: 60,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  resetText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default LandingScreen;
