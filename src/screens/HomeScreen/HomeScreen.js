import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = props => {
  const {route} = props;

  const counterValue = useSelector(
    state => state?.counterValueReducers?.countReducer,
  );

  const [textValue, setTextValue] = useState('');
  const [dataList, setDataList] = useState([]);

  // const handleText = e => {
  //   console.log('textVAL', e);
  //   setTextValue(e?.nativeEvent?.text);
  // };

  const handleText = e => {
    console.log('textVAL', e);
    setTextValue(e);
  };

  const addData = () => {
    const tempData = [...dataList, textValue];
    console.log('tempData', tempData);
    setDataList(tempData);
    setTextValue('');
  };

  console.log('dataList', dataList);
  return (
    <View style={styles.mainBody}>
      <View style={styles.textView}>
        <Text>
          Value of Counter from previous Page is: {counterValue?.data}
        </Text>
      </View>
      <TextInput
        value={textValue}
        // onChange={handleText}
        onChangeText={handleText}
        style={styles.textInput}
        placeholder="Enter an input"
      />
      <TouchableOpacity onPress={addData} style={styles.resetButton}>
        <Text style={styles.resetText}>ADD</Text>
      </TouchableOpacity>
      <FlatList
        data={dataList}
        keyExtractor={item => item}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
      <Text>{textValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    // backgroundColor: 'red',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'blue',
  },
  textInput: {
    borderWidth: 0.5,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 2,
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
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

export default HomeScreen;
